
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const LocationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Our Campus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Bangalore's IT hub
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Location Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Electronic City Phase 2<br />
                    Bangalore, Karnataka<br />
                    India - 560100
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Training Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                  <p className="text-gray-700">
                    Phone: +91 8197066500<br />
                    WhatsApp: +91 8197066500
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-700">
                    admin@nextgeniustech.com<br />
                    admissions@nextgeniustech.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
              <CardTitle className="text-2xl">Why Electronic City?</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🏢 IT Hub Location</h4>
                  <p className="text-gray-700">
                    Located in Bangalore's premier IT corridor, surrounded by major tech companies like Infosys, Wipro, and TCS.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🚇 Excellent Connectivity</h4>
                  <p className="text-gray-700">
                    Well connected by metro, buses, and major highways. Easy access from all parts of Bangalore.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">💼 Industry Proximity</h4>
                  <p className="text-gray-700">
                    Direct access to job opportunities with numerous MNCs and startups in the vicinity.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🎯 Placement Advantage</h4>
                  <p className="text-gray-700">
                    Strong industry connections and partnerships for better placement opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
