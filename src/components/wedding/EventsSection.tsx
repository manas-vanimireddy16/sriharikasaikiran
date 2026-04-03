import { MapPin, Clock } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

const EventsSection = () => (
  <section className="px-5 py-6">
    <p className="ornament text-lg mb-2">✦</p>
    <h2 className="section-title text-center mb-5">Wedding Events</h2>
    <div className="space-y-4 stagger-children">
      {weddingConfig.events.map((e) => (
        <div key={e.title} className="wedding-card">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{e.emoji}</span>
            <h3 className="font-serif text-lg font-semibold text-foreground">{e.title}</h3>
          </div>
          <p className="font-medium text-sm text-foreground mb-1">{e.venue}</p>
          <p className="text-xs text-muted-foreground mb-2">{e.address}</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Clock className="h-3.5 w-3.5" />
            <span>{e.time}</span>
          </div>
          <a
            href={e.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wedding-btn wedding-btn-sage w-full justify-center text-sm"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
