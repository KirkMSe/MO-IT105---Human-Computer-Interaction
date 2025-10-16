import React from "react";
import "./Panel.css";

export default function ActivityPanel({ activities }) {
  return (
    <div className="panel">
      <h3>Recent Activity</h3>
      <div className="list">
        {activities.map((a, idx) => (
          <div className="item" key={idx}>
            <span>{a.text}</span>
            <span className="time">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
