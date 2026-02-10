import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ClipboardList, Bot, LayoutGrid, BookOpenCheck, Database, Landmark } from 'lucide-react';
import { WHATSAPP_LINKS } from "@/lib/constants";

const sustainingSolutions = [
  {
    icon: LayoutGrid,
    title: "Software de Gestão de Projetos",
    focus: "Centralização",
    description: "Tire as tarefas do WhatsApp e coloque em um painel visual organizado. Prazos claros, responsabilidades definidas."
  },
  {
    icon: BookOpenCheck,
    title: "Plataforma de Treinamento",
    focus: "Padronização",
    description: "Garanta que sua equipe (ou novos sócios) tenham acesso ao conhecimento técnico da empresa de forma estruturada."
  },
  {
    icon: Database,
    title: "Consultoria SAP",
    focus: "Governança Corporativa",
    description: "Para momentos de alta complexidade, oferecemos suporte ao sistema de gestão mais robusto do mundo."
  },
  {
    icon: Landmark,
    title: "Consultoria Fiscal e Tributária",
    focus: "Segurança",
    description: "Transforme a complexidade fiscal brasileira em inteligência tributária e proteção de caixa."
  }
];


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
                      <Button size="lg" className="w-full font-bold" asChild>
                          <Link href={WHATSAPP_LINKS.advisory} target="_blank">INICIAR DIAGNÓSTICO</Link>
                      </Button>
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
                        <Button size="lg" className="w-full font-bold" asChild>
                            <Link href={WHATSAPP_LINKS.response} target="_blank">AUTOMATIZAR MEU ATENDIMENTO</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </div>
        </section>
        
        {/* 3. O ECOSSISTEMA EXPANDIDO */}
        <section className="w-full bg-card py-20 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">INFRAESTRUTURA PARA ESCALAR</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Ferramentas e conhecimentos que sustentam sua evolução.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sustainingSolutions.map((solution, index) => (
                        <Card key={index} className="flex flex-col bg-background/50 border-border/50 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                            <CardHeader className="items-center">
                                <div className="p-3 bg-primary/10 rounded-full mb-3">
                                    <solution.icon className="h-7 w-7 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-xl uppercase tracking-wider">{solution.title}</CardTitle>
                                <CardDescription className="font-bold text-primary pt-1">Foco: {solution.focus}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm text-balance">{solution.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. POR QUE ZENOS? */}
        <section className="w-full bg-background py-20 sm:py-24">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">SIMPLICIDADE QUE GERA RESULTADO.</h2>
                    <div className="mt-6 text-lg text-muted-foreground text-balance space-y-4">
                        <p>
                            "Muitas consultorias entregam relatórios que ninguém lê. Muitas automações são complexas e travam.
                        </p>
                        <p>
                            A Zenos faz o oposto. Nossa consultoria é prática e nossas automações são invisíveis. O objetivo é um só: limpar sua visão para que a decisão seja fácil."
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* 5. RODAPÉ DE CONVERSÃO */}
        <section className="w-full bg-card py-20 sm:py-24">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">
                        O PRIMEIRO PASSO PARA A ALTA PERFORMANCE.
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground text-balance">
                        Não importa o tamanho da sua operação hoje, importa o padrão que você quer ter amanhã.
                    </p>
                    <div className="pt-4">
                        <Button size="lg" className="font-bold text-lg px-10 py-6" asChild>
                          <Link href={WHATSAPP_LINKS.strategist} target="_blank">
                            FALAR COM UM ESTRATEGISTA
                          </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
