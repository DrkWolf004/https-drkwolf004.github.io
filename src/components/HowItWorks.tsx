import { BookOpen, Cpu, ListChecks, RefreshCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Plan de estudios",
    description:
      "El docente sube el programa de la carrera con temas, objetivos y fechas para que la plataforma los use como base.",
  },
  {
    icon: <ListChecks className="h-8 w-8 text-primary" />,
    title: "Ejercicios alineados",
    description:
      "La plataforma genera prácticas continuas que reflejan directamente los contenidos del curso.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Análisis con Machine Learning",
    description:
      "El sistema identifica patrones de dificultad y muestra qué temas requieren refuerzo.",
  },
  {
    icon: <RefreshCcw className="h-8 w-8 text-primary" />,
    title: "Adaptación automática",
    description:
      "Acadelytics ajusta la práctica futura para cada estudiante según su desempeño real.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Cómo funciona
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Convierte la planificación docente en una experiencia práctica continua para estudiantes, con análisis temprano y apoyo personalizado.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
