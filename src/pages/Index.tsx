import HeroSection from "@/components/wedding/HeroSection";
import EventsSection from "@/components/wedding/EventsSection";
import GallerySection from "@/components/wedding/GallerySection";
import StorySection from "@/components/wedding/StorySection";
import VenueSection from "@/components/wedding/VenueSection";
import HowToReachSection from "@/components/wedding/HowToReachSection";
import BookingSection from "@/components/wedding/BookingSection";
import SmartLocationSection from "@/components/wedding/SmartLocationSection";
import HostFamilySection from "@/components/wedding/HostFamilySection";
import AccommodationSection from "@/components/wedding/AccommodationSection";
import TravelAssistanceSection from "@/components/wedding/TravelAssistanceSection";
import SectionDivider from "@/components/wedding/SectionDivider";
import FloatingNav from "@/components/wedding/FloatingNav";

const Index = () => (
  <div className="mobile-wrapper scroll-smooth">
    <FloatingNav />
    <HeroSection />
    <EventsSection />
    <SectionDivider />
    <GallerySection />
    <SectionDivider />
    <StorySection />
    <SectionDivider />
    <VenueSection />
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
