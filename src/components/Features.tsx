import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/feature-growth.png";
import image3 from "../assets/feature-reflecting.png";
import image4 from "../assets/feature-looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Monitoreo en tiempo real",
    description:
      "Visualiza el desempeño individual y colectivo durante todo el semestre.",
    image: image4,
  },
  {
    title: "Aprendizaje adaptativo",
    description:
      "La plataforma ajusta la práctica para cada estudiante según sus resultados.",
    image: image3,
  },
  {
    title: "Información para docentes",
    description:
      "Genera reportes claros para tomar decisiones pedagógicas basadas en datos.",
    image: image,
  },
];

const featureList: string[] = [
  "Evaluación continua",
  "Retroalimentación temprana",
  "Alineación curricular",
  "Modelos predictivos",
  "Soporte docente",
  "Práctica personalizada",
  "Grupos grandes",
  "Visualización de progreso",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Características clave
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
