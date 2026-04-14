import { useState } from "react";
import { Car, Bus, TrainFront, Navigation } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const iconMap = { car: Car, bus: Bus, train: TrainFront };
const { tabs, routes } = weddingConfig.directions;

const HowToReachSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = routes[tabs[activeTab] as keyof typeof routes];

  return (
    <section className="px-5 py-10">
      <AnimatedSection>
        <p className="ornament text-lg mb-2">✦</p>
        <h2 className="section-title text-center mb-2">How to Reach</h2>
        <p className="text-center text-xs text-muted-foreground mb-5">
          Choose your preferred mode of travel
        </p>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="flex gap-2 mb-5">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                i === activeTab
                  ? "bg-gold text-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <div className="space-y-3" key={activeTab}>
        {data.modes.map((mode, i) => {
          const Icon = iconMap[mode.type];
          return (
            <AnimatedSection key={mode.label} delay={i * 100}>
              <div className="wedding-card">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-gold/15 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-gold-dark" />
                  </div>
                  <h4 className="font-serif font-semibold text-sm">{mode.label}</h4>
                </div>
                <ol className="space-y-1.5 mb-3 ml-1">
                  {mode.steps.map((s, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-gold-dark font-medium min-w-[16px]">{j + 1}.</span> {s}
                    </li>
                  ))}
                </ol>
                <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground mb-3">
                  <span>⏱ {mode.duration}</span>
                  <span>📏 {mode.distance}</span>
                  <span>💰 {mode.cost}</span>
                </div>
                <a
                  href={data.mapBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wedding-btn wedding-btn-outline w-full justify-center text-xs"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Navigate
                </a>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
};

export default HowToReachSection;
