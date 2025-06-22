
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Next Genius Tech
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering careers through cutting-edge IT training in the heart of Bangalore's tech ecosystem.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Popular Courses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AWS Cloud Computing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">DevOps Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Full Stack Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cyber Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Placements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career Guidance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 8197066500</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">admin@nextgeniustech.com</span>
              </div>
              <p className="text-gray-300 text-sm">
                Electronic City Phase 2<br />
                Bangalore, Karnataka 560100
              </p>
              <p className="text-gray-300 text-sm">
                Website: www.nextgeniustech.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Next Genius Tech. All rights reserved. | 
            <span className="text-blue-400"> Bangalore's Premier IT Training Hub</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
