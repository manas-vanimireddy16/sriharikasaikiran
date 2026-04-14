import { BedDouble } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const AccommodationSection = () => (
  <section className="px-5 py-10">
    <AnimatedSection>
      <div className="wedding-card text-center">
        <div className="h-14 w-14 rounded-2xl bg-gold/15 flex items-center justify-center mx-auto mb-4">
          <BedDouble className="h-7 w-7 text-gold-dark" />
        </div>
        <h3 className="font-serif font-semibold text-base mb-2">Accommodation</h3>
        <p className="text-sm text-muted-foreground">
          {weddingConfig.accommodationMessage}
        </p>
      </div>
    </AnimatedSection>
  </section>
);

export default AccommodationSection;
