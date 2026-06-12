import { Star } from "lucide-react";
import { useUnit } from "../context/UnitContext";

export default function UnitSelector() {
  const { activeUnit, setActiveUnit, units } = useUnit();

  return (
    <section id="unit-selector" className="bg-white py-10">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <span className="mb-2 inline-block rounded-full bg-clay/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-clay">
          Choose Your Setup
        </span>
        <h2 className="mt-3 font-heading text-2xl font-bold text-cocoa sm:text-3xl">
          Which Configuration Fits Your Group?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-cocoa/60">
          All three options are the same 2-storey townhouse near the airport — choose the bed count that fits your group best.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {units.map((unit) => {
            const isActive = activeUnit.id === unit.id;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnit(unit)}
                className={`group relative rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-clay bg-clay/5 shadow-md"
                    : "border-cocoa/10 bg-white hover:border-clay/30 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-heading text-xl font-bold ${
                      isActive ? "text-clay" : "text-cocoa"
                    }`}
                  >
                    {unit.name}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                      isActive
                        ? "bg-clay text-white"
                        : "bg-cocoa/5 text-cocoa/50"
                    }`}
                  >
                    {unit.badge}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-amber text-amber" />
                  <span className="text-sm font-semibold text-cocoa">
                    {unit.rating}
                  </span>
                </div>
                <div className="mt-3 flex gap-4 text-sm">
                  {unit.about.stats.map((stat) => (
                    <span key={stat.label} className="text-cocoa/50">
                      <strong className="text-cocoa">{stat.value}</strong>{" "}
                      {stat.label}
                    </span>
                  ))}
                </div>
                {isActive && (
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-clay">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
                    Selected
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
