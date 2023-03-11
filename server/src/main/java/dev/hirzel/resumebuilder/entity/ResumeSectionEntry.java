package dev.hirzel.resumebuilder.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity
public class ResumeSectionEntry
{
	@Id
	private long id = -1;
	private long resumeSectionId;
	private long entryId;

	public ResumeSectionEntry() {}

	public ResumeSectionEntry(long resumeSectionId, long entryId)
	{
		this.resumeSectionId = resumeSectionId;
		this.entryId = entryId;
	}

	public long getId()
	{
		return id;
	}

	public long getResumeSectionId()
	{
		return resumeSectionId;
	}

	public long getEntryId()
	{
		return entryId;
	}
}
