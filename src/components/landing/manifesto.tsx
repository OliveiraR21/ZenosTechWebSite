import { AnimationWrapper } from "@/components/animation-wrapper";

export function Manifesto() {
  return (
    <section className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-primary">
              O mundo dos negócios glorifica a complexidade. Nós glorificamos o resultado.
            </h2>
          </AnimationWrapper>
          <AnimationWrapper delay={200}>
            <div className="mt-6 text-lg text-muted-foreground text-balance space-y-4">
              <p>
                Acreditamos que a verdadeira inovação não é adicionar mais etapas, é remover barreiras. Para quem busca crescer com agilidade, a visão precisa estar limpa. Sem excessos, sem ruído, sem funcionalidades inúteis.
              </p>
              <p>
                A Zenos é o filtro que separa o movimento desnecessário da ação estratégica. Nossa tecnologia é desenhada para ser invisível na operação e impactante nos lucros.
              </p>
              <p className="font-bold">
                Se não for simples, não é inteligente. Se não for intuitivo, não é ágil. Se não for duradouro, não é Zenos.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
