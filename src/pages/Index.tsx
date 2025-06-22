
import { Hero } from "@/components/Hero";
import { CoursesSection } from "@/components/CoursesSection";
import { CourseContent } from "@/components/CourseContent";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CoursesSection />
      <CourseContent />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
