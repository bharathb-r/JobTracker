package com.JT.Job_Tracker.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
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

    public Job createJob(Job job) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName(); 
        User user = userRepo.findByEmail(email)
                            .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
        job.setUser(user);
        return jobRepo.save(job);
    }

    // Method to get jobs by user ID
    public List<Job> getJobs(UUID userId) {
        return jobRepo.findByUserId(userId);
    }

    // Method to update an existing job
    public Job updateJob(UUID id, Job jobDetails) {
        Job job = jobRepo.findById(id).orElseThrow(() -> new RuntimeException("Job not found with id: " + id));
        job.setTitle(jobDetails.getTitle());
        job.setCompany(jobDetails.getCompany());
        job.setLocation(jobDetails.getLocation());
        job.setJobType(jobDetails.getJobType());
        job.setStatus(jobDetails.getStatus());
        job.setAppliedDate(jobDetails.getAppliedDate());
        job.setNotes(jobDetails.getNotes());
        return jobRepo.save(job);
    }

    // Method to delete a job
    public void deleteJob(UUID id) {
        jobRepo.deleteById(id);
    }
}
