import { Check } from "lucide-react";
import pilot from "../assets/problem-illustration.png";

const problemPoints = [
  "Falta de seguimiento individual para cursos masivos.",
  "Evaluaciones puntuales no reflejan el progreso real.",
  "Docentes no pueden intervenir hasta detectar problemas graves.",
];

const problemStats = [
  {
    value: "+70%",
    label: "de los cursos no detectan brechas a tiempo",
  },
  {
    value: "3x",
    label: "más intervenciones eficaces con datos continuos",
  },
];

export const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="container py-24 sm:py-32"
    >
      <div className="rounded-[2rem] border border-muted/50 bg-muted/50 p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.18),_transparent_45%)]" />
            <div className="relative mx-auto h-full w-full max-w-[420px]">
              <img
                src={pilot}
                alt="Plataforma Acadelytics"
                className="relative h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-primary">Desafío clave</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-white">Problema</span>{" "}
                <span className="text-primary">en educación superior</span>
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                En cursos grandes, la mayoría de las brechas de aprendizaje solo se detecta en exámenes finales. Acadelytics transforma esa planificación en ejercicios continuos, para que el docente actúe antes de que el rendimiento caiga.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/10 bg-background/80 p-6">
              {problemPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-base text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {problemStats.map(({ value, label }) => (
                <div
                  key={value}
                  className="rounded-3xl border border-white/10 bg-muted/70 p-5"
                >
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
