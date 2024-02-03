import AuthInput from '@/components/auth/AuthInput';
import { useState } from 'react';

export default function Auth() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <div>
      <h1>Autenticacao</h1>
      <AuthInput
        label="Email"
        valor={email}
        valorMudou={setEmail}
        obrigatorio
        tipo="email"
      />
      <AuthInput
        label="Senha"
        valor={senha}
        valorMudou={setSenha}
        tipo="password"
        obrigatorio
      />
    </div>
  );
}
