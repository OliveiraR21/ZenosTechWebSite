'use client';

import { useCollection, useMemoFirebase, useFirestore } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader } from 'lucide-react';

export default function LeadsPage() {
  const firestore = useFirestore();
  
  const leadsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: leads, isLoading } = useCollection(leadsQuery);

  const formatDate = (timestamp: any) => {
    if (!timestamp || !timestamp.seconds) return 'N/A';
    return new Date(timestamp.seconds * 1000).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
        <Card>
            <CardHeader>
                <CardTitle>Leads Capturados pelo NIKO</CardTitle>
                <CardDescription>Lista de todos os contatos gerados através do assistente de IA.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>WhatsApp</TableHead>
                        <TableHead>Data de Criação</TableHead>
                        <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && (
                        <TableRow>
                            <TableCell colSpan={4} className="h-24 text-center">
                                <Loader className="mx-auto h-6 w-6 animate-spin" />
                            </TableCell>
                        </TableRow>
                        )}
                        {!isLoading && leads?.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={4} className="h-24 text-center">
                            Nenhum lead encontrado.
                            </TableCell>
                        </TableRow>
                        )}
                        {leads?.map((lead) => (
                        <TableRow key={lead.id}>
                            <TableCell className="font-medium">{lead.fullName}</TableCell>
                            <TableCell>{lead.phoneNumber}</TableCell>
                            <TableCell>{formatDate(lead.createdAt)}</TableCell>
                            <TableCell>
                            <Badge variant="outline">{lead.status}</Badge>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </main>
  );
}
