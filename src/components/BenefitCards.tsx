import { BarChart3, BookOpen, Check, RefreshCcw, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefitList = [
  {
    title: "Orientación adaptativa",
    description:
      "Acadelytics genera ejercicios alineados a la planificación de la asignatura, con foco en los temas más relevantes.",
    details: ["Seguimiento automático"],
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "Análisis en tiempo real",
    description:
      "Identifica dificultades antes de los exámenes para ofrecer apoyo puntual a cada estudiante.",
    details: [],
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Evaluación continua",
    description:
      "Los ejercicios se generan de manera constante y permiten medir el avance real del alumno.",
    details: ["Retroalimentación temprana", "Ajuste dinámico de contenidos"],
    icon: <RefreshCcw className="h-6 w-6 text-primary" />,
  },
  {
    title: "Diagnóstico temprano",
    description:
      "Los docentes obtienen información clara sobre el progreso del curso y las áreas que requieren refuerzo.",
    details: [],
    icon: <Search className="h-6 w-6 text-primary" />,
  },
];

export const BenefitCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[700px]">
      {benefitList.map(({ title, description, details, icon }) => (
        <Card key={title} className="bg-background/90 shadow-xl shadow-black/20">
          <CardHeader className="flex items-center gap-4 pb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              {icon}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{description}</p>
            {details.length > 0 && (
              <div className="space-y-2">
                {details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
