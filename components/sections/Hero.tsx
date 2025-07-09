import { Calendar, Calendar1, Check } from "lucide-react";
import labpicture from "../../public/img/1.jpg"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Navbar from "./navbar/default";

export default function HeroSectionPage() {
 
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-accent/80">
      <Navbar/>

      <div className="absolute inset-0 z-20 grid grid-cols-2">
        <div className="container col-span-2 mx-auto pt-32 lg:col-span-1 lg:max-w-xl">
          <div className="space-y-6 px-4 py-16">
            <Typography
              as="h3"
              variant="5xl/medium"
              className="tracking-tight text-foreground"
            >
             Accurate Medical Testing For Your Health
            </Typography>
            <Typography
              as="h1"
              variant="xl/normal"
              className="text-foreground/80"
            >
              Effortlessly compare diagnostic test packages from certified labs, and get peace of mind with accurate reports, timely delivery, and patient-first care.
            </Typography>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg"> <Calendar1/> Book a Test</Button>
              <Button size="lg" variant={"outline"}>
                <span className="relative mr-1 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
               View Tests
              </Button>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Reliable Test Accuracy",
                "Expert Lab Technicians",
                "Seamless Digital Reports",
                "24/7 Customer Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Badge className="rounded-md p-1">
                    <Check className="h-4 w-4 text-white" />
                  </Badge>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative hidden bg-black lg:block">
          <div
            className="relative min-h-screen bg-opacity-50 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: `url(${labpicture.src})`,
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}