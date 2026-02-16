"use client";

import { Bot, ClipboardList, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: "advisory",
    icon: ClipboardList,
    title: "Visão Limpa: Zenos Advisory",
    description: "Diagnóstico estratégico para eliminar processos inúteis. Não automatizamos o caos; nós o organizamos primeiro.",
    // Placeholder para o vídeo. Substitua 'src' pelo caminho real do seu vídeo mp4
    videoSrc: "/videos/demo-advisory.mp4", 
    poster: "/placeholders/dashboard-print.jpg", // Uma imagem estática enquanto o vídeo carrega
    cta: "Ver Diagnóstico Exemplo"
  },
  {
    id: "response",
    icon: Bot,
    title: "Agilidade Ágil: Zenos Response",
    description: "Atendimento inteligente que não dorme. Uma IA treinada no seu tom de voz para fechar vendas enquanto você descansa.",
    videoSrc: "/video_whatsapp.mp4",
    poster: "/placeholders/whatsapp-print.jpg",
    cta: "Ver Automação Real"
  }
];

export function Pillars() {
  return (
    <section className="w-full bg-background py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">
              A Engenharia do Fluxo Perfeito.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Não entregamos apenas ferramentas; desenhamos a estrutura que sustenta sua escala.
            </p>
        </div>

        <div className="flex flex-col gap-24 relative">
          {/* Elemento decorativo de fundo formando um Z sutil (Opcional) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
             <div className="absolute top-1/4 left-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent -skew-x-12" />
          </div>

          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={solution.id} 
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                  !isEven && "md:flex-row-reverse" // Aqui cria o efeito Zig-Zag (Z)
                )}
              >
                {/* Coluna de Texto */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div className={cn(
                    "inline-flex p-3 rounded-xl bg-primary/10 mb-2",
                    !isEven && "md:ml-auto" // Alinha icone se necessário
                  )}>
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="font-headline text-3xl md:text-4xl uppercase tracking-wider text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                    {solution.description}
                  </p>
                  
                  <Button variant="outline" className="group border-primary/50 hover:bg-primary hover:text-primary-foreground">
                    <Play className="mr-2 h-4 w-4 fill-current group-hover:fill-primary-foreground" /> 
                    {solution.cta}
                  </Button>
                </div>

                {/* Coluna de Vídeo/Demo */}
                <div className="flex-1 w-full relative group">
                  {/* Moldura Neon Estilizada */}
                  <div className={cn(
                    "absolute -inset-1 bg-gradient-to-r from-primary to-primary/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200",
                    isEven ? "-rotate-1" : "rotate-1"
                  )}></div>
                  
                  <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-2xl aspect-video flex items-center justify-center">
                    {solution.id === 'response' ? (
                      <>
                        <video 
                          src={solution.videoSrc} 
                          autoPlay muted loop playsInline 
                          className="w-full h-full object-cover opacity-50 grayscale"
                        />
                        
                        {/* Overlay em Português */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 p-4 text-center">
                          <div className="bg-primary/90 text-primary-foreground font-bold px-3 py-1 rounded-full text-xs uppercase mb-2 animate-bounce">
                            Processamento em Tempo Real
                          </div>
                          <div className="bg-background/80 backdrop-blur-md border border-primary/30 p-3 rounded-lg shadow-2xl max-w-[80%]">
                            <p className="text-sm font-medium text-foreground">"Simulando resposta inteligente baseada no tom de voz do cliente..."</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="bg-zinc-900 w-full h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
                          <Play className="h-16 w-16 opacity-20" />
                          <span className="text-sm uppercase tracking-widest font-headline">Demonstração: {solution.id}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}