import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  Problem,
  HowItWorks,
  Showcase,
  Features,
  ReactiveProactive,
  Benefits,
  ForWhom,
  CaseChips,
} from "@/components/Sections";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="contenuto">
        <Hero />
        <CaseChips />
        <Problem />
        <HowItWorks />
        <Showcase />
        <Features />
        <ReactiveProactive />
        <Benefits />
        <ForWhom />
        <Faq />
        <CtaBand />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
