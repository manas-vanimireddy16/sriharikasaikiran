import { useState } from "react";
import { Car, Bus, TrainFront, Navigation } from "lucide-react";

const tabs = ["Wedding Ceremony", "Evening Reception"];

const directions = {
  "Wedding Ceremony": {
    mapBase: "https://maps.google.com/?daddr=Sri+Lakshmi+Function+Hall+Kukatpally+Hyderabad",
    modes: [
      {
        icon: Car,
        label: "By Car",
        steps: ["Take NH65 towards Kukatpally", "Exit at KPHB Colony", "Turn left at Forum Mall", "Venue is 500m on the right"],
        duration: "~45 min from city center",
        distance: "18 km",
        cost: "₹200-300 (fuel)",
      },
      {
        icon: Bus,
        label: "By Bus",
        steps: ["Take TSRTC Bus 216 from Secunderabad", "Alight at Kukatpally Bus Stop", "Walk 10 min towards Forum Mall", "Venue is near Forum Mall"],
        duration: "~1 hr 15 min",
        distance: "20 km",
        cost: "₹35-50",
      },
      {
        icon: TrainFront,
        label: "By Train",
        steps: ["Take MMTS to Kukatpally Station", "Auto from station (5 min)", "Ask for Sri Lakshmi Function Hall"],
        duration: "~40 min + auto",
        distance: "15 km",
        cost: "₹15 + ₹50 auto",
      },
    ],
  },
  "Evening Reception": {
    mapBase: "https://maps.google.com/?daddr=Grand+Palace+Convention+Centre+Banjara+Hills+Hyderabad",
    modes: [
      {
        icon: Car,
        label: "By Car",
        steps: ["Take Road No. 12, Banjara Hills", "Follow signs to GVK One Mall", "Venue is 200m past the mall"],
        duration: "~30 min from city center",
        distance: "10 km",
        cost: "₹150-200 (fuel)",
      },
      {
        icon: Bus,
        label: "By Bus",
        steps: ["Take Bus 127 to Banjara Hills", "Alight at Road No. 12 stop", "Walk 5 min south"],
        duration: "~50 min",
        distance: "12 km",
        cost: "₹30-40",
      },
      {
        icon: TrainFront,
        label: "By Train",
        steps: ["Take MMTS to Necklace Road", "Auto to Banjara Hills (10 min)"],
        duration: "~35 min + auto",
        distance: "8 km",
        cost: "₹10 + ₹80 auto",
      },
    ],
  },
};

const HowToReachSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = directions[tabs[activeTab] as keyof typeof directions];

  return (
    <section className="px-5 py-6">
      <p className="ornament text-lg mb-2">✦</p>
      <h2 className="section-title text-center mb-4">How to Reach</h2>

      {/* Tabs */}
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
        {data.modes.map((mode) => (
          <div key={mode.label} className="wedding-card">
            <div className="flex items-center gap-2 mb-3">
              <mode.icon className="h-4 w-4 text-gold-dark" />
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
        ))}
      </div>
    </section>
  );
};

export default HowToReachSection;
