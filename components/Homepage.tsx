import { Phone, CheckCircle } from "lucide-react";
import { Hero1 } from "./hero1";
import Navbar04Page from "./navbar-04/navbar-04";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

export default function HomePage() {
  return (

      <><Navbar04Page />
      <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Trusted Healthcare Partner
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Accurate Medical Testing for Your Health
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                State-of-the-art laboratory services with fast, reliable results. Your health is our priority with over
                15 years of trusted service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Test
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">NABL Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Same Day Results</span>
                </div>
              </div>
            </div>
            <div className="relative">
             {/* <Image */}
            //     src="/placeholder.svg?height=500&width=600"
            //     alt="Medical laboratory equipment"
            //     width={600}
            //     height={500}
            //     className="rounded-lg shadow-xl"
               {/* /> */}
            </div>
          </div>
        </div>
      </section>
      </>

);
  
}