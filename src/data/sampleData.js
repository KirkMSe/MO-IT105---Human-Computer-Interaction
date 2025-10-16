export const dashboardStats = {
  totalEmployees: 256,
  pendingLeaves: 18,
  complianceRate: 0.96,
  newHiresThisMonth: 15,
  trend: {
    employees: 0.05,
    leaves: -0.12,
    newHires: 0.25,
  },
};

export const recentActivities = [
  { text: "John Doe submitted leave request", time: "2 hrs ago" },
  { text: "Payroll for August processed", time: "Yesterday" },
  { text: "Jessica Lee updated profile", time: "2 days ago" },
  { text: "Mark Santos joined company", time: "3 days ago" },
];

export const newHires = [
  { name: "Mark Santos", date: "Oct 5, 2025" },
  { name: "Paula Gomez", date: "Oct 3, 2025" },
  { name: "Samuel Cruz", date: "Sep 28, 2025" },
];

export const growthData = {
  labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  datasets: [
    {
      label: "Total Employees",
      data: [220, 230, 240, 245, 250, 256],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: true,
      tension: 0.3,
    },
  ],
};
