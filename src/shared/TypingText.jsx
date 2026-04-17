import { useState, useEffect } from "react";

export default function TypingText({ words, speed = 80, pause = 1800 }) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setDeleting(true);
        }, pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, speed / 2);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx, words, speed, pause]);

  return (
    <span>
      {displayed}
      <span
        style={{
          opacity: blink ? 1 : 0,
          color: "#22c55e",
          transition: "opacity 0.1s",
        }}
      >
        |
      </span>
    </span>
  );
}