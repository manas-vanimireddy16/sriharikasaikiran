import { MapPin, Locate } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const SmartLocationSection = () => {
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `https://www.irctc.co.in/nget/train-search?from=${latitude},${longitude}`;
        window.open(url, "_blank");
      },
      () => alert("Unable to detect your location. Please enable location services.")
    );
  };

  return (
    <section className="px-5 py-10">
      <AnimatedSection>
        <div className="wedding-card text-center">
          <div className="h-14 w-14 rounded-2xl bg-gold/15 flex items-center justify-center mx-auto mb-4">
            <Locate className="h-7 w-7 text-gold-dark" />
          </div>
          <h3 className="font-serif font-semibold text-base mb-2">Smart Location</h3>
          <p className="text-xs text-muted-foreground mb-5">
            Detect your current location to find the best train routes to {weddingConfig.destinationCity}
          </p>
          <button onClick={handleDetectLocation} className="wedding-btn wedding-btn-gold w-full justify-center">
            <MapPin className="h-4 w-4" />
            Detect My Location & Find Trains
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default SmartLocationSection;
