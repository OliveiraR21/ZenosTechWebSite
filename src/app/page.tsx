import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Manifesto } from "@/components/landing/manifesto";
import { Pillars } from "@/components/landing/pillars";
import { NikoFactor } from "@/components/landing/niko-factor";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <section id="manifesto">
          <Manifesto />
        </section>
        <section id="diferenciais">
          <Pillars />
        </section>
        <section id="especialista">
          <NikoFactor />
        </section>
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}
