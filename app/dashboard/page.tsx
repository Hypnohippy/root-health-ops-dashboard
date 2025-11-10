// app/dashboard/page.tsx
import React from "react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-900">
      <div className="bg-white rounded-2xl shadow p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Root Health Dashboard</h1>
        <p className="text-slate-600">
          Dashboard connected!  We’ll add Airtable data next.
        </p>
      </div>
    </div>
  );
}
