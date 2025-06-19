import { Outlet } from "react-router-dom";
import Card from "../components/dashboard/Card";
import { Sidebar } from "../components/Sidebar";

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-200 text-base-content">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-md border-r border-base-300">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Card>
            <Outlet />
          </Card>
        </div>
      </main>
    </div>
  );
};
