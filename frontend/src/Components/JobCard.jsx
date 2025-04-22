import React from "react";
import { Link } from "react-router-dom"; // Link for navigation

const JobCard = ({ job }) => {
  // Add a check for job data to avoid rendering errors if properties are missing
  if (!job || !job.company || !job.role || !job.salary || !job.postDate) {
    return <div>Invalid job data</div>; // Handle missing or invalid data
  }

  return (
    <div className="job-card" style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "20px" }}>
      <h3>{job.company} - {job.role}</h3>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p><strong>Posted on:</strong> {job.postDate}</p>

      {/* View Details Button */}
      <Link to={`/job-details/${job.id}`}>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
