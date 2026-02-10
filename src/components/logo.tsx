import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ZenosLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Zenos Logo"
  >
    <path
      d="M4 4H20L4 20H20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogoImage = ({ className }: { className?: string }) => (
    <div className={cn("relative", className)}>
        <Image
            src="/zenos_sem_fundo_escuro.png"
            fill
            alt="Zenos Tech Logo"
            className="dark:block hidden object-contain"
        />
        <Image
            src="/zenos_sem_fundo_claro.png"
            fill
            alt="Zenos Tech Logo"
            className="dark:hidden block object-contain"
        />
    </div>
);
