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
    <section className="w-full bg-background py-20 sm:py-24 overflow-hidden">
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

                  {/* Coluna do Vídeo com Overlay de Chat */}
                  <div className="flex-1 w-full relative">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video shadow-[0_0_50px_-12px_rgba(204,255,0,0.3)]">
                      
                      {/* O VÍDEO (Agora como fundo abstrato) */}
                      <video 
                        src={solution.videoSrc}
                        className="w-full h-full object-cover opacity-40 blur-[2px] grayscale-[0.5]"
                        autoPlay muted loop playsInline
                      />

                      {/* INTERFACE DE CHAT EM PORTUGUÊS (Sobreposta) */}
                      {solution.id === 'response' && (
                        <div className="absolute inset-0 p-6 flex flex-col justify-center gap-4">
                          {/* Mensagem do Cliente */}
                          <div className="bg-zinc-800/90 backdrop-blur-md p-3 rounded-2xl rounded-bl-none max-w-[80%] border border-white/5 animate-fade-in-up">
                            <p className="text-xs text-zinc-400 mb-1">Cliente</p>
                            <p className="text-sm text-white">Olá! Gostaria de saber os valores da consultoria.</p>
                          </div>

                          {/* Resposta da IA Zenos */}
                          <div className="bg-primary/20 backdrop-blur-md p-3 rounded-2xl rounded-br-none max-w-[80%] self-end border border-primary/30 animate-fade-in-up [animation-delay:1s]">
                            <div className="text-[10px] font-bold text-primary uppercase mb-1 flex items-center gap-1">
                              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                              NIKO AI • Zenos
                            </div>
                            <p className="text-sm text-white">Com certeza! Para PMEs, temos o plano Advisory que foca em escala. Posso agendar seu diagnóstico hoje?</p>
                          </div>

                          {/* Badge de Status */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 border border-primary/40 px-3 py-1 rounded-full flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                             <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Automação Ativa</span>
                          </div>
                        </div>
                      )}

                      {/* Overlay para Advisory (Exemplo de Dashboard) */}
                      {solution.id === 'advisory' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                           <div className="bg-background/90 border border-white/10 p-4 rounded-xl shadow-2xl scale-90 md:scale-100">
                              <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-2">
                                 <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">Z</div>
                                 <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Relatório de Eficiência</div>
                              </div>
                              <div className="space-y-2">
                                 <div className="h-2 w-32 bg-zinc-700 rounded animate-pulse" />
                                 <div className="h-2 w-48 bg-primary/40 rounded animate-pulse" />
                                 <div className="flex gap-2 pt-2">
                                    <div className="h-8 w-16 bg-zinc-800 rounded border border-white/5" />
                                    <div className="h-8 w-16 bg-zinc-800 rounded border border-white/5" />
                                 </div>
                              </div>
                           </div>
                        </div>
                      )}
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
