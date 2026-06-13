import { useLanguage } from "../context/LanguageContext";

const labels = { en: "EN", zh: "中文" };

export default function LanguageToggle({ light = false }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
        light
          ? "text-white/70 hover:text-white hover:bg-white/10"
          : "text-cocoa/60 hover:text-cocoa hover:bg-cocoa/5"
      }`}
      aria-label={`Switch language to ${lang === "en" ? "Chinese" : "English"}`}
    >
      {labels[lang]}
    </button>
  );
}
