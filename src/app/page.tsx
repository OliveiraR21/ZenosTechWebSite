import { Hero } from "@/components/landing/hero";
import { Manifesto } from "@/components/landing/manifesto";
import { Pillars } from "@/components/landing/pillars";
import { NikoFactor } from "@/components/landing/niko-factor";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <Hero />
      <Manifesto />
      <Pillars />
      <NikoFactor />
      <Footer />
    </main>
  );
}
