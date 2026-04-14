import { Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import gallery2 from "@/assets/gallery-2.jpg";

const StorySection = () => {
  const handlePlay = () => {
    // Replace with actual video URL
    window.open("https://www.youtube.com/", "_blank");
  };

  return (
    <section className="px-5 py-10">
      <AnimatedSection>
        <p className="ornament text-lg mb-2">✦</p>
        <h2 className="section-title text-center mb-2">A Glimpse of Our Journey</h2>
        <p className="text-center text-xs text-muted-foreground mb-6">
          Watch our story unfold
        </p>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <button
          onClick={handlePlay}
          className="group relative w-full overflow-hidden rounded-3xl shadow-lg"
          style={{ aspectRatio: "16/10" }}
        >
          <img
            src={gallery2}
            alt="Our story video"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="h-7 w-7 text-white ml-1" fill="white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <p className="text-white/80 text-xs font-sans">Our Pre-Wedding Film</p>
            <p className="text-white font-serif text-sm font-medium">A love story worth telling</p>
          </div>
        </button>
      </AnimatedSection>
    </section>
  );
};

export default StorySection;
