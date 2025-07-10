import {
  Activity,
  Clock,
  Heart,
  MapPin,
  Microscope,
  Phone,
  PhoneCall,
  Shield,
  Stethoscope,
  TestTube,
} from "lucide-react";
import CardComponent from "./Cards";
import Hero from "./sections/Hero";
import SimplePageHeading from "./simple-centered";
import PageHeading from "./centeredtwo";
import Contactcard from "./Contact";
import PriceTable from "./PriceTable";
import { Button } from "./ui/button";
import  Footer  from "./Footer";


const carddata = [
  {
    title: "Blood Test",
    description:
      "Complete blood count, lipid profile, diabetes screening, and more",
    icon: <TestTube className="text-red-500" />,
    firstsub: "CBC with Differential",
    secondsub: "Lipid Profile",
    thirdsub: "HbA1c & Glucose",
    fourthsub: "Liver Function Tests",
  },
  {
    title: "Cardiac Tests",
    description: "Heart health monitoring and cardiovascular risk assessment",
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    firstsub: "ECG/EKG",
    secondsub: "Cardiac Enzymes",
    thirdsub: "Cholesterol Screening",
    fourthsub: "Blood Pressure Monitoring",
  },
  {
    title: "Hormone Tests",
    description:
      "Thyroid function, reproductive hormones, and endocrine testing",
    icon: <Activity className="w-6 h-6 text-green-600" />,
    firstsub: "Thyroid Panel (TSH, T3, T4)",
    secondsub: "Testosterone Levels",
    thirdsub: "Estrogen & Progesterone",
    fourthsub: "Cortisol Testing",
  },
  {
    title: "Pathology",
    description:
      "Tissue analysis, biopsy examination, and cellular diagnostics",
    icon: <Microscope className="w-6 h-6 text-purple-600" />,
    firstsub: "Histopathology",
    secondsub: "Cytology",
    thirdsub: "Immunohistochemistry",
    fourthsub: "Molecular Diagnostics",
  },
  {
    title: "Health Packages",
    description: "Comprehensive health checkup packages for all age groups",
    icon: <Stethoscope className="w-6 h-6 text-orange-600" />,
    firstsub: "Basic Health Checkup",
    secondsub: "Executive Package",
    thirdsub: "Senior Citizen Package",
    fourthsub: "Women's Health Package",
  },
  {
    title: "Infectious Disease",
    description:
      "COVID-19, hepatitis, HIV, and other infectious disease testing",
    icon: <Shield className="w-6 h-6 text-teal-600" />,
    firstsub: "COVID-19 RT-PCR",
    secondsub: "Hepatitis Panel",
    thirdsub: "HIV Testing",
    fourthsub: "Tuberculosis Screening",
  },
];

const Contactdata = [
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: "Location",
    content: (
      <>
        Guru Nanak Laboratory
        <br />
        V.P.O Bhadas, Distt Kapurthala
        <br />
        Near Subhash Medical Store
      </>
    ),
  },
  {
    icon: <Phone className="w-6 h-6 text-green-600" />,
    title: "Phone & Email",
    content: (
      <>
        (+91) 75279-93354
        <br />
        akshaysaroop@gmail.com
      </>
    ),
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: "Hours",
    content: (
      <>
        Mon - Sat: 9:00 AM - 8:00 PM
        <br />
        Sun: 10:00 AM - 7:00 PM
      </>
    ),
  },
];

const pricevalues = [
  { test: "URIC ACID", price: "70/-" },
  { test: "RBS", price: "30/-" },
  { test: "FBS", price: "30/-" },
  { test: "LFT", price: "450/-" },
  { test: "LIPID PROFILE", price: "350/-" },
  { test: "KIDNEY FUNCTION", price: "400/-" },
  { test: "CHOLESTROL", price: "80/-" },
  { test: "TRIGLYCERIDE", price: "100/-" },
  { test: "BILIRUBIN", price: "100/-" },
  { test: "SGOT", price: "100/-" },
  { test: "SGPT", price: "100/-" },
  { test: "HB", price: "30/-" },

  { test: "ESR", price: "70/-" },
  { test: "BLOOD GROUP", price: "50/-" },
  { test: "UREA ", price: "80/-" },
  { test: "CREATININE", price: "100/-" },
  { test: "RA-FACTOR", price: "200/-" },
  { test: "CALCIUM", price: "100/-" },
  { test: "THYROID", price: "400/-" },
  { test: "CBC", price: "250/-" },
  { test: "AEC TEST(ALLERGY TEST)", price: "100/-" },

  { test: "URINE COMPLETE", price: "100/-" },
];
export default function HomePage() {
  return (
    <>
      <Hero />
      <SimplePageHeading />
      <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {carddata.map((c, index) => (
          <CardComponent 
            key={index}
            title={c.title}
            description={c.description}
            icon={c.icon}
            firstsub={c.firstsub}
            secondsub={c.secondsub}
            thirdsub={c.thirdsub}
            fourthsub={c.fourthsub}
          />
        ))}
      </section>
      <div id="testslab">
  <PageHeading />
      </div>
    

 <PriceTable  data={pricevalues} />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {Contactdata.map((cx, index) => (
          <Contactcard
            key={index}
            icon={cx.icon}
            title={cx.title}
            content={cx.content}
          />
        ))}
      </section>
<div className="flex items-center justify-center mt-10 ">
  <a href="tel:+917527993354">
  <Button  className="text-white bg-black  border border-white">
 <PhoneCall/>   Book appointment
  </Button>
  </a>
</div> 
<div id="footer">

<Footer />
</div>

</>
  );
}
