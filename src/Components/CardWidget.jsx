import React from "react";
import "./CardWidget.css";

export default function CardWidget({ value, label, trend }) {
  const trendClass = trend < 0 ? "down" : "up";
  const trendPercent = (trend * 100).toFixed(0);
  const sign = trend > 0 ? "+" : "";

  return (
    <div className="card-widget">
      <div className="value">
        {label === "Compliance Rate" && typeof value === "number"
          ? `${(value * 100).toFixed(0)}%`
          : value}
      </div>
      <div className="label">{label}</div>
      {trend !== undefined && (
        <div className={`trend ${trendClass}`}>{sign}{trendPercent}%</div>
      )}
    </div>
  );
}
