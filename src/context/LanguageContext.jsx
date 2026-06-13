import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || "en";
    }
    return "en";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "zh" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (path, vars = {}) => {
      const keys = path.split(".");
      let value = translations[lang];
      for (const key of keys) {
        if (value == null) break;
        value = value[key];
      }
      if (typeof value !== "string") {
        value = translations["en"];
        for (const key of keys) {
          if (value == null) break;
          value = value[key];
        }
      }
      if (typeof value !== "string") return path;
      return Object.entries(vars).reduce(
        (str, [k, v]) => str.replace(`{${k}}`, v),
        value
      );
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
