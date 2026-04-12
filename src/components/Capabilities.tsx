import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart3, BookOpen, Search } from "lucide-react";
import cubeLeg from "../assets/capabilities-illustration.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Monitoreo individual",
    description:
      "Permite ver el avance de cada alumno en tiempo real, incluso en cursos masivos.",
    icon: <BarChart3 />,
  },
  {
    title: "Decisiones pedagógicas",
    description:
      "Ofrece información clara para ajustar la enseñanza y mejorar resultados.",
    icon: <BookOpen />,
  },
  {
    title: "Práctica personalizada",
    description:
      "Genera ejercicios específicos según las dificultades detectadas en cada estudiante.",
    icon: <Search />,
  },
];

export const Capabilities = () => {
  return (
    <section id="capabilities" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Qué ofrece
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Acadelytics transforma los datos de desempeño en acciones concretas para docentes y estudiantes.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Servicios Acadelytics"
        />
      </div>
    </section>
  );
};
