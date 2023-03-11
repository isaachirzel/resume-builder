package dev.hirzel.resumebuilder.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Entry
{
	@Id
	private long id = -1;
	private long userId;
	private String title;
	private String organization;
	private String url;
	private Date from;
	private Date to;

	public Entry() {}

	public Entry(long userId, String title, String organization, String url, Date from, Date to)
	{
		this.userId = userId;
		this.title = title;
		this.organization = organization;
		this.url = url;
		this.from = from;
		this.to = to;
	}

	public long getId() {
		return id;
	}

	public long getUserId() {
		return userId;
	}

	public String getTitle() {
		return title;
	}

	public String getOrganization() {
		return organization;
	}

	public String getUrl() {
		return url;
	}

	public Date getFrom() {
		return from;
	}

	public Date getTo() {
		return to;
	}
}
