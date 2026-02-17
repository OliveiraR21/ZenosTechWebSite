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

                  {/* Coluna do Vídeo com Mock UI */}
                  <div className="flex-1 w-full relative">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-video shadow-[0_0_50px_-12px_rgba(204,255,0,0.2)]">
                      
                      {/* Fundo Decorativo Tecnológico (Substitui o vídeo original) */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#CCFF0033_0%,transparent_50%)]" />
                        <div className="grid grid-cols-10 h-full w-full opacity-10">
                          {[...Array(100)].map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/10 w-full h-full" />
                          ))}
                        </div>
                      </div>

                      {/* INTERFACE DE CHAT SIMULADA */}
                      {solution.id === 'response' && (
                        <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4 overflow-hidden">
                          
                          {/* Mensagem do Cliente */}
                          <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-left-4 duration-700">
                             <span className="text-[10px] text-zinc-500 ml-2 uppercase tracking-widest">Cliente</span>
                             <div className="bg-zinc-800/80 backdrop-blur-md p-3 rounded-2xl rounded-bl-none max-w-[85%] border border-white/5">
                               <p className="text-sm text-zinc-100">Como funciona a automação para minha clínica?</p>
                             </div>
                          </div>

                          {/* Indicador de Digitando (Gatilho de Agilidade) */}
                          <div className="flex items-center gap-2 text-primary animate-pulse ml-2 mb-2">
                             <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-tighter">NIKO está analisando...</span>
                          </div>

                          {/* Resposta da IA Zenos */}
                          <div className="flex flex-col items-end gap-1 animate-in fade-in slide-in-from-right-4 duration-700 delay-1000 fill-mode-both">
                             <span className="text-[10px] text-primary mr-2 uppercase tracking-widest font-bold">Zenos Response</span>
                             <div className="bg-primary/10 backdrop-blur-xl p-4 rounded-2xl rounded-br-none max-w-[90%] border border-primary/30 shadow-[0_0_20px_rgba(204,255,0,0.1)]">
                               <p className="text-sm text-white leading-relaxed">
                                 Integramos seu WhatsApp ao CRM. A IA qualifica o paciente e agenda a consulta em menos de 1 minuto. Quer ver um exemplo de fluxo?
                               </p>
                             </div>
                          </div>

                          {/* Interface Inferior do Celular (Fake) */}
                          <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-40">
                             <div className="h-2 w-32 bg-zinc-800 rounded-full" />
                             <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                                <div className="w-3 h-3 bg-primary rounded-sm" />
                             </div>
                          </div>

                        </div>
                      )}

                      {/* Seção Advisory (Simulação de Dashboard) */}
                      {solution.id === 'advisory' && (
                        <div className="absolute inset-0 p-6 flex flex-col gap-4">
                           <div className="h-6 w-48 bg-zinc-800/50 rounded animate-pulse" />
                           <div className="grid grid-cols-3 gap-4">
                              {[1,2,3].map(i => (
                                <div key={i} className="h-20 bg-primary/5 border border-primary/20 rounded-xl p-3 flex flex-col justify-between">
                                   <div className="h-2 w-10 bg-zinc-700 rounded" />
                                   <div className="h-4 w-16 bg-primary/40 rounded animate-pulse" />
                                </div>
                              ))}
                           </div>
                           <div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-cutting-line" />
                              <div className="space-y-3">
                                 <div className="h-2 w-full bg-zinc-800 rounded" />
                                 <div className="h-2 w-[80%] bg-zinc-800 rounded" />
                                 <div className="h-2 w-[60%] bg-zinc-700 rounded" />
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
