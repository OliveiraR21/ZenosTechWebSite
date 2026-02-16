import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ZenosLogo } from "@/components/logo";
import { WHATSAPP_LINKS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-black py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <ZenosLogo className="absolute -top-1/4 -left-1/4 h-[150%] w-[150%] text-primary" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase text-white animate-fade-in-down tracking-wider">
          Zenos: A Sofisticação da Simplicidade.
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 text-balance animate-fade-in-up">
          Simplificamos o complexo para que a excelência se torne sua rotina. Automação de atendimento e consultoria estratégica para PMEs de alta performance.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
           <Button size="lg" className="font-bold text-lg px-10 py-6" asChild>
              <Link href={WHATSAPP_LINKS.efficiencyDiagnosis} target="_blank">Agende um Diagnóstico de Eficiência</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
