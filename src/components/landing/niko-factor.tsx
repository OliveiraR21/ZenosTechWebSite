import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import imageData from "@/lib/placeholder-images.json";
import { AnimationWrapper } from "@/components/animation-wrapper";

const renanImage = imageData.placeholderImages.find(img => img.id === 'renan-oliveira-portrait');

export function NikoFactor() {
  return (
    <section id="especialista" className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        
        <AnimationWrapper>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">
              A Mente por Trás do Padrão Zenos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              A experiência de quem já operou no topo, agora dedicada a traduzir a eficiência das grandes corporações para a sua realidade.
            </p>
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper delay={200}>
          <div className="max-w-5xl mx-auto bg-background/30 p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 md:gap-12">
              
              {renanImage && (
                <div 
                  className="relative w-48 h-56 sm:w-56 sm:h-64 shrink-0 shadow-lg mx-auto md:mx-0"
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
                <p className="text-foreground/90 text-balance text-lg">
                  Liderada por <strong>Renan Oliveira</strong>, estrategista de processos com MBA em IA, Data Science e Big Data pela PUCRS. Com experiência acumulada na gestão de operações de alta performance e liderança de grandes equipes na Getnet e Br Supply, Renan fundou a Zenos para traduzir a eficiência das grandes máquinas de crescimento para a realidade das PMEs e Autônomos.
                </p>
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                    <Badge variant="outline" className="border-primary bg-primary/10 text-primary font-normal text-xs">BPM Specialist</Badge>
                    <Badge variant="outline" className="border-primary bg-primary/10 text-primary font-normal text-xs">AI for Business</Badge>
                    <Badge variant="outline" className="border-primary bg-primary/10 text-primary font-normal text-xs">Lean Six Sigma</Badge>
                </div>
                <Button variant="outline" size="sm" asChild className="mt-6 hover:border-primary hover:text-primary hover:bg-primary/10">
                  <Link href="https://www.linkedin.com/in/oliveira-renan/" target="_blank">
                    <Linkedin className="mr-2" />
                    Conheça no LinkedIn
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </AnimationWrapper>

      </div>
    </section>
  );
}
