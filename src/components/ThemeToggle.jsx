import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function ThemeToggle({ light = false }) {
  const { dark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full p-2 transition-colors ${
        light ? "hover:bg-white/10" : "hover:bg-cocoa/10"
      }`}
      aria-label={dark ? t("aria.switchLight") : t("aria.switchDark")}
    >
      {dark ? (
        <Sun className="h-5 w-5 text-amber" />
      ) : (
        <Moon className={`h-5 w-5 ${light ? "text-white/70" : "text-cocoa/60"}`} />
      )}
    </button>
  );
}
