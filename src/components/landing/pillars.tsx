import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ClipboardList } from "lucide-react";

const solutions = [
  {
    icon: ClipboardList,
    title: "Visão Limpa: Zenos Advisory",
    description: "Diagnóstico estratégico para eliminar processos inúteis antes de automatizá-los.",
  },
  {
    icon: Bot,
    title: "Agilidade Ágil: Zenos Response",
    description: "Atendimento inteligente que opera de forma invisível e impactante nos seus lucros.",
  }
];

export function Pillars() {
  return (
    <section className="w-full bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">A Engenharia do Fluxo Perfeito.</h2>
            <p className="mt-2 text-lg text-muted-foreground text-balance">Não entregamos apenas ferramentas; desenhamos a estrutura que sustenta sua escala.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card border-border/50 text-center hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl uppercase tracking-wider">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-balance">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
