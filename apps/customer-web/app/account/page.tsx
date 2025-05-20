'use client';
import {
  Button,
  Card,
  FormRow,
  Grid,
  Input,
  PageHeader,
  Section,
} from '@ui';
import { useState } from 'react';
import { useAllAccountsByEmail } from './hook';
import Link from 'next/link';

export default function AccountPage() {
  const [email, setEmail] = useState('');
  const [fetchAccounts, { data, loading, error }] = useAllAccountsByEmail();

  const handleSearch = () => {
    if (email.trim() !== '') {
      fetchAccounts({ variables: { email } });
    }
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Se dine kreditbeholdninger"
        subtitle="Søg på din oprettelses-email"
      />

      <Section>
        <FormRow label="Indtast email">
          <Grid columns={1} maxWidth="400px">
            <Input
              label=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleSearch}>Søg</Button>
          </Grid>
        </FormRow>
      </Section>

      {loading && <p className="mt-4">🔄 Henter...</p>}
      {error && <p className="mt-4 text-red-500">⚠️ Der opstod en fejl</p>}

      {data?.creditAccountByEmail?.length > 0 && (
        <Section title="Dine konti">
          <Grid columns={3} gap="1rem"> 
           
            {data.creditAccountByEmail.map((acc) => (
                <Link key={acc.creditCode} href={`/account/${acc.creditCode}`}>
                 <Card>
               <Grid minWidth='250px'>
                <div key={acc.creditCode} className="border p-4 rounded">
               
              
                
                <p><strong>Kreditter:</strong> {acc.availableCredits}</p>
                <p><strong>Saldo:</strong> {acc.availableMoney} DKK</p>
                <p><strong>Udløber:</strong> {new Date(acc.expiresAt).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {acc.isActive ? "Aktiv" : "Inaktiv"}</p>
                {acc.notes && <p><strong>Note:</strong> {acc.notes}</p>}
              </div>
              </Grid>
            </Card>
              </Link>
            ))}
            
            
          </Grid>
        </Section>
      )}

      {data?.creditAccountByEmail?.length === 0 && !loading && (
        <p className="mt-4">❌ Ingen konto fundet for denne email</p>
      )}
    </div>
  );
}
