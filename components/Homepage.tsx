import { Heart, TestTube } from "lucide-react";
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
