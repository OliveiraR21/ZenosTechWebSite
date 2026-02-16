import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import imageData from "@/lib/placeholder-images.json";

const renanImage = imageData.placeholderImages.find(img => img.id === 'renan-oliveira-portrait');

export function NikoFactor() {
  return (
    <section className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">
            A Mente por Trás do Padrão Zenos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Unimos a experiência de quem já operou no topo do mercado com a tecnologia que não dorme.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 items-stretch max-w-7xl mx-auto">
          
          {/* Lado A (NIKO) - Left */}
          <div className="flex flex-col gap-6 rounded-lg p-8 sm:p-10 animate-border-glow border border-primary/30 bg-background/20">
            <h3 className="font-headline text-3xl sm:text-4xl uppercase tracking-wider text-foreground">
              A Inteligência que Simplifica.
            </h3>
            <div className="mt-auto">
              <p className="font-headline text-2xl uppercase text-primary">NIKO</p>
              <blockquote className="mt-2 text-lg text-muted-foreground italic text-balance border-l-2 border-primary pl-4">
                "O mundo dos negócios glorifica a complexidade. Eu glorifico o resultado. Meu papel na Zenos é garantir que nenhum processo desnecessário sobreviva. A inovação começa quando limpamos a visão."
              </blockquote>
            </div>
          </div>

          {/* Lado B (Renan Oliveira) - Right */}
          <div className="flex flex-col gap-6">
             <h3 className="font-headline text-3xl sm:text-4xl uppercase tracking-wider text-foreground">
                Visão Estratégica, Execução Ágil.
            </h3>
            <div className="flex flex-col sm:flex-row items-start text-left gap-6 md:gap-8">
              {renanImage && (
                <div 
                  className="relative w-48 h-56 sm:w-56 sm:h-64 shrink-0 shadow-lg"
                  style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)' }}
                >
                    <Image
                        src={renanImage.imageUrl}
                        alt={renanImage.description}
                        fill
                        className="object-cover filter grayscale contrast-125"
                        data-ai-hint={renanImage.imageHint}
                    />
                </div>
              )}
              <div className="flex-1">
                <p className="text-foreground/90 text-balance">
                  Liderada por Renan Oliveira, estrategista de processos com MBA em IA, Data Science e Big Data pela PUCRS. Com experiência acumulada na gestão de operações de alta performance e liderança de grandes equipes na Getnet e Br Supply, Renan fundou a Zenos para traduzir a eficiência das grandes máquinas de crescimento para a realidade das PMEs e Autônomos.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary bg-foreground text-background font-normal text-xs">BPM Specialist</Badge>
                    <Badge variant="outline" className="border-primary bg-foreground text-background font-normal text-xs">AI for Business</Badge>
                    <Badge variant="outline" className="border-primary bg-foreground text-background font-normal text-xs">Lean Six Sigma</Badge>
                </div>
                <Button variant="outline" size="sm" asChild className="mt-6 hover:border-primary hover:text-primary hover:bg-primary/10">
                  <Link href="https://www.linkedin.com/in/oliveira-renan/" target="_blank">
                    <Linkedin className="mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
