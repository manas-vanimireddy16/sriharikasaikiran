import { Clock, MapPin } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const formatDate = (date) => {
  if (!date) return null;

  // If already formatted like "27-April-2026", return as is
  if (date.includes("-")) return date;

  // If ISO format (recommended)
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const EventsSection = () => (
  <section id="events" className="px-5 py-10">
    <AnimatedSection>
      <p className="ornament text-lg mb-2">✦</p>
      <h2 className="section-title text-center mb-2">Wedding Events</h2>
      <p className="text-center text-xs text-muted-foreground mb-6">
        Join us as we celebrate our union
      </p>
    </AnimatedSection>

    <div className="space-y-4">
      {weddingConfig.events.map((e, i) => (
        <AnimatedSection key={e.title} delay={i * 150}>
          <div className="wedding-card">

            {/* Top Section */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <span className="text-xl">{e.emoji}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {e.title}
                </h3>
                <p className="text-xs text-muted-foreground">{e.venue}</p>
              </div>
            </div>

            {/* Address */}
            <p className="text-xs text-muted-foreground mb-3">
              {e.address}
            </p>

            {/* Time + Date */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-gold-dark" />
              <span>{e.time}</span>

              {e.date && (
                <>
                  <span>•</span>
                  <span>📅 {formatDate(e.date)}</span>
                </>
              )}
            </div>

            {/* Map Button */}
            {e.mapUrl && (
              <a
                href={e.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-gold-dark hover:underline"
              >
                <MapPin className="h-3.5 w-3.5" />
                View Location
              </a>
            )}

          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default EventsSection;