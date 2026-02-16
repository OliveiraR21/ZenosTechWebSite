import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ZenosLogo } from "@/components/logo";
import imageData from "@/lib/placeholder-images.json";

const renanImage = imageData.placeholderImages.find(img => img.id === 'renan-oliveira-portrait');

export function NikoFactor() {
  return (
    <section className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-foreground">Onde a Estratégia encontra a Execução.</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Lado A (Renan Oliveira) */}
          {renanImage && (
            <div className="md:col-span-3 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 md:gap-8">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-background">
                  <Image
                      src={renanImage.imageUrl}
                      alt={renanImage.description}
                      fill
                      className="object-cover filter grayscale contrast-125"
                      data-ai-hint={renanImage.imageHint}
                  />
              </div>
              <div>
                <h3 className="font-headline text-3xl uppercase tracking-wider text-foreground">Renan Oliveira</h3>
                <p className="text-sm font-semibold text-primary mb-3">Fundador & Estrategista Chefe</p>
                <p className="text-muted-foreground mb-4 text-balance">
                  Liderado por Renan Oliveira, engenheiro focado em eficiência, a Zenos nasceu para provar que a tecnologia deve ser poderosa ao usar e simples ao entender.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.linkedin.com/in/oliveira-renan/" target="_blank">
                    <Linkedin className="mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Lado B (NIKO) */}
          <div className="md:col-span-2 flex items-start gap-4 animate-fade-in-up">
             <div className="relative w-16 h-16 shrink-0 mt-2">
                <ZenosLogo className="relative w-full h-full p-4 text-primary" />
            </div>
            <div className="relative bg-background rounded-lg p-6 shadow-lg">
               <div className="absolute top-6 -left-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-background"></div>
               <blockquote className="text-lg text-foreground/90 text-balance font-medium">
                "Vamos eliminar o que não traz lucro? A inovação começa quando limpamos a visão."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
