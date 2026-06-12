import { useState, useEffect, useRef } from "react";
import { Star, Award, MessageCircle, ShieldCheck } from "lucide-react";
import { siteData } from "../data/siteData";

function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function TrustItem({ icon: Icon, value, label, suffix = "", highlight = false }) {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-2">
      <Icon className={`h-5 w-5 ${highlight ? "text-amber" : "text-sage"}`} />
      <span className="font-heading text-2xl font-bold text-cocoa">
        <CountUp end={value} suffix={suffix} />
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-cocoa/60">
        {label}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="border-b border-cocoa/5 bg-white py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          <TrustItem
            icon={Star}
            value={siteData.rating}
            label="Average Rating"
            highlight
          />
          <TrustItem icon={Award} value={106} label="Total Reviews" />
          <div className="hidden sm:block">
            <div className="flex flex-col items-center gap-1 px-4 py-2">
              <ShieldCheck className="h-5 w-5 text-amber" />
              <span className="font-heading text-lg font-bold text-cocoa whitespace-nowrap">
                Superhost
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-cocoa/60">
                Verified
              </span>
            </div>
          </div>
          <TrustItem icon={MessageCircle} value={100} suffix="%" label="Response Rate" />
          <div className="hidden sm:block">
            <div className="flex flex-col items-center gap-1 px-4 py-2">
              <Award className="h-5 w-5 text-amber" />
              <span className="font-heading text-lg font-bold text-cocoa whitespace-nowrap">
                Guest Favourite
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-cocoa/60">
                Airbnb Badge
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
