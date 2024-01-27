import Layout from '@/components/template/Layout';
import useAppData from '@/data/hook/useAppData';

export default function Notificacoes() {
  const { theme, alternarTema } = useAppData();
  return (
    <Layout title="Notificações" subtitle="Estamos construindo as notificações">
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  );
}
