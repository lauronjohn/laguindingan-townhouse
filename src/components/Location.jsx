import { Plane, TreePine, MapPin } from "lucide-react";
import { siteData } from "../data/siteData";

const iconMap = { Plane, TreePine, MapPin };

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-sage/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sage">
            Location
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-cocoa sm:text-4xl">
            {siteData.location.headline}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {siteData.location.highlights.map((item) => {
            const Icon = iconMap[item.icon] || MapPin;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sage/10 text-sage">
                  <Icon className="h-5 w-5" />
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

        <div className="mt-12 overflow-hidden rounded-3xl shadow-lg">
          <iframe
            title="Laguindingan Townhouse Location"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${siteData.location.lng - 0.02}%2C${siteData.location.lat - 0.01}%2C${siteData.location.lng + 0.02}%2C${siteData.location.lat + 0.01}&layer=mapnik&marker=${siteData.location.lat}%2C${siteData.location.lng}`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="h-[400px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
