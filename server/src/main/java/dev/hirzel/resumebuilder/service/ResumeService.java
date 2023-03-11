package dev.hirzel.resumebuilder.service;

import dev.hirzel.resumebuilder.dto.ResumeDto;
import dev.hirzel.resumebuilder.dto.UserDto;
import dev.hirzel.resumebuilder.entity.Resume;
import dev.hirzel.resumebuilder.exception.ApiError;
import dev.hirzel.resumebuilder.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResumeService
{
	@Autowired
	ResumeRepository resumeRepository;
	@Autowired
	UserService userService;

	public Resume createResume(ResumeDto resumeInfo, UserDto user) throws Exception
	{
		if (resumeInfo.getName() == null)
			throw ApiError.BadRequest("Resume name is required.");

		var resume = new Resume(user.getId(), resumeInfo.getName());
		var savedResume = resumeRepository.save(resume);

		return savedResume;
	}
}
