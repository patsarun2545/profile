import { useState } from "react";
import { LangContext } from "./LangContext";
import { translations } from "../data/i18n";

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const t = translations[lang];

  const toggle = () =>
    setLang((l) => {
      const next = l === "en" ? "th" : "en";
      localStorage.setItem("lang", next);
      return next;
    });

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}
