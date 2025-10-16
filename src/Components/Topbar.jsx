import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <div className="icon"></div>
      </div>
      <div className="title">Dashboard</div>
      <div className="profile-icon"></div>
    </div>
  );
}
