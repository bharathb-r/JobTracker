package com.JT.Job_Tracker.Service;

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
        User user = userRepo.findById(userId).orElseThrow();
        job.setUser(user);
        return jobRepo.save(job);
    }

    public List<Job> getJobs(UUID userId) {
        return jobRepo.findByUserId(userId);
    }

    public Job updateJob(UUID id, Job jobDetails) {
        Job job = jobRepo.findById(id).orElseThrow();
        job.setTitle(jobDetails.getTitle());
        job.setCompany(jobDetails.getCompany());
        job.setLocation(jobDetails.getLocation());
        job.setJobType(jobDetails.getJobType());
        job.setStatus(jobDetails.getStatus());
        job.setAppliedDate(jobDetails.getAppliedDate());
        job.setNotes(jobDetails.getNotes());
        return jobRepo.save(job);
    }

    public void deleteJob(UUID id) {
        jobRepo.deleteById(id);
    }

}
