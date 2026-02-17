"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateNikoStrategy } from "@/ai/flows/niko-strategy-flow";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface Message {
  author: 'user' | 'niko';
  text: string;
}

const initialMessage: Message = {
  author: 'niko',
  text: "Olá! Sou o NIKO, especialista de negócios da Zenos. Antes de começarmos a analisar sua operação, como posso te chamar?"
};

export function NikoChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showStrategyButton, setShowStrategyButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);
  
  // Open chat automatically on first load after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { author: 'user', text: inputValue };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);
    setShowStrategyButton(false);

    const history = newMessages
      .map(msg => `${msg.author === 'user' ? 'User' : 'NIKO'}: ${msg.text}`)
      .join('\n');

    try {
      const response = await generateNikoStrategy({ history });
      const nikoResponse: Message = { author: 'niko', text: response.insight };
      setMessages(prev => [...prev, nikoResponse]);
      
      if (response.insight.toLowerCase().includes('whatsapp') || response.insight.toLowerCase().includes('renan')) {
        setShowStrategyButton(true);
      }

    } catch (error) {
      console.error("Error calling AI strategy flow:", error);
      const errorMessage: Message = {
        author: 'niko',
        text: "Desculpe, estou com dificuldades para processar. Por favor, tente novamente ou fale com um estrategista."
      };
      setMessages(prev => [...prev, errorMessage]);
      setShowStrategyButton(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-4 w-80 md:w-96 rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-xl p-4 shadow-2xl shadow-primary/10"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image 
                    src="/NIKO/NIKO_CABECA.jpg" 
                    alt="NIKO, assistente de IA" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-primary animate-pulse border-2 border-card" />
                </div>
                <h4 className="font-headline text-xl uppercase tracking-wider text-foreground">NIKO: IA Ativa</h4>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="my-4 h-64 space-y-4 overflow-y-auto pr-2 text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col gap-1 animate-in fade-in",
                    msg.author === 'user' ? 'items-end slide-in-from-right-4' : 'items-start slide-in-from-left-4'
                  )}
                  style={{ animationDelay: `${100 * index}ms` }}
                >
                   <span className={cn("text-[10px] uppercase tracking-widest",
                    msg.author === 'user' ? 'text-muted-foreground mr-2' : 'text-primary font-bold ml-2'
                   )}>
                    {msg.author === 'user' ? 'Você' : 'Niko'}
                   </span>
                  <div
                    className={cn(
                      "p-3 rounded-2xl border max-w-[85%]",
                      msg.author === 'user'
                        ? 'bg-muted text-foreground border-border rounded-br-none'
                        : 'bg-primary/10 border-primary/20 text-foreground rounded-bl-none'
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-2 animate-in fade-in">
                    <span className="text-[10px] text-primary uppercase tracking-widest font-bold ml-2">Niko</span>
                    <div className="bg-primary/10 border-primary/20 p-3 rounded-2xl rounded-bl-none">
                        <div className="flex items-center gap-2 text-primary animate-pulse">
                           <div className="flex gap-1">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                           </div>
                        </div>
                    </div>
                 </div>
              )}
              {showStrategyButton && (
                  <div className="px-2 pt-2 animate-in fade-in">
                    <Button asChild className="w-full font-bold">
                        <Link href={WHATSAPP_LINKS.strategist} target="_blank">Falar com um Estrategista</Link>
                    </Button>
                  </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border pt-3">
              <Input 
                placeholder="Envia sua mensagem" 
                className="bg-transparent border-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0" disabled={isLoading}>
                {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="relative h-16 w-16 rounded-full bg-primary p-0 text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 overflow-hidden"
          aria-label="Abrir chat com NIKO"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "x" : "niko"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Image 
                  src="/NIKO/NIKO_CABECA.jpg" 
                  alt="NIKO, assistente de IA" 
                  fill
                  className="object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  );
}
