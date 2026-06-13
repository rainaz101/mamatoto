import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, Heart, Receipt, CheckSquare, FileText, BarChart3, Users, Stethoscope, LogOut } from "lucide-react";
import { base44 } from "@/api/base44Client";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/hub", label: "Hub", icon: LayoutDashboard },
  { path: "/clients", label: "Client Services", icon: Users },
  { path: "/doulas", label: "Doulas", icon: Stethoscope },
  { path: "/donations", label: "Donations", icon: Heart },
  { path: "/expenses", label: "Expenses", icon: Receipt },
  { path: "/tasks", label: "Tasks", icon: CheckSquare },
  { path: "/reports", label: "Reports", icon: BarChart3 },
  { path: "/project", label: "Project Brief", icon: FileText },
];

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-4 z-50 mx-4 mt-4 mb-6 rounded-2xl bg-primary px-4 py-3 shadow-lg shadow-primary/20 overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-secondary text-primary shadow-md shadow-secondary/30 -translate-y-0.5"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden lg:inline">{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => base44.auth.logout()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white transition-all ml-auto whitespace-nowrap"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden lg:inline">Logout</span>
          </button>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-4 pb-12">
        <Outlet />
      </main>
    </div>
  );
}
