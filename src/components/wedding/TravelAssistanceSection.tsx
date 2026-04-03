import { MessageCircle, HelpCircle } from "lucide-react";

const TravelAssistanceSection = () => {
  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      window.open("https://wa.me/919876543210?text=Hi!%20I%20need%20help%20with%20travel%20arrangements%20for%20the%20wedding.", "_blank");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const text = `Hi! I'm at https://maps.google.com/?q=${latitude},${longitude} — I need pickup/travel assistance for the wedding.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, "_blank");
      },
      () => {
        window.open("https://wa.me/919876543210?text=Hi!%20I%20need%20help%20with%20travel%20arrangements%20for%20the%20wedding.", "_blank");
      }
    );
  };

  return (
    <section className="px-5 py-6 pb-12">
      <div className="wedding-card text-center">
        <HelpCircle className="h-8 w-8 text-sage-dark mx-auto mb-3" />
        <h3 className="font-serif font-semibold text-base mb-2">Travel Assistance</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Need help with pickup or travel arrangements? Share your live location and we'll assist you.
        </p>
        <button onClick={handleShareLocation} className="wedding-btn wedding-btn-sage w-full justify-center">
          <MessageCircle className="h-4 w-4" />
          Share Location via WhatsApp
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-[10px] text-muted-foreground mt-8 mb-4">
        Made with ❤️ for Rahul & Priya's Wedding
      </p>
    </section>
  );
};

export default TravelAssistanceSection;
