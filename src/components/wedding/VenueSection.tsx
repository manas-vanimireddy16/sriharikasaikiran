import { MapPin } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const formatDate = (date) => {
  if (!date) return null;

  if (date.includes("-")) return date;

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const VenueSection = () => (
  <section id="venue" className="px-5 py-10">
    <AnimatedSection>
      <p className="ornament text-lg mb-2">✦</p>
      <h2 className="section-title text-center mb-6">Wedding Venues</h2>
    </AnimatedSection>

    <div className="space-y-5">
      {weddingConfig.events.map((event, i) => (
        <AnimatedSection key={event.title} delay={i * 150}>

          {/* ✅ Simple Card */}
          <div className="wedding-card overflow-hidden p-5 rounded-3xl">

            <div className="flex items-start gap-3">

              {/* Icon */}
              <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-lg">{event.emoji}</span>
              </div>

              <div className="flex-1 min-w-0">

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-foreground mb-0.5">
                  {event.title}
                </h3>

                {/* Venue */}
                <p className="font-medium text-sm text-maroon mb-0.5">
                  {event.venue}
                </p>

                {/* Address */}
                <p className="text-xs text-muted-foreground mb-1">
                  {event.address}
                </p>

                {/* Time + Date */}
                <p className="text-xs text-muted-foreground">
                  🕐 {event.time}
                  {event.date && (
                    <>
                      {" "}• {formatDate(event.date)}
                    </>
                  )}
                </p>

              </div>
            </div>

            {/* View Location */}
            {event.mapUrl && (
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 mt-4 text-sm text-gold-dark font-medium"
              >
                <MapPin className="h-4 w-4" />
                View Location
              </a>
            )}

          </div>

        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default VenueSection;