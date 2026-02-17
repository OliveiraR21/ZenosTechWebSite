"use client";

import { Bot, ClipboardList, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimationWrapper } from "../animation-wrapper";

const solutions = [
  {
    id: "advisory",
    icon: ClipboardList,
    title: "Visão Limpa: Zenos Advisory",
    description: "Diagnóstico estratégico para eliminar processos inúteis. Não automatizamos o caos; nós o organizamos primeiro.",
    videoSrc: "/video_hero.mp4", // Usando o vídeo da hero como textura técnica
    cta: "Agendar Diagnóstico"
  },
  {
    id: "response",
    icon: Bot,
    title: "Agilidade Ágil: Zenos Response",
    description: "Atendimento inteligente que não dorme. Uma IA treinada no seu tom de voz para fechar vendas enquanto você descansa.",
    videoSrc: "/video_whatsapp.mp4", 
    cta: "Ver Automação Real"
  }
];

export function Pillars() {
  return (
    <section id="diferenciais" className="w-full bg-background py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">
                A Engenharia do Fluxo Perfeito.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-balance">
                Não entregamos apenas ferramentas; desenhamos a estrutura que sustenta sua escala.
              </p>
          </div>
        </AnimationWrapper>

        <div className="flex flex-col gap-32 relative">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimationWrapper key={solution.id} delay={index * 150}>
                <div className={cn(
                    "flex flex-col md:flex-row items-center gap-12 md:gap-20",
                    !isEven && "md:flex-row-reverse"
                )}>
                  {/* Coluna de Texto */}
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className={cn("inline-flex p-3 rounded-xl bg-primary/10 mb-2", !isEven && "md:ml-0")}>
                      <solution.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-4xl md:text-5xl uppercase tracking-wider text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    <Button variant="outline" className="group border-primary/50 hover:bg-primary hover:text-black font-bold">
                      <Play className="mr-2 h-4 w-4 fill-current" /> 
                      {solution.cta}
                    </Button>
                  </div>

                  {/* Coluna do Vídeo */}
                  <div className="flex-1 w-full relative">
                    <div className="relative rounded-2xl overflow-hidden border border-border aspect-video shadow-lg">
                        <video
                            src={solution.videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
