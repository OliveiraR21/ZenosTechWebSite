"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../theme-toggle";
import { LogoImage } from "@/components/logo";
import { WHATSAPP_LINKS } from "@/lib/constants";

const navLinks = [
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#especialista", label: "Especialista" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <div className="md:hidden">
            {isMounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <Link href="/" className="mb-6 flex items-center" onClick={() => setIsOpen(false)}>
                      <LogoImage className="relative h-8 w-20" />
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="mr-2 h-10 w-10" />
            )}
          </div>
          
          <Link href="/" className="hidden md:flex items-center">
            <LogoImage className="relative h-8 w-20" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center md:hidden">
            <Link href="/" className="flex items-center">
                <LogoImage className="relative h-8 w-20" />
            </Link>
        </div>

        <div className="flex items-center gap-2">
          {isMounted ? <ThemeToggle /> : <div className="h-10 w-10" />}
          <Button asChild>
            <Link href={WHATSAPP_LINKS.strategist} target="_blank">FALAR COM UM ESTRATEGISTA</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
