import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="font-rubik flex flex-col font-bold text-slate-800 min-h-screen bg-secondary">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
