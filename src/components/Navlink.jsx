import { NavLink } from "react-router-dom";

export default function Navlink() {
  return (
    <ul className="flex w-full gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-lime-700 border-b-[3px] border-slate-800"
            : "relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-lime-700  border-b-[3px] border-slate-800"
            : "relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          isActive
            ? "text-lime-700  border-b-[3px] border-slate-800"
            : "relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Tech Stack
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "text-lime-700  border-b-[3px] border-slate-800"
            : "relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-lime-700  border-b-[3px] border-slate-800"
            : "relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Contact
      </NavLink>
    </ul>
  );
}
