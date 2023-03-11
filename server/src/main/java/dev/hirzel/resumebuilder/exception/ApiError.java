package dev.hirzel.resumebuilder.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class ApiError
{
	public static ResponseStatusException BadRequest(String message)
	{
		return new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
	}

	public static ResponseStatusException Unauthorized(String message)
	{
		return new ResponseStatusException(HttpStatus.UNAUTHORIZED, message);
	}
}
