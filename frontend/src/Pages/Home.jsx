import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../Components/JobCard";
import Navbar from "../Components/Navbar";
 
const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);  // State to handle errors
 
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/jobs/list/all", {
          headers: {
            "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          },
        });
        setJobs(response.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(error `${err.message}`);
        // If there's a response from the server, we can capture that too:
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        }
      }
    };
 
    fetchJobs();
  }, []);
 
  return (
    <div>
      <Navbar />
      <h1>Job Listings</h1>
 
      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}
 
      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
};
 
export default Home;