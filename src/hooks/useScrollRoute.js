import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../routesOrder";

export function useScrollRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const locked = useRef(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (locked.current) return;

      const currentY = window.scrollY;
      const direction = currentY > lastY.current ? "down" : "up";
      lastY.current = currentY;

      const atBottom =
        window.innerHeight + currentY >=
        document.documentElement.scrollHeight - 10;

      const atTop = currentY <= 0;

      const currentIndex = ROUTES.indexOf(location.pathname);
      if (currentIndex === -1) return;

      // ⬇️ SCROLL DOWN → NEXT ROUTE
      if (direction === "down" && atBottom && currentIndex < ROUTES.length - 1) {
        locked.current = true;
        navigate(ROUTES[currentIndex + 1]);
        return;
      }

      // ⬆️ SCROLL UP → PREVIOUS ROUTE
      if (direction === "up" && atTop && currentIndex > 0) {
        locked.current = true;
        navigate(ROUTES[currentIndex - 1]);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      locked.current = false;
      lastY.current = 0;
    };
  }, [location.pathname, navigate]);
}
