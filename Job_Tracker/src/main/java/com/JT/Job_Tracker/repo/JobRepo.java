package com.JT.Job_Tracker.repo;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.JT.Job_Tracker.model.Job;
import com.JT.Job_Tracker.model.User;

public interface JobRepo extends JpaRepository<Job,UUID > {
	List<Job> findByUserId(UUID userId);

}
