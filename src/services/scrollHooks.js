import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
}

export default useScrollToAnchor;
