import { Wifi, ChefHat, Monitor, Tv, Car, Shirt, Sun, DoorOpen } from "lucide-react";
import { useUnit } from "../context/UnitContext";

const iconMap = {
  Wifi,
  ChefHat,
  Monitor,
  Tv,
  Car,
  Shirt,
  Sun,
  DoorOpen,
};

export default function Features() {
  const { activeUnit } = useUnit();
  const { features } = activeUnit;

  return (
    <section id="features" className="bg-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-clay/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-clay">
            {activeUnit.name} Amenities
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-cocoa sm:text-4xl">
            {features.headline}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => {
            const Icon = iconMap[item.icon] || Sun;
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-clay/10 text-clay transition-colors group-hover:bg-clay group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-cocoa">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
