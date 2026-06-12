import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ light = false }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full p-2 transition-colors ${
        light ? "hover:bg-white/10" : "hover:bg-cocoa/10"
      }`}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <Sun className="h-5 w-5 text-amber" />
      ) : (
        <Moon className={`h-5 w-5 ${light ? "text-white/70" : "text-cocoa/60"}`} />
      )}
    </button>
  );
}
