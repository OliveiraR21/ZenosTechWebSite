import { LogoImage } from "@/components/logo";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-background py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <LogoImage className="h-10 w-24" />
          <p className="font-headline text-lg uppercase tracking-wider text-muted-foreground">
            Agilidade Simples. Excelência Duradoura.
          </p>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground">
          <Link href="/admin/leads" className="text-sm transition-colors hover:text-primary">Admin</Link>
          <a
            href="https://www.linkedin.com/in/oliveira-renan/"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-6 text-center text-sm text-muted-foreground/50">
        <p>&copy; {new Date().getFullYear()} Zenos Tech | Se não for simples, não é inteligente.</p>
      </div>
    </footer>
  );
}
