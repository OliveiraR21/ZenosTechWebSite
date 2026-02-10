import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Bot } from 'lucide-react';

export default function SolucoesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 pt-16 pb-12 text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase text-primary animate-fade-in-down">
            O CONTROLE TOTAL DA SUA OPERAÇÃO.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-balance animate-fade-in-up">
            Unimos a inteligência estratégica da consultoria com a velocidade da automação. Tecnologia e processos desenhados para quem busca ordem e crescimento.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Bloco A: ZENOS ADVISORY */}
            <Card className="flex flex-col h-full bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                        <ClipboardList className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-headline text-4xl uppercase text-primary">ZENOS ADVISORY</p>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground pt-2 text-balance">"Antes de acelerar, ajuste a rota."</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col space-y-6 text-center">
                    <div>
                        <p className="font-semibold text-muted-foreground tracking-wider uppercase text-sm">A Dor</p>
                        <p className="text-foreground/90 mt-1 text-balance">O esforço operacional sem direção clara gera cansaço, não lucro.</p>
                    </div>
                     <div>
                        <p className="font-semibold text-muted-foreground tracking-wider uppercase text-sm">A Solução Zenos</p>
                        <p className="text-foreground/90 mt-1 text-balance">Realizamos um diagnóstico profundo do seu negócio. Mapeamos gargalos, redesenhamos processos ineficientes e definimos indicadores reais de sucesso.</p>
                    </div>
                     <div>
                        <p className="font-semibold text-muted-foreground tracking-wider uppercase text-sm">O Ganho</p>
                        <p className="font-bold text-primary mt-1 text-balance">Transforme a intuição em gestão profissional.</p>
                    </div>
                    <div className="pt-4 mt-auto">
                        <Button size="lg" className="w-full font-bold">INICIAR DIAGNÓSTICO</Button>
                    </div>
                </CardContent>
            </Card>
            
            {/* Bloco B: ZENOS RESPONSE */}
            <Card className="flex flex-col h-full bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                 <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                        <Bot className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-headline text-4xl uppercase text-primary">ZENOS RESPONSE</p>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground pt-2 text-balance">"Atendimento imediato. Venda constante."</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col space-y-6 text-center">
                   <div>
                        <p className="font-semibold text-muted-foreground tracking-wider uppercase text-sm">A Dor</p>
                        <p className="text-foreground/90 mt-1 text-balance">Clientes esperando horas por uma resposta simples ou leads esfriando no WhatsApp.</p>
                    </div>
                     <div>
                        <p className="font-semibold text-muted-foreground tracking-wider uppercase text-sm">A Solução Zenos</p>
                        <p className="text-foreground/90 mt-1 text-balance">Implementamos robôs de atendimento humanizados que triam, respondem e agendam para você, 24 horas por dia.</p>
                    </div>
                     <div>
                        <p className="font-semibold text-muted-foreground tracking-wider uppercase text-sm">O Ganho</p>
                        <p className="font-bold text-primary mt-1 text-balance">Sua empresa nunca para de atender, mesmo quando você descansa.</p>
                    </div>
                    <div className="pt-4 mt-auto">
                        <Button size="lg" className="w-full font-bold">AUTOMATIZAR MEU ATENDIMENTO</Button>
                    </div>
                </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
