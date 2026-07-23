import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import GoalSolutions from "./components/GoalSolutions";
import Calculators from "./components/Calculators";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefilledInterest, setPrefilledInterest] = useState("");

  function openConsult(interest) {
    setPrefilledInterest(interest || "");
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen">
      <Navbar onConsult={() => openConsult()} />
      <main>
        <Hero onConsult={() => openConsult()} />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <GoalSolutions onConsult={openConsult} />
        <Calculators />
        <Testimonials />
        <FAQ />
        <CTA onConsult={() => openConsult()} />
        <Contact onConsult={() => openConsult()} />
      </main>
      <Footer />
      <ConsultationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledInterest={prefilledInterest}
      />
    </div>
  );
}
