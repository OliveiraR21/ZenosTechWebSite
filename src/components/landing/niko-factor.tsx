"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Loader2, BrainCircuit, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { generateStrategyAction } from "@/app/actions";
import nikoImageData from "@/lib/placeholder-images.json";

const formSchema = z.object({
  businessData: z
    .string()
    .min(50, { message: "Por favor, forneça pelo menos 50 caracteres sobre seu negócio." })
    .max(5000, { message: "A entrada não pode exceder 5000 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

const nikoImage = nikoImageData.placeholderImages.find(img => img.id === 'niko-tactical');

export function NikoFactor() {
  const [isLoading, setIsLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { businessData: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setStrategy(null);
    const result = await generateStrategyAction(data);
    setIsLoading(false);

    if (result.success && result.strategy) {
      setStrategy(result.strategy);
    } else {
      toast({
        variant: "destructive",
        title: "Erro de IA",
        description: result.error,
      });
    }
  };
  
  const handleReset = () => {
    setStrategy(null);
    form.reset();
  }

  return (
    <section className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">O Fator NIKO</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Um estrategista ao seu lado. O NIKO garante que sua operação mantenha o ritmo de elite, simplificando o dia a dia e apontando o caminho para a escala.
            </p>
            {nikoImage && (
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mt-8 shadow-2xl shadow-black/50">
                    <Image
                        src={nikoImage.imageUrl}
                        alt={nikoImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={nikoImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                </div>
            )}
          </div>

          <Card className="bg-background/50 border-border shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-headline tracking-wider">Seu Mentor Estratégico de IA</CardTitle>
              </div>
              <CardDescription>Descreva seu negócio e desafios para receber uma estratégia de NIKO.</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-muted-foreground">NIKO está analisando seus dados...</p>
                </div>
              ) : strategy ? (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                        <Sparkles className="h-6 w-6" />
                        <h3 className="text-xl font-headline tracking-wider">Sua Estratégia Zenos</h3>
                    </div>
                  <div className="p-4 bg-card rounded-md border border-border/50 max-h-64 overflow-y-auto">
                    <p className="whitespace-pre-wrap text-foreground">{strategy}</p>
                  </div>
                  <Button onClick={handleReset} variant="outline" className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Gerar Nova Estratégia
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="businessData"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Dados do Negócio & Desafios de Escala</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Descreva suas operações atuais, métricas de desempenho e desafios de escala..."
                              className="min-h-[150px] bg-card"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full font-bold" disabled={isLoading}>
                      {isLoading ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gerando...</>
                      ) : (
                        'Obter Estratégia'
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
