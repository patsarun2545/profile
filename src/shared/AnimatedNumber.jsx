import { useState, useEffect, useRef } from "react";

export default function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let n = 0;
        const step = () => {
          n += value / 35;
          if (n < value) {
            setCount(Math.floor(n));
            requestAnimationFrame(step);
          } else setCount(value);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}