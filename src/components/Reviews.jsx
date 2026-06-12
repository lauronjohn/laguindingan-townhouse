import { Star, BadgeCheck } from "lucide-react";
import { siteData } from "../data/siteData";

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber text-amber" : "fill-none text-cocoa/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-amber">
            Guest Reviews
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-cocoa sm:text-4xl">
            {siteData.reviews.headline}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars rating={5} />
            <span className="text-sm font-semibold text-cocoa">
              {siteData.rating} &middot; {siteData.reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.reviews.items.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
            >
              <Stars rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cocoa/70">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-cocoa/5 pt-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-cocoa">{review.name}</span>
                  <BadgeCheck className="h-4 w-4 text-sage" />
                </div>
                <span className="text-xs text-cocoa/40">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
