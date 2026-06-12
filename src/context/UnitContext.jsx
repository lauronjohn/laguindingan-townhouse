import { createContext, useContext, useState } from "react";
import { siteData } from "../data/siteData";

const UnitContext = createContext(null);

export function UnitProvider({ children }) {
  const [activeUnit, setActiveUnit] = useState(siteData.units[0]);

  return (
    <UnitContext.Provider value={{ activeUnit, setActiveUnit, units: siteData.units }}>
      {children}
    </UnitContext.Provider>
  );
}

export function useUnit() {
  const ctx = useContext(UnitContext);
  if (!ctx) throw new Error("useUnit must be used within UnitProvider");
  return ctx;
}
