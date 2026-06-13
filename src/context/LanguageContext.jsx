import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "zh") return stored;
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "zh" : "en"));
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

  const tf = useCallback(
    (path, fallback, vars = {}) => {
      const result = t(path, vars);
      if (result === path) return fallback;
      return result;
    },
    [lang, t]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, tf }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
