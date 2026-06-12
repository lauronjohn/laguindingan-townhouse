import { useUnit } from "../context/UnitContext";
import { siteData } from "../data/siteData";
import { Award } from "lucide-react";

export default function About() {
  const { activeUnit } = useUnit();
  const { about } = activeUnit;

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="animate-fade-up">
            <span className="mb-3 inline-block rounded-full bg-sage/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sage">
              {activeUnit.name} &middot; {activeUnit.badge}
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-cocoa sm:text-4xl">
              {about.headline}
            </h2>
            <p className="mt-6 leading-relaxed text-cocoa/70">
              {about.description}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-warm px-3 py-4 text-center shadow-sm"
                >
                  <span className="block font-heading text-2xl font-bold text-clay">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-cocoa/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-sage/20 bg-sage/5 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <Award className="h-6 w-6 text-sage" />
              </div>
              <div>
                <p className="text-sm font-semibold text-cocoa">
                  Guest Favourite on Airbnb
                </p>
                <p className="text-xs text-cocoa/60">
                  One of the most loved homes on Airbnb, based on ratings, reviews & reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={about.image}
                alt={`${activeUnit.name} interior`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md">
              <img
                src={siteData.host.photo}
                alt={siteData.host.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-clay/30"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-cocoa">
                  Hosted by {siteData.host.name}
                </p>
                <p className="text-sm text-cocoa/60">
                  Superhost &middot; Hosting since {siteData.host.since}
                </p>
              </div>
              <div className="ml-auto rounded-full bg-amber/10 px-3 py-1">
                <span className="text-xs font-semibold text-amber">Superhost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
