import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FreeAuditCTA } from "@/components/FreeAuditCTA";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemCards } from "@/components/ProblemCards";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WorkExamples } from "@/components/WorkExamples";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemCards />
        <Services />
        <Process />
        <WorkExamples />
        <FreeAuditCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
