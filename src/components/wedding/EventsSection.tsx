import { MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Wedding Ceremony",
    emoji: "💍",
    venue: "Sri Lakshmi Function Hall",
    address: "Plot No. 45, Kukatpally, Hyderabad, Telangana 500072",
    time: "10:00 AM – 1:00 PM",
    mapUrl: "https://maps.google.com/?q=Sri+Lakshmi+Function+Hall+Kukatpally+Hyderabad",
  },
  {
    title: "Reception & Dinner",
    emoji: "🎉",
    venue: "Grand Palace Convention Centre",
    address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
    time: "7:00 PM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Grand+Palace+Convention+Centre+Banjara+Hills+Hyderabad",
  },
];

const EventsSection = () => (
  <section className="px-5 py-6">
    <p className="ornament text-lg mb-2">✦</p>
    <h2 className="section-title text-center mb-5">Wedding Events</h2>
    <div className="space-y-4 stagger-children">
      {events.map((e) => (
        <div key={e.title} className="wedding-card">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{e.emoji}</span>
            <h3 className="font-serif text-lg font-semibold text-foreground">{e.title}</h3>
          </div>
          <p className="font-medium text-sm text-foreground mb-1">{e.venue}</p>
          <p className="text-xs text-muted-foreground mb-2">{e.address}</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Clock className="h-3.5 w-3.5" />
            <span>{e.time}</span>
          </div>
          <a
            href={e.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wedding-btn wedding-btn-sage w-full justify-center text-sm"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
