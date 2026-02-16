"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { generateStrategyAction } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  whatsapp: z.string().min(10, { message: "Por favor, insira um número de WhatsApp válido." }),
});

export function FinalCta() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // This is a placeholder for a real contact action.
    // We are just logging to the console for now.
    console.log("Form data:", values);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);

    toast({
        title: "Mensagem Enviada!",
        description: "Obrigado pelo seu contato! Retornaremos em breve.",
    });
    form.reset();
  }
  
  return (
    <section id="cta-final" className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">
            O próximo nível é uma escolha simples.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Deixe seu contato. Um de nossos estrategistas iniciará a conversa para agendar sua sessão.
          </p>
          <div className="pt-4 max-w-md mx-auto">
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="text-center"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu WhatsApp com DDD" {...field} className="text-center" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full font-bold font-headline" disabled={isSubmitting}>
                  {isSubmitting ? "ENVIANDO..." : "INICIAR DIAGNÓSTICO COM UM ESTRATEGISTA"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
