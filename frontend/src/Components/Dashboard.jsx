import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const [statusData, setStatusData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [jobs, setJobs] = useState([]); // New state to store jobs data

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch both jobs and applied-jobs data
        const responseJobs = await axios.get("http://localhost:3001/jobs");
        const responseAppliedJobs = await axios.get("http://localhost:3001/applied-jobs");
        const jobsData = responseJobs.data;
        const appliedJobsData = responseAppliedJobs.data;

        setJobs(jobsData);

        // Step 1: Map the status from jobs to applied-jobs
        const appliedJobsWithStatus = appliedJobsData.map((appliedJob) => {
          // Find the corresponding job using jobId
          const job = jobsData.find((job) => job.id === appliedJob.jobId);
          return {
            ...appliedJob,
            status: job ? job.status : "Unknown", // Add status from the job if found
          };
        });

        // Step 2: Status Distribution (Applied, Interview, Rejected, Offer)
        const statusCounts = appliedJobsWithStatus.reduce((acc, job) => {
          acc[job.status] = (acc[job.status] || 0) + 1;
          return acc;
        }, {});

        const statusFormatted = Object.keys(statusCounts).map((status) => ({
          name: status,
          value: statusCounts[status],
        }));

        setStatusData(statusFormatted);

        // Step 3: Weekly Submissions (based on applicationDate)
        const weekCounts = {};

        appliedJobsWithStatus.forEach((job) => {
          const date = new Date(job.applicationDate);
          const week = `Week ${getWeekNumber(date)}`;
          weekCounts[week] = (weekCounts[week] || 0) + 1;
        });

        const weeklyFormatted = Object.keys(weekCounts).map((week) => ({
          week,
          count: weekCounts[week],
        }));

        setWeeklyData(weeklyFormatted);

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  // Helper function to get week number
  function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  return (
    <div style={{ marginTop: "40px", padding: "20px" }}>
      <h2>Dashboard & Analytics</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {/* Pie Chart */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h3>Application Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="value"
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h3>Weekly Application Submissions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
