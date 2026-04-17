import { useState } from "react";
import { LangContext } from "./LangContext";
import { translations } from "../data/i18n";

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const toggle = () => setLang((l) => (l === "en" ? "th" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}