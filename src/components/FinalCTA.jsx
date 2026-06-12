import { Shield, MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-clay to-amber py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {siteData.finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            {siteData.finalCta.subheadline}
          </p>

          <a
            href={siteData.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-10 py-5 text-lg font-bold text-clay shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            {siteData.finalCta.button}
          </a>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-white/70 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Secure booking via Airbnb</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">Host replies within 1 hour</span>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/50">
            {siteData.finalCta.footnote}
          </p>
        </div>
      </div>

      <div className="absolute -top-4 left-0 right-0 h-8 bg-cream [clip-path:ellipse(60%_100%_at_50%_0%)]" />
    </section>
  );
}
