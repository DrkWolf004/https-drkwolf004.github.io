import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué es Acadelytics?",
    answer:
      "Acadelytics es una plataforma educativa que usa planificación docente y machine learning para analizar el desempeño académico en tiempo real.",
    value: "item-1",
  },
  {
    question: "¿Cómo se conecta con la planificación del curso?",
    answer:
      "El docente sube el plan de estudios y la plataforma traduce cada tema en ejercicios prácticos alineados.",
    value: "item-2",
  },
  {
    question: "¿Qué datos utiliza el modelo de análisis?",
    answer:
      "Analiza resultados de ejercicios, tendencias de error y avances históricos para identificar áreas débiles.",
    value: "item-3",
  },
  {
    question: "¿Funciona para grupos grandes?",
    answer:
      "Sí. Está diseñado para apoyar la educación superior con seguimiento individual en cursos de más de 20 alumnos.",
    value: "item-4",
  },
  {
    question: "¿Cuál es el beneficio para el estudiante?",
    answer:
      "Recibe práctica adaptada y retroalimentación temprana antes de los exámenes, lo que reduce brechas de aprendizaje.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas frecuentes
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
