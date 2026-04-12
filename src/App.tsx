import { ProblemSection } from "./components/Problem";
import { Capabilities } from "./components/Capabilities";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { ScrollToTop } from "./components/ScrollToTop";
import { DesignedFor } from "./components/DesignedFor";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DesignedFor />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Capabilities />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
