package dev.hirzel.resumebuilder.dto;

public class AuthenticationDto
{
	private String token;
	private UserDto user;

	public AuthenticationDto() {}

	public AuthenticationDto(String token)
	{
		this.token = token;
	}

	public String getToken()
	{
		return token;
	}

	public UserDto getUser()
	{
		return user;
	}
}
