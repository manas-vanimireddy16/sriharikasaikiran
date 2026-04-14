import { Phone, Heart } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedSection from "./AnimatedSection";

const HostFamilySection = () => (
  <section className="px-5 py-10">
    <AnimatedSection>
      <p className="ornament text-lg mb-2">✦</p>
      <h2 className="section-title text-center mb-6">Host Families</h2>
    </AnimatedSection>

    <div className="space-y-4">
      {weddingConfig.families.map((f, i) => (
        <AnimatedSection key={f.side} delay={i * 150}>
          <div className="wedding-card text-center">
            <div className="h-10 w-10 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-3">
              <Heart className="h-4 w-4 text-maroon" />
            </div>
            <h3 className="font-serif font-semibold text-sm mb-2 text-maroon">{f.side}</h3>
            {f.names.map((n) => (
              <p key={n} className="text-sm font-medium text-foreground">{n}</p>
            ))}
            <p className="text-xs text-muted-foreground mt-2 mb-3">{f.address}</p>
            <div className="flex flex-col gap-2">
              {f.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="wedding-btn wedding-btn-outline justify-center text-xs">
                  <Phone className="h-3.5 w-3.5 text-sage-dark" />
                  {p}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default HostFamilySection;
