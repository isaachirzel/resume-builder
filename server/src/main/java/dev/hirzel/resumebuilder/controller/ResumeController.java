package dev.hirzel.resumebuilder.controller;

import dev.hirzel.resumebuilder.dto.ResumeDto;
import dev.hirzel.resumebuilder.entity.Resume;
import dev.hirzel.resumebuilder.service.ResumeService;
import dev.hirzel.resumebuilder.util.RequestUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/api/resumes")
public class ResumeController
{
    @Autowired
    ResumeService resumeService;

    public Resume createResume(HttpServletRequest request, @RequestBody ResumeDto dto) throws Exception
    {
        var user = RequestUtils.getUser(request);

        return resumeService.createResume(dto, user);
    }
    @GetMapping("{id}")
    public Resume getResume(@PathVariable int id)
    {
        return new Resume(id, "");
    }
}
