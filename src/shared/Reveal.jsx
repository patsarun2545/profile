import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useScrollReveal();
  const transforms = {
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.65s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.65s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}