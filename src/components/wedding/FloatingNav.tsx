import { useState, useEffect } from "react";
import { CalendarDays, Image, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "Calendar", icon: CalendarDays },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "venue", label: "Directions", icon: MapPin },
];

const FloatingNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex gap-1.5 rounded-2xl border border-border bg-card/90 backdrop-blur-lg px-2 py-1.5 shadow-lg">
      {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={cn(
            "flex items-center gap-1.5 rounded-xl px-3 py-2 text-[11px] font-medium transition-all duration-300",
            active === id
              ? "bg-primary/20 text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          style={active === id ? { boxShadow: "0 0 8px hsl(var(--gold) / 0.3)" } : undefined}
        >
          <Icon className="h-3.5 w-3.5" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default FloatingNav;
