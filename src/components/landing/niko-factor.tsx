import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ZenosLogo } from "@/components/logo";
import imageData from "@/lib/placeholder-images.json";

const renanImage = imageData.placeholderImages.find(img => img.id === 'renan-oliveira-portrait');

export function NikoFactor() {
  return (
    <section className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">A Voz do Especialista</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Lado A (NIKO) */}
          <Card className="flex flex-col items-center justify-center p-8 bg-background/50 border-primary/20 hover:border-primary/50 transition-colors duration-300">
            <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-card rounded-full"></div>
                <ZenosLogo className="relative w-full h-full p-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-headline text-2xl uppercase tracking-wider text-primary mb-2">NIKO</p>
              <blockquote className="text-xl text-foreground text-balance">
                "A inovação começa quando limpamos a visão. Vamos eliminar o que não traz lucro?"
              </blockquote>
            </div>
          </Card>

          {/* Lado B (Renan Oliveira) */}
          {renanImage && (
            <Card className="flex flex-col md:flex-row items-center gap-6 p-8 bg-background/50 border-border/50">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-card">
                  <Image
                      src={renanImage.imageUrl}
                      alt={renanImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={renanImage.imageHint}
                  />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-headline text-2xl uppercase tracking-wider text-foreground">Renan Oliveira</h3>
                <p className="text-sm font-semibold text-primary mb-2">Fundador & Estrategista Chefe</p>
                <p className="text-muted-foreground mb-4 text-balance">
                  Liderado por Renan, a Zenos une visão estratégica e execução técnica para criar soluções que simplificam a gestão.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.linkedin.com/in/oliveira-renan/" target="_blank">
                    <Linkedin className="mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
