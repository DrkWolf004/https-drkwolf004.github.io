import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center text-center md:text-left">
        <div>
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex flex-col items-center md:flex-row md:items-center"
          >
            <LogoIcon />
            <span className="mt-2 md:mt-0 md:ml-2">Acadelytics</span>
          </a>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto md:mx-0">
            Plataforma de análisis académico para la educación superior.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="font-bold text-lg">Contacto</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:gabriel.guzman2201@alumnos.ubiobio.cl"
              className="opacity-60 hover:opacity-100"
            >
              gabriel.guzman2201@alumnos.ubiobio.cl
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="font-bold text-lg">Secciones</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#problem"
              className="opacity-60 hover:opacity-100"
            >
              Problema
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              Solución
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

      </section>

      <section className="container pb-14 text-center">
        <h3 className="text-center">
          &copy; 2026 Acadelytics — Proyecto de titulación
        </h3>
      </section>
    </footer>
  );
};
