'use client';

import { useEffect, useState, useMemo, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUser, useFirestore } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Loader, LogOut, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoImage } from '@/components/logo';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isUserLoading, auth } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const firestore = useFirestore();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const { toast } = useToast();

  const adminCheckRef = useMemo(() => {
    if (!user) return null;
    return doc(firestore, 'roles_admin', user.uid);
  }, [user, firestore]);

  useEffect(() => {
    if (isUserLoading) {
      return;
    }
    if (!user) {
      if (pathname !== '/login') {
        router.replace('/login');
      }
      setIsAdmin(false);
      setIsAdminLoading(false);
      return;
    }

    if (!adminCheckRef) {
      setIsAdmin(false);
      setIsAdminLoading(false);
      return;
    }

    getDoc(adminCheckRef)
      .then((docSnap) => {
        setIsAdmin(docSnap.exists());
        setIsAdminLoading(false);
      })
      .catch(() => {
        setIsAdmin(false);
        setIsAdminLoading(false);
      });
  }, [user, isUserLoading, router, adminCheckRef, pathname]);

  const handleLogout = () => {
    if(!auth) return;
    auth.signOut();
    router.push('/');
  };

  const handleMakeAdmin = async () => {
    if (!user || !firestore) return;
    const adminDocRef = doc(firestore, 'roles_admin', user.uid);
    try {
      await setDoc(adminDocRef, { role: 'admin', createdAt: new Date() });
      toast({
        title: "Sucesso!",
        description: "Você agora é um administrador. A página será recarregada.",
      });
      setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
      console.error("Error making admin: ", error);
      toast({
        variant: "destructive",
        title: "Erro ao se tornar Admin",
        description: "Não foi possível criar o registro de administrador. Verifique as regras de segurança do Firestore.",
      });
    }
  };

  if (isUserLoading || isAdminLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (pathname === '/login') {
      return <>{children}</>;
  }

  if (user && !isAdmin) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
        <div className="max-w-md space-y-4">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-2xl font-bold">Acesso de Administrador</h1>
          <p className="text-muted-foreground">
            Você está autenticado como <span className="font-medium text-foreground">{user.email}</span>, mas ainda não tem permissões de administrador.
          </p>
          <p className="text-muted-foreground">
            Clique no botão abaixo para criar seu registro de administrador no banco de dados. Isso é um passo único.
          </p>
          <Button onClick={handleMakeAdmin} size="lg" className="w-full">
            Tornar-me Administrador
          </Button>
           <Button onClick={handleLogout} variant="outline" size="sm" className="w-full">
                Sair
            </Button>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
         <p>Redirecionando para o login...</p>
         <Loader className="ml-4 h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
       <header className="sticky top-0 z-40 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
            <Link href="/" className="flex items-center">
                <LogoImage className="relative h-8 w-20" />
            </Link>
            <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
            </Button>
       </header>
      {children}
    </div>
  );
}
