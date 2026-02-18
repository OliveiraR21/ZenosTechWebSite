"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { WHATSAPP_LINKS } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="cta-final" className="w-full bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <AnimationWrapper>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">
              O próximo nível é uma escolha simples.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Deixe seu contato. Um de nossos estrategistas iniciará a conversa para agendar sua sessão.
            </p>
            <div className="pt-4 max-w-md mx-auto">
                <Button asChild size="lg" className="w-full font-bold font-headline">
                    <Link href={WHATSAPP_LINKS.strategist} target="_blank">
                        INICIAR DIAGNÓSTICO COM UM ESTRATEGISTA
                    </Link>
                </Button>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
