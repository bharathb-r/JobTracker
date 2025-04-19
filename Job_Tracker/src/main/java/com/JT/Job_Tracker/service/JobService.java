package com.JT.Job_Tracker.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JT.Job_Tracker.model.Job;
import com.JT.Job_Tracker.model.User;
import com.JT.Job_Tracker.repo.JobRepo;
import com.JT.Job_Tracker.repo.UserRepo;

@Service
public class JobService {

    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private UserRepo userRepo;

    public Job createJob(Job job, UUID userId) {
        User user = userRepo.findById(userId).orElseThrow(()-> new RuntimeException("User not found"));
        job.setUser(user);
        return jobRepo.save(job);
    }

    public List<Job> getJobsByUser(UUID userId) {
        return jobRepo.findByUserId(userId);
    }

    public Job updateJob(UUID id, Job newJob) {
        Job existing = jobRepo.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
        existing.setTitle(newJob.getTitle());
        existing.setCompany(newJob.getCompany());
        existing.setLocation(newJob.getLocation());
        existing.setJobType(newJob.getJobType());
        existing.setStatus(newJob.getStatus());
        existing.setAppliedDate(newJob.getAppliedDate());
        existing.setNotes(newJob.getNotes());
        return jobRepo.save(existing);
    }

    public void deleteJob(UUID id) {
        if (!jobRepo.existsById(id)) {
            throw new RuntimeException("Job not found");
        }
        jobRepo.deleteById(id);
    }
}