import { useState, useEffect } from "react";

const getBp = () => {
  if (typeof window === "undefined") return "lg";
  const w = window.innerWidth;
  if (w < 480) return "xs";
  if (w < 640) return "sm";
  if (w < 900) return "md";
  return "lg";
};

export function useBreakpoint() {
  const [bp, setBp] = useState(getBp); // lazy init — no flash on mobile
  useEffect(() => {
    const update = () => setBp(getBp());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}