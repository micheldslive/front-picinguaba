import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    if (current !== location.pathname) {
      window.scrollTo(0, 0);
      setCurrent(location.pathname);
    }
  }, [location, current]);

  return null;
};

export default ScrollToTop;
