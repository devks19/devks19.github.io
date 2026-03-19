import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../routesOrder";
import { isMobile } from "../utils/isMobile";

export function useSwipeRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const startY = useRef(0);
  const locked = useRef(false);

  useEffect(() => {
    if (!isMobile()) return;

    const onTouchStart = (e) => {
      startY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (locked.current) return;

      const endY = e.changedTouches[0].clientY;
      const delta = startY.current - endY;

      // Ignore tiny swipes
      if (Math.abs(delta) < 50) return;

      const index = ROUTES.indexOf(location.pathname);
      if (index === -1) return;

      // Swipe up → next
      if (delta > 0 && index < ROUTES.length - 1) {
        locked.current = true;
        navigate(ROUTES[index + 1]);
      }

      // Swipe down → previous
      if (delta < 0 && index > 0) {
        locked.current = true;
        navigate(ROUTES[index - 1]);
      }

      setTimeout(() => {
        locked.current = false;
      }, 600);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [location.pathname, navigate]);
}
