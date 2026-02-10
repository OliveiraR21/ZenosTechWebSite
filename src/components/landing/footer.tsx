import { ZenosLogo } from "@/components/logo";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <ZenosLogo className="h-10 w-10 text-primary" />
          <p className="font-headline text-lg uppercase tracking-wider text-muted-foreground">
            Agilidade Simples. Excelência Duradoura.
          </p>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground">
          <a
            href="#"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors hover:text-primary"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="mailto:contact@zenos.web"
            aria-label="Contact"
            className="transition-colors hover:text-primary"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-6 text-center text-sm text-muted-foreground/50">
        <p>&copy; {new Date().getFullYear()} Zenos Web. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
