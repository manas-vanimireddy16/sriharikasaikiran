import { MessageCircle, HelpCircle } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const TravelAssistanceSection = () => {
  const { whatsappNumber, couple } = weddingConfig;

  const handleShareLocation = () => {
    const fallbackMsg = `Hi! I need help with travel arrangements for the wedding.`;
    if (!navigator.geolocation) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fallbackMsg)}`, "_blank");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const text = `Hi! I'm at https://maps.google.com/?q=${latitude},${longitude} — I need pickup/travel assistance for the wedding.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
      },
      () => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fallbackMsg)}`, "_blank");
      }
    );
  };

  return (
    <section className="px-5 py-10 pb-16">
      <AnimatedSection>
        <div className="wedding-card text-center">
          <div className="h-14 w-14 rounded-2xl bg-sage/20 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="h-7 w-7 text-sage-dark" />
          </div>
          <h3 className="font-serif font-semibold text-base mb-2">Travel Assistance</h3>
          <p className="text-xs text-muted-foreground mb-5">
            Need help with pickup or travel arrangements? Share your live location and we'll assist you.
          </p>
          <button onClick={handleShareLocation} className="wedding-btn wedding-btn-sage w-full justify-center">
            <MessageCircle className="h-4 w-4" />
            Share Location via WhatsApp
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <p className="text-center text-[10px] text-muted-foreground mt-10 mb-4">
          Made with ❤️ for {couple.groomName} & {couple.brideName}'s Wedding
        </p>
      </AnimatedSection>
    </section>
  );
};

export default TravelAssistanceSection;
