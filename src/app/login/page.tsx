'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFirebase, initiateEmailSignIn } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AuthError } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { auth } = useFirebase();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    initiateEmailSignIn(auth, email, password);
    
    // Optimistic redirect, the layout will handle non-admins
    router.push('/admin/leads');

    // Monitor auth state for login success or failure
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        toast({ title: "Login bem-sucedido!" });
        router.push('/admin/leads');
        unsubscribe();
      }
    });

    // Handle login errors specifically
    const originalSignIn = auth.signInWithEmailAndPassword;
    auth.signInWithEmailAndPassword = (email, password) => {
        return originalSignIn(email, password).catch((err: AuthError) => {
            let message = "Ocorreu um erro desconhecido.";
            if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
                message = "Email ou senha inválidos.";
            }
            setError(message);
            toast({
                variant: "destructive",
                title: "Falha no login",
                description: message,
            });
            throw err;
        });
    };
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Entre com suas credenciais para ver os leads.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@zenos.tech"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            <Button type="submit" className="w-full font-bold">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
