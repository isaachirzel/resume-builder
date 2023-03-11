package dev.hirzel.resumebuilder.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Contact
{
	@Id
	private long id = -1;
	private long userId;
	private String label;
	private String url;

	public Contact() {}

	public Contact(long userId, String label, String url)
	{
		this.userId = userId;
		this.label = label;
		this.url = url;
	}

	public long getId()
	{
		return id;
	}

	public long getUserId() {
		return userId;
	}

	public String getLabel()
	{
		return label;
	}

	public String getUrl()
	{
		return url;
	}
}
