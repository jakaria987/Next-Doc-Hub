import DashboardLayout from "@/components/Dashboard/Dashboard";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <DashboardLayout />
      {children}
    </div>
  );
};

export default Dashboard;
