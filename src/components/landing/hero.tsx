import { Button } from "@/components/ui/button";
import { ZenosLogo } from "@/components/logo";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-background py-20">
      <div className="absolute inset-0 z-0">
        <ZenosLogo className="absolute -top-1/4 -left-1/4 h-[150%] w-[150%] text-foreground/5 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
        <div className="absolute inset-0 animate-border-glow rounded-xl border border-primary/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-foreground animate-fade-in-down">
          A EXCELÊNCIA É SIMPLES.
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-balance animate-fade-in-up">
          Projetamos ecossistemas de alta performance para quem não aceita o ruído da complexidade. Profissionalize sua operação com o padrão de elite que seu negócio exige.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button size="lg" className="font-bold text-lg px-10 py-6">
            AGENDAR SESSÃO ESTRATÉGICA
          </Button>
          <p className="text-sm text-muted-foreground/80">Agilidade Simples. Excelência Duradoura.</p>
        </div>
      </div>
    </section>
  );
}
