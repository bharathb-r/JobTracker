import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../Components/JobCard";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard"; // ✅ Import Dashboard

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("http://localhost:3001/jobs");
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      
      <Navbar />
      {/* Dashboard Section */}
      <Dashboard />
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
