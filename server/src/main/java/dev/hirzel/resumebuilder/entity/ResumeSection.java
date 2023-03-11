package dev.hirzel.resumebuilder.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ResumeSection
{
	@Id
	private long id;
	private long resumeId;
	private String name;

	public ResumeSection() {}

	public ResumeSection(long resumeId, String name)
	{
		this.resumeId = resumeId;
		this.name = name;
	}

	public long getId()
	{
		return id;
	}

	public long getResumeId()
	{
		return resumeId;
	}

	public String getName()
	{
		return name;
	}
}
