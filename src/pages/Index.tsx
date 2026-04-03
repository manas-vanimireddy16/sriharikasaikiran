import HeroSection from "@/components/wedding/HeroSection";
import EventsSection from "@/components/wedding/EventsSection";
import HowToReachSection from "@/components/wedding/HowToReachSection";
import BookingSection from "@/components/wedding/BookingSection";
import SmartLocationSection from "@/components/wedding/SmartLocationSection";
import HostFamilySection from "@/components/wedding/HostFamilySection";
import AccommodationSection from "@/components/wedding/AccommodationSection";
import TravelAssistanceSection from "@/components/wedding/TravelAssistanceSection";
import SectionDivider from "@/components/wedding/SectionDivider";

const Index = () => (
  <div className="mobile-wrapper">
    <HeroSection />
    <SectionDivider />
    <EventsSection />
    <SectionDivider />
    <HowToReachSection />
    <SectionDivider />
    <BookingSection />
    <SectionDivider />
    <SmartLocationSection />
    <SectionDivider />
    <HostFamilySection />
    <SectionDivider />
    <AccommodationSection />
    <SectionDivider />
    <TravelAssistanceSection />
  </div>
);

export default Index;
