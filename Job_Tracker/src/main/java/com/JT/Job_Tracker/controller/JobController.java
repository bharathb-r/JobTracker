package com.JT.Job_Tracker.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.JT.Job_Tracker.model.Job;
import com.JT.Job_Tracker.service.JobService;

@RestController
@RequestMapping("/api/jobs")
public class JobController {



    @Autowired private JobService jobService;

    @GetMapping
    public ResponseEntity<List<Job>> getAllJobs(@RequestParam UUID userId) {
        return ResponseEntity.ok(jobService.getJobsByUser(userId));
    }

    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job job, @RequestParam UUID userId) {
        return ResponseEntity.ok(jobService.createJob(job, userId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable UUID id, @RequestBody Job job) {
        return ResponseEntity.ok(jobService.updateJob(id, job));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable UUID id) {
        jobService.deleteJob(id);
        return ResponseEntity.noContent().build();
    }
}
