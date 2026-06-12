import { siteData } from "../data/siteData";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cocoa/5 bg-cocoa py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <span className="font-heading text-lg font-bold text-white">
            {siteData.name}
          </span>

          <div className="flex items-center gap-1 text-sm text-white/50">
            <Heart className="h-4 w-4 text-clay" />
            <span>{siteData.footer.text}</span>
          </div>

          <a
            href={siteData.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/50 hover:text-white"
          >
            View on Airbnb
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Laguindingan Townhouse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
