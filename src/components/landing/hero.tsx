import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-background py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-px w-[400%] animate-cutting-line origin-center bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase text-foreground animate-fade-in-down tracking-wider">
          Zenos: A Sofisticação da Simplicidade.
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-balance animate-fade-in-up">
          Eliminamos o ruído operacional para que você foque no crescimento. Consultoria estratégica e automação inteligente para negócios de alta performance.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
           <Button size="lg" className="font-bold text-lg px-10 py-6 animate-border-glow" asChild>
              <Link href={WHATSAPP_LINKS.efficiencyDiagnosis} target="_blank">Agende um Diagnóstico de Eficiência</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
