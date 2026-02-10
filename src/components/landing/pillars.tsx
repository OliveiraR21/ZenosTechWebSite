import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Infinity, Eye } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Agilidade Simples",
    description: "Soluções desenhadas para serem implementadas sem fricção. Inovação que não gera dúvida."
  },
  {
    icon: Infinity,
    title: "Inovação Duradoura",
    description: "Tecnologia que acompanha o crescimento do seu negócio, da fase autônoma à escala de PME."
  },
  {
    icon: Eye,
    title: "Visão Limpa",
    description: "Interfaces e processos intuitivos. Seus dados organizados para decisões precisas."
  }
];

export function Pillars() {
  return (
    <section className="w-full bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">Os Três Pilares</h2>
            <p className="mt-2 text-lg text-muted-foreground">A base do Padrão Zenos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-card border-border/50 text-center hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl uppercase tracking-wider">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
