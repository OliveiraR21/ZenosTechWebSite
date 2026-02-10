import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import imageData from "@/lib/placeholder-images.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, MessagesSquare } from 'lucide-react';


const flowchartImage = imageData.placeholderImages.find(img => img.id === 'flowchart-consultancy');
const chatImage = imageData.placeholderImages.find(img => img.id === 'chat-automation');

export default function SolucoesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 pt-16 pb-12 text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase text-primary animate-fade-in-down">
            O CONTROLE TOTAL DA SUA OPERAÇÃO.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-balance animate-fade-in-up">
            Unimos a inteligência estratégica da consultoria com a velocidade da automação. Tecnologia e processos desenhados para quem busca ordem e crescimento.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left side: Consultancy - Flowcharts */}
            <Card className="flex flex-col bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                        <Workflow className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-3xl uppercase">Consultoria Estratégica</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <p className="text-center text-muted-foreground mb-4">Fluxogramas organizados para clareza total.</p>
                    {flowchartImage && (
                        <div className="relative w-full flex-grow aspect-[4/3] rounded-md overflow-hidden mt-auto">
                            <Image
                                src={flowchartImage.imageUrl}
                                alt={flowchartImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={flowchartImage.imageHint}
                            />
                        </div>
                    )}
                </CardContent>
            </Card>
            
            {/* Right side: Automation - Chat */}
            <Card className="flex flex-col bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                        <MessagesSquare className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-3xl uppercase">Automação Inteligente</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <p className="text-center text-muted-foreground mb-4">Interfaces de chat ágeis para execução rápida.</p>
                    {chatImage && (
                        <div className="relative w-full flex-grow aspect-[4/3] rounded-md overflow-hidden mt-auto">
                            <Image
                                src={chatImage.imageUrl}
                                alt={chatImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={chatImage.imageHint}
                            />
                        </div>
                    )}
                </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
