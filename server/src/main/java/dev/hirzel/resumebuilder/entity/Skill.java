package dev.hirzel.resumebuilder.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Skill
{
	@Id
	private long id = -1;
	private long userId;
	private String name;

	public Skill() {}

	public Skill(long userId, String name)
	{
		this.userId = userId;
		this.name = name;
	}

	public long getId()
	{
		return id;
	}

	public long getUserId()
	{
		return userId;
	}

	public String getName()
	{
		return name;
	}
}
