import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Pages/Profile";
import JobDetails from "./Pages/JobDetails";
import MyApplications from "./Pages/MyApplications";
import JobApplicationForm from "./Components/JobApplicationForm"; // Import the JobApplicationForm component

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route
          path={"/home"}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/job-details/:id" element={<JobDetails />} />
        
        {/* Job Application Form Route */}
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <JobApplicationForm />
            </PrivateRoute>
          }
        />
        
        <Route
          path={"/profile"}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-applications"
          element={
            <PrivateRoute>
              <MyApplications />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
