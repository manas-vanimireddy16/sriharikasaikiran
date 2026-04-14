import { MapPin, Navigation } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const VenueSection = () => (
  <section id="venue" className="px-5 py-10">
    <AnimatedSection>
      <p className="ornament text-lg mb-2">✦</p>
      <h2 className="section-title text-center mb-6">Wedding Venues</h2>
    </AnimatedSection>

    <div className="space-y-5">
      {weddingConfig.events.map((event, i) => (
        <AnimatedSection key={event.title} delay={i * 150}>
          <div className="wedding-card overflow-hidden">
            {/* Map Preview */}
            <div className="rounded-2xl overflow-hidden mb-4 border border-border">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(event.venue + " " + event.address)}&output=embed&z=15`}
                className="w-full h-40"
                style={{ border: 0 }}
                loading="lazy"
                title={`Map - ${event.venue}`}
                allowFullScreen
              />
            </div>

            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-lg">{event.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-0.5">{event.title}</h3>
                <p className="font-medium text-sm text-maroon mb-0.5">{event.venue}</p>
                <p className="text-xs text-muted-foreground mb-1">{event.address}</p>
                <p className="text-xs text-muted-foreground">🕐 {event.time}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wedding-btn wedding-btn-outline justify-center text-xs"
              >
                <MapPin className="h-3.5 w-3.5 text-sage-dark" />
                Google Maps
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.venue + " " + event.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wedding-btn wedding-btn-gold justify-center text-xs"
              >
                <Navigation className="h-3.5 w-3.5" />
                Navigate
              </a>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default VenueSection;
