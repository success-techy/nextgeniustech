import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-24 left-24 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-32 w-28 h-28 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Icons Row */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6">
              <Code className="w-12 h-12 text-cyan-400 animate-pulse" />
              <Server className="w-12 h-12 text-cyan-400 animate-pulse delay-100" />
              <Shield className="w-12 h-12 text-cyan-400 animate-pulse delay-200" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Next Genius Tech
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed font-medium">
            Learn the latest technologies and future-proof your IT career with hands-on training
          </p>

          {/* Location */}
          <p className="text-lg text-blue-300 italic mb-10">
            Based in Electronic City Phase 2, Bangalore – India’s Silicon Valley
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-md"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-300 text-blue-100 hover:bg-blue-900/40 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

