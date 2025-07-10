import { ChevronRight, MailCheck, PhoneCall } from "lucide-react";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";

const footerSections = [
  {
    title: "Services",
    links: ["General Health Screening 1", "Diabetes Testing", "Kidney & Liver Function Tests 3", "Hormonal, Allergy & Special Tests"],
  },
  {
    title: "About",
    links: ["Trusted Agency", "Fast Reports", "Affordable Prices"],
  },
  {
    title: "Our Other Stores",
    links: ["Subhash Medical Store", "V.P.O Bhadas Distt. Kapurthala", "(+91) 98150-72698"],
  },
  
];

export default function Footer() {
  return (
    <section className="mt-10">
      <footer className="border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-2 space-y-4 lg:col-span-2">
              <Typography as="h4" variant="3xl/semibold" className="">
                Guru Nanak Lab
              </Typography>
              <Typography
                as="p"
                variant="sm/normal"
                className="text-muted-foreground"
              >
                Empowering health with accurate tests and trusted care.
              </Typography>

              <div className="flex space-x-4">
                <Link
                  href="tel:+917527993354"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >  <PhoneCall className="h-6 w-6"/> (+91)75279-93354
                </Link>
                <Link
                  href="mailto:akshaysaroop@gmail.com"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >   <MailCheck className="h-6 w-6" /> akshaysaroop@gmail.com
                </Link>

                
              </div>
            </div>
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <Typography as="h4" variant="md/medium" className="">
                  {section.title}
                </Typography>
                <ul className="space-y-4 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <div
                        href="#"
                        className="group flex items-center text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        <ChevronRight className="-ml-4 h-4 w-4 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" />
                        <span>{link}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center border-t border-gray-200 pt-2 dark:border-gray-700 md:flex-row">
            <p className="text-sm text-muted-foreground text-center">
              &copy; 2025 Guru Nanak Lab All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
