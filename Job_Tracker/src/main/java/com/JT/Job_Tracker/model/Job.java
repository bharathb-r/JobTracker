package com.JT.Job_Tracker.model;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "jobs")
@Data
public class Job {

    @Id
    @GeneratedValue(generator = "uuid")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String title;
    private String company;
    private String location;
    private String jobType;  // Full-time, Part-time etc.
    private String status;   // Applied, Interview, Rejected, Offer 
    private LocalDate appliedDate;

    @Column(columnDefinition = "TEXT")
    private String notes;

}

