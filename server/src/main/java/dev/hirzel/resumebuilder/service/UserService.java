package dev.hirzel.resumebuilder.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.hirzel.resumebuilder.dto.AuthenticationDto;
import dev.hirzel.resumebuilder.dto.UserDto;
import dev.hirzel.resumebuilder.dto.VerificationDto;
import dev.hirzel.resumebuilder.exception.ApiError;
import org.springframework.stereotype.Service;

import javax.net.ssl.HttpsURLConnection;
import java.net.URL;

@Service
public class UserService
{
	private static URL authenticateUrl;

	public UserDto getUser(String token) throws Exception
	{
		if (authenticateUrl == null)
			 authenticateUrl = new URL("https://authentication.hirzel.dev/verify");

		var connection = (HttpsURLConnection)authenticateUrl.openConnection();

		connection.setRequestMethod("POST");
		connection.setDoInput(true);
		connection.setDoOutput(true);

		var outputStream = connection.getOutputStream();
		var objectMapper = new ObjectMapper();
		var verificationInfo = new VerificationDto(token);

		objectMapper.writeValue(outputStream, verificationInfo);

		var status = connection.getResponseCode();

		switch (status)
		{
			case 200: // OK
				break;

			case 401: // Unauthorized
				throw ApiError.Unauthorized("Token is invalid.");

			default: // Unexpected error
				throw new Exception("Failed to retrieve user. Received code " + status);
		}

		var inputStream = connection.getInputStream();
		var userDto = objectMapper.readValue(inputStream, UserDto.class);

		return userDto;
	}
}
