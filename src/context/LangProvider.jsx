import { useState, useEffect } from "react";
import { LangContext } from "./LangContext";
import { translations } from "../data/i18n";

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    document.documentElement.lang = savedLang;
    return savedLang;
  });
  const t = translations[lang];

  const toggle = () =>
    setLang((l) => {
      const next = l === "en" ? "th" : "en";
      localStorage.setItem("lang", next);
      document.documentElement.lang = next;
      return next;
    });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}
