export function Manifesto() {
  return (
    <section className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <blockquote className="max-w-4xl mx-auto">
          <p className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-primary">
            "Se não for simples, intuitivo e duradouro, não é Zenos."
          </p>
          <footer className="mt-6 text-lg text-muted-foreground text-balance">
            Eliminamos o ruído para que você foque no que realmente importa: o crescimento.
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
