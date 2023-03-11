package dev.hirzel.resumebuilder.dto;

public class VerificationDto {
	private String token;

	public VerificationDto(String token)
	{
		this.token = token;
	}

	public String getToken()
	{
		return this.token;
	}
}
