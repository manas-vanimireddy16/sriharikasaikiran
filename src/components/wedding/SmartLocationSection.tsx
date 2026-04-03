import { MapPin, Locate } from "lucide-react";

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
    <section className="px-5 py-6">
      <div className="wedding-card text-center">
        <Locate className="h-8 w-8 text-gold-dark mx-auto mb-3" />
        <h3 className="font-serif font-semibold text-base mb-2">Smart Location</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Detect your current location to find the best train routes to Hyderabad
        </p>
        <button onClick={handleDetectLocation} className="wedding-btn wedding-btn-gold w-full justify-center">
          <MapPin className="h-4 w-4" />
          Detect My Location & Find Trains
        </button>
      </div>
    </section>
  );
};

export default SmartLocationSection;
