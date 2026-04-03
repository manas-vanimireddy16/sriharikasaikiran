import { Phone, Heart } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

const HostFamilySection = () => (
  <section className="px-5 py-6">
    <p className="ornament text-lg mb-2">✦</p>
    <h2 className="section-title text-center mb-5">Host Families</h2>
    <div className="space-y-4 stagger-children">
      {weddingConfig.families.map((f) => (
        <div key={f.side} className="wedding-card text-center">
          <Heart className="h-4 w-4 text-maroon mx-auto mb-2" />
          <h3 className="font-serif font-semibold text-sm mb-2 text-maroon">{f.side}</h3>
          {f.names.map((n) => (
            <p key={n} className="text-sm font-medium text-foreground">{n}</p>
          ))}
          <p className="text-xs text-muted-foreground mt-2 mb-3">{f.address}</p>
          <div className="flex flex-col gap-2">
            {f.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="wedding-btn wedding-btn-outline justify-center text-xs">
                <Phone className="h-3.5 w-3.5 text-sage-dark" />
                {p}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HostFamilySection;
