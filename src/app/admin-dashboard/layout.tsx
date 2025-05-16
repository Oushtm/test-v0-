import React from "react";
import { Metadata } from "next";
import AdminThemeProvider from "./theme-provider";
import "./admin-styles.css";

export const metadata = {
  title: 'Admin Dashboard - RENTABILIO',
  description: 'Admin dashboard for property management',
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="admin-dashboard-root">
      <AdminThemeProvider>
        {children}
      </AdminThemeProvider>
    </div>
  );
} 