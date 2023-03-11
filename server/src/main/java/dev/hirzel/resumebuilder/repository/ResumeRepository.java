package dev.hirzel.resumebuilder.repository;

import dev.hirzel.resumebuilder.entity.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long>
{
}
