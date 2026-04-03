import { useState, useEffect } from "react";
import { Music, Music2, CloudSun, CalendarPlus, TrafficCone, Wifi } from "lucide-react";

const WEDDING_DATE = new Date("2025-02-15T10:00:00");

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      clearInterval(timer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const handleAddToCalendar = () => {
    const start = "20250215T100000";
    const end = "20250215T230000";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony&dates=${start}/${end}&location=Wedding+Venue&details=You+are+invited+to+our+wedding!`;
    window.open(url, "_blank");
  };

  const handleWeather = () => {
    window.open("https://weather.com", "_blank");
  };

  const handleTraffic = () => {
    window.open("https://www.google.com/maps/@17.385,78.4867,12z/data=!5m1!1e1", "_blank");
  };

  return (
    <section className="relative px-5 pt-12 pb-8 text-center animate-fade-slide-up">
      {/* Online indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <span className={`h-2 w-2 rounded-full ${online ? 'bg-sage-dark' : 'bg-maroon'}`} />
        <span className="text-xs text-muted-foreground">{online ? 'Online' : 'Offline'}</span>
      </div>

      {/* Music toggle */}
      <button
        onClick={() => setMusicPlaying(!musicPlaying)}
        className="absolute top-4 left-4 h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center transition-all hover:scale-110"
        style={{ boxShadow: 'var(--shadow-soft)' }}
      >
        {musicPlaying ? <Music className="h-4 w-4 text-maroon" /> : <Music2 className="h-4 w-4 text-muted-foreground" />}
      </button>

      {/* Ornament */}
      <p className="ornament text-2xl mb-2">✦</p>
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Wedding Invitation</p>

      {/* Names */}
      <h1 className="font-serif text-4xl font-semibold text-foreground leading-tight mb-1">
        Rahul
      </h1>
      <p className="ornament text-lg my-1">&</p>
      <h1 className="font-serif text-4xl font-semibold text-foreground leading-tight mb-4">
        Priya
      </h1>

      <p className="text-sm text-muted-foreground mb-1">Are getting married</p>
      <p className="font-serif text-lg text-maroon font-medium mb-1">Saturday, 15th February 2025</p>
      <p className="text-sm text-muted-foreground mb-8">Hyderabad, Telangana</p>

      {/* Countdown */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {[
          { val: timeLeft.days, label: "Days" },
          { val: timeLeft.hours, label: "Hours" },
          { val: timeLeft.minutes, label: "Minutes" },
          { val: timeLeft.seconds, label: "Seconds" },
        ].map(({ val, label }) => (
          <div key={label} className="wedding-card py-3 px-1 text-center">
            <p className="font-serif text-2xl font-semibold text-maroon">{String(val).padStart(2, '0')}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-3 gap-2 stagger-children">
        <button onClick={handleWeather} className="wedding-btn wedding-btn-outline flex-col gap-1 py-3">
          <CloudSun className="h-4 w-4 text-gold-dark" />
          <span className="text-xs">Weather</span>
        </button>
        <button onClick={handleAddToCalendar} className="wedding-btn wedding-btn-gold flex-col gap-1 py-3">
          <CalendarPlus className="h-4 w-4" />
          <span className="text-xs">Calendar</span>
        </button>
        <button onClick={handleTraffic} className="wedding-btn wedding-btn-outline flex-col gap-1 py-3">
          <TrafficCone className="h-4 w-4 text-gold-dark" />
          <span className="text-xs">Traffic</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
