import { useState, useEffect } from "react";

export function useBreakpoint() {
  const [bp, setBp] = useState("lg");
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setBp("xs");
      else if (w < 640) setBp("sm");
      else if (w < 900) setBp("md");
      else setBp("lg");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}