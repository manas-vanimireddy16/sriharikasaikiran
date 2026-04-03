import { useState } from "react";
import { Car, Bus, TrainFront, Navigation } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

const iconMap = { car: Car, bus: Bus, train: TrainFront };
const { tabs, routes } = weddingConfig.directions;

const HowToReachSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = routes[tabs[activeTab] as keyof typeof routes];

  return (
    <section className="px-5 py-6">
      <p className="ornament text-lg mb-2">✦</p>
      <h2 className="section-title text-center mb-4">How to Reach</h2>

      <div className="flex gap-2 mb-5">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-all ${
              i === activeTab
                ? 'bg-gold text-foreground shadow-sm'
                : 'bg-card border border-border text-muted-foreground'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-3 stagger-children" key={activeTab}>
        {data.modes.map((mode) => {
          const Icon = iconMap[mode.type];
          return (
            <div key={mode.label} className="wedding-card">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="h-4 w-4 text-gold-dark" />
                <h4 className="font-serif font-semibold text-sm">{mode.label}</h4>
              </div>
              <ol className="space-y-1.5 mb-3 ml-1">
                {mode.steps.map((s, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex gap-2">
                    <span className="text-gold-dark font-medium">{i + 1}.</span> {s}
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
          );
        })}
      </div>
    </section>
  );
};

export default HowToReachSection;
