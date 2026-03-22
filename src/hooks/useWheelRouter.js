import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../routesOrder";

export function useWheelRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const locked = useRef(false);
  const THRESHOLD = 60;

  useEffect(() => {
    const onWheel = (e) => {

      if (locked.current) return;

      if (Math.abs(e.deltaY) < THRESHOLD) return;

      const direction = e.deltaY > 0 ? "down" : "up";

      
      const index = ROUTES.indexOf(location.pathname);

      if (index === -1) return;

      if (direction === "down" && index < ROUTES.length - 1) {
        locked.current = true;
        navigate(ROUTES[index + 1]);
      }

      if (direction === "up" && index > 0) {
        locked.current = true;
        navigate(ROUTES[index - 1]);
      }

      // unlock after animation time
      setTimeout(() => {
        locked.current = false;
        scrollAccum.current=0;
      }, 700);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      locked.current = false;
    };
  }, [location.pathname, navigate]);
}
