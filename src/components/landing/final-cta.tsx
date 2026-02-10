import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="cta-final" className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">
            O PRÓXIMO NÍVEL É UMA ESCOLHA SIMPLES.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Junte-se à elite que escolheu a clareza em vez do caos.
          </p>
          <div className="pt-4">
            <Button size="lg" className="font-bold text-lg px-10 py-6">
              AGENDAR SESSÃO ESTRATÉGICA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
