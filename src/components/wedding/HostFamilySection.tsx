import { Phone, Heart } from "lucide-react";

const families = [
  {
    side: "Groom's Family",
    names: ["Shri. Ramesh Kumar", "Smt. Lakshmi Devi"],
    address: "H.No 4-56, Gandhi Nagar, Hyderabad",
    phones: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    side: "Bride's Family",
    names: ["Shri. Suresh Reddy", "Smt. Padma Reddy"],
    address: "Plot 12, Jubilee Hills, Hyderabad",
    phones: ["+91 91234 56789", "+91 91234 56780"],
  },
];

const HostFamilySection = () => (
  <section className="px-5 py-6">
    <p className="ornament text-lg mb-2">✦</p>
    <h2 className="section-title text-center mb-5">Host Families</h2>
    <div className="space-y-4 stagger-children">
      {families.map((f) => (
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
