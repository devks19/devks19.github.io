import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ROUTES } from "../routesOrder";

const ROUTE_LABELS = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/skills": "Skills",
  "/contact": "Contact",
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = ROUTES.indexOf(location.pathname);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown" && currentIndex < ROUTES.length - 1) {
        navigate(ROUTES[currentIndex + 1]);
      }
      if (e.key === "ArrowUp" && currentIndex > 0) {
        navigate(ROUTES[currentIndex - 1]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, navigate]);

  return (
    <nav
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
      aria-label="Page navigation"
    >
      {ROUTES.map((route, index) => {
        const isActive = location.pathname === route;
        return (
          <div key={route} className="relative group flex items-center">
            {/* Tooltip — hidden on mobile */}
            <span className="absolute right-6 bg-[#1a1a1a]/90 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/10 whitespace-nowrap pointer-events-none
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block">
              {ROUTE_LABELS[route]}
            </span>

            <button
              onClick={() => navigate(route)}
              aria-label={`Navigate to ${ROUTE_LABELS[route]}`}
              className="relative flex items-center justify-center w-5 h-5"
            >
              {isActive && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute inset-0 rounded-full bg-[#748d7b]/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-[#748d7b]"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
}
