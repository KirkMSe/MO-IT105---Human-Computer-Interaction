import React from "react";
import "./Sidebar.css";  // optionally split CSS per component

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="logo">MotorPH</div>
        <div className="user-info">
          <div className="avatar"></div>
          <div className="details">
            <div>Maria Santos</div>
            <div className="subtitle">HR & Payroll Officer</div>
          </div>
        </div>
      </div>
      <nav>
        <a href="#"><div className="icon"></div>Dashboard</a>
        <a href="#"><div className="icon"></div>Employees</a>
        <a href="#"><div className="icon"></div>Payroll</a>
        <a href="#"><div className="icon"></div>Attendance & Leave</a>
      </nav>
      <div className="bottom-nav">
        <a href="#"><div className="icon"></div>Profile</a>
        <a href="#"><div className="icon"></div>Settings</a>
      </div>
    </div>
  );
}
