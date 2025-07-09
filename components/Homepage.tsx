import { Activity, Heart, Microscope, Shield, Stethoscope, TestTube } from "lucide-react";
import CardComponent from "./Cards";
import Hero from "./sections/Hero";
import SimplePageHeading from "./simple-centered";
import PageHeading from "./centeredtwo";

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
    description: "Thyroid function, reproductive hormones, and endocrine testing",
    icon: <Activity className="w-6 h-6 text-green-600" />,
    firstsub: "Thyroid Panel (TSH, T3, T4)",
    secondsub: "Testosterone Levels",
    thirdsub: "Estrogen & Progesterone",
    fourthsub: "Cortisol Testing",
  },
   {
    title: "Pathology",
    description: "Tissue analysis, biopsy examination, and cellular diagnostics",
    icon:<Microscope className="w-6 h-6 text-purple-600" />,
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
    description: "COVID-19, hepatitis, HIV, and other infectious disease testing",
    icon: <Shield className="w-6 h-6 text-teal-600" />,
    firstsub: "COVID-19 RT-PCR",
    secondsub: "Hepatitis Panel",
    thirdsub: "HIV Testing",
    fourthsub: "Tuberculosis Screening",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <SimplePageHeading />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <PageHeading />
    </>
  );
}
