import { Clock } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

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
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <span className="text-xl">{e.emoji}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{e.title}</h3>
                <p className="text-xs text-muted-foreground">{e.venue}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{e.address}</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-gold-dark" />
              <span>{e.time}</span>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default EventsSection;
