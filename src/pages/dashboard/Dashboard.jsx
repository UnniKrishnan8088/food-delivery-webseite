import React from "react";
import DashboardHeader from "../../ui/dashboardHeader/DashboardHeader";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
