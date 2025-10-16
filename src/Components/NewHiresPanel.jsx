import React from "react";
import "./Panel.css";

export default function NewHiresPanel({ hires }) {
  return (
    <div className="panel">
      <h3>New Hires</h3>
      <div className="list">
        {hires.map((h, idx) => (
          <div className="item" key={idx}>
            <span>{h.name}</span>
            <span className="time">{h.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
