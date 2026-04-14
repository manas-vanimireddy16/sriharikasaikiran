import { useState, useEffect } from "react";
import { CalendarPlus, MapPin, Play, ChevronDown } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const diff = weddingConfig.date.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const handleAddToCalendar = () => {
    const { startDateTime, endDateTime, title, description } = weddingConfig.calendar;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDateTime}/${endDateTime}&location=${encodeURIComponent(weddingConfig.city)}&details=${encodeURIComponent(description)}`;
    window.open(url, "_blank");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with zoom animation */}
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src={heroBg}
          alt="Wedding decoration"
          className="w-full h-full object-cover"
          width={768}
          height={1024}
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-12 animate-fade-slide-up">
        <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6 font-sans">
          We're getting married
        </p>

        <h1 className="font-serif text-5xl font-semibold text-white leading-tight mb-1 drop-shadow-lg">
          {weddingConfig.couple.groomName}
        </h1>
        <p className="font-serif text-2xl text-gold-light my-2">&</p>
        <h1 className="font-serif text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-lg">
          {weddingConfig.couple.brideName}
        </h1>

        <p className="font-serif text-lg text-gold-light font-medium mb-1">
          {weddingConfig.displayDate}
        </p>
        <p className="text-sm text-white/70 mb-8">{weddingConfig.city}</p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-3 mb-10 max-w-xs mx-auto">
          {[
            { val: timeLeft.days, label: "Days" },
            { val: timeLeft.hours, label: "Hours" },
            { val: timeLeft.minutes, label: "Mins" },
            { val: timeLeft.seconds, label: "Secs" },
          ].map(({ val, label }) => (
            <div key={label} className="backdrop-blur-md bg-white/10 rounded-2xl py-3 px-1 border border-white/20">
              <p className="font-serif text-2xl font-semibold text-white">{String(val).padStart(2, "0")}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/60 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection("gallery")}
            className="hero-btn backdrop-blur-md bg-white/15 border border-white/25 text-white"
          >
            <Play className="h-3.5 w-3.5" />
            <span>Gallery</span>
          </button>
          <button
            onClick={() => scrollToSection("venue")}
            className="hero-btn backdrop-blur-md bg-gold/80 text-foreground border border-gold-light/30"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Directions</span>
          </button>
          <button
            onClick={handleAddToCalendar}
            className="hero-btn backdrop-blur-md bg-white/15 border border-white/25 text-white"
          >
            <CalendarPlus className="h-3.5 w-3.5" />
            <span>Calendar</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("events")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
