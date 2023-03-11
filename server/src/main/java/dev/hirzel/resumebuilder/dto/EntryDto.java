package dev.hirzel.resumebuilder.dto;

import dev.hirzel.resumebuilder.entity.Entry;

import java.util.Date;

public class EntryDto
{
	private Long id;
	private String title;
	private String organization;
	private String url;
	private Date from;
	private Date to;

	public EntryDto() {}

	public EntryDto(Entry entry)
	{
		this.id = entry.getId();
		this.title = entry.getTitle();
		this.organization = entry.getOrganization();
		this.url = entry.getUrl();
		this.from = entry.getFrom();
		this.to = entry.getTo();
	}

	public Long getId()
	{
		return id;
	}

	public String getTitle()
	{
		return title;
	}

	public String getOrganization()
	{
		return organization;
	}

	public String getUrl()
	{
		return url;
	}

	public Date getFrom()
	{
		return from;
	}

	public Date getTo()
	{
		return to;
	}
}
