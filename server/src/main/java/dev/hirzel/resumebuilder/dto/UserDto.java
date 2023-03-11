package dev.hirzel.resumebuilder.dto;

public class UserDto
{
	private long id;
	private String username;
	private String firstName;
	private String lastName;

	public UserDto() {}

	public long getId()
	{
		return id;
	}

	public String getUsername()
	{
		return username;
	}

	public String getFirstName()
	{
		return firstName;
	}

	public String getLastName()
	{
		return lastName;
	}
}
