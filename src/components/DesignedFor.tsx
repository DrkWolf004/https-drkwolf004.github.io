import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Educación superior",
  },
  {
    icon: <Radar size={34} />,
    name: "Docentes",
  },
  {
    icon: <Radar size={34} />,
    name: "Estudiantes",
  },
  {
    icon: <Radar size={34} />,
    name: "Análisis académico",
  },
  {
    icon: <Radar size={34} />,
    name: "Planeación curricular",
  },
  {
    icon: <Radar size={34} />,
    name: "Aprendizaje adaptativo",
  },
];

export const DesignedFor = () => {
  return (
    <section
      id="designed-for"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Diseñado para
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-2 text-muted-foreground/80"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
