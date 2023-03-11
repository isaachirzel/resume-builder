package dev.hirzel.resumebuilder.util;

import dev.hirzel.resumebuilder.dto.UserDto;
import dev.hirzel.resumebuilder.exception.ApiError;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Arrays;

public class RequestUtils
{
	public static final String TOKEN_COOKIE_NAME = "hirzel_auth_token";

	public static String getSessionToken(HttpServletRequest request)
	{
		var cookie = Arrays.stream(request.getCookies())
				.filter(x -> x.getName().equals("hirzel_session_token"))
				.findFirst()
				.orElseThrow(() -> ApiError.Unauthorized("No session token cookie is present."));

		return cookie.getValue();
	}

	public static UserDto getUser(HttpServletRequest request) throws Exception
	{
		var object = request.getAttribute("user");

		if (object instanceof UserDto user)
			return user;

		throw new Exception("User has not been set.");
	}
}
