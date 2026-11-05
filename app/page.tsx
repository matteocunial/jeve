import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Problem, HowItWorks, Showcase, Features, Benefits, ForWhom } from "@/components/Sections";
import Faq from "@/components/Faq";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="contenuto">
        <Hero />
        <Problem />
        <HowItWorks />
        <Showcase />
        <Features />
        <Benefits />
        <ForWhom />
        <Faq />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
