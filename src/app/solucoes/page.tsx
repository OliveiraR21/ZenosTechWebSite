import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function SolucoesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="font-headline text-6xl md:text-8xl font-bold uppercase text-primary">Nossas Soluções</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Em breve, você encontrará aqui os detalhes sobre como a Zenos Tech pode transformar sua operação.
        </p>
      </main>
      <Footer />
    </div>
  );
}
