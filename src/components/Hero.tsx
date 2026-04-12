import { buttonVariants } from "./ui/button";
import { BenefitCards } from "./BenefitCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            Acadelytics
          </span>
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold">
          Plataforma de orientación educativa y análisis de resultados académicos en tiempo real
        </h2>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Conecta la planificación docente con ejercicios interactivos, evaluación continua y recomendaciones personalizadas para cada estudiante.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="rounded-3xl border border-muted/50 p-5 text-left">
            <span className="text-3xl font-bold">Educación</span>
            <p className="text-sm text-muted-foreground mt-2">Mejora la experiencia de estudiantes y docentes.</p>
          </div>
          <div className="rounded-3xl border border-muted/50 p-5 text-left">
            <span className="text-3xl font-bold">Aprendizaje</span>
            <p className="text-sm text-muted-foreground mt-2">Personalizado con Machine Learning.</p>
          </div>
          <div className="rounded-3xl border border-muted/50 p-5 text-left">
            <span className="text-3xl font-bold">Impacto</span>
            <p className="text-sm text-muted-foreground mt-2">Análisis en tiempo real para decisiones tempranas.</p>
          </div>
        </div>
      </div>

      <div className="z-10">
        <BenefitCards />
      </div>
    </section>
  );
};
