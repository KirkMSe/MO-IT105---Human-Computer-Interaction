import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import CardWidget from "./components/CardWidget";
import ActivityPanel from "./components/ActivityPanel";
import NewHiresPanel from "./components/NewHiresPanel";
import EmployeeGrowthChart from "./components/EmployeeGrowthChart";

import {
  dashboardStats,
  recentActivities,
  newHires,
  growthData,
} from "./data/sampleData";

function App() {
  const {
    totalEmployees,
    pendingLeaves,
    complianceRate,
    newHiresThisMonth,
    trend,
  } = dashboardStats;

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main">
        <Topbar />

        <div className="cards">
          <CardWidget
            value={totalEmployees}
            label="Total Employees"
            trend={trend.employees}
          />
          <CardWidget
            value={pendingLeaves}
            label="Pending Leave Requests"
            trend={trend.leaves}
          />
          <CardWidget
            value={complianceRate}
            label="Compliance Rate"
          />
          <CardWidget
            value={newHiresThisMonth}
            label="New Hires (This Month)"
            trend={trend.newHires}
          />
        </div>

        <div className="panel-container">
          <ActivityPanel activities={recentActivities} />
          <NewHiresPanel hires={newHires} />
          <EmployeeGrowthChart data={growthData} />
        </div>
      </div>
    </div>
  );
}

export default App;
