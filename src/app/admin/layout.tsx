'use client';

import { useEffect, useState, useMemo, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUser, useFirestore } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Loader, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoImage } from '@/components/logo';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isUserLoading, auth } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const firestore = useFirestore();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

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
        if (!docSnap.exists()) {
            router.replace('/'); // Redirect non-admins to home
        }
      })
      .catch(() => {
        setIsAdmin(false);
        setIsAdminLoading(false);
        router.replace('/');
      });
  }, [user, isUserLoading, router, adminCheckRef, pathname]);

  const handleLogout = () => {
    auth.signOut();
    router.push('/');
  };

  if (isUserLoading || (pathname !== '/login' && isAdminLoading)) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  // Allow login page to render without the admin layout shell
  if (pathname === '/login') {
      return <>{children}</>;
  }


  if (!isAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
         <Loader className="h-8 w-8 animate-spin text-primary" />
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
