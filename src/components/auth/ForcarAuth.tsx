import Head from 'next/head';
import Image from 'next/image';
import loading from '../../../public/images/loading.gif';
import useAuth from '@/data/hook/useAuth';
import route from 'next/router';

export default function ForcarAuth(props) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
        if(!document.cookie?.includes("admin-template-cod3r-auth")){
          window.location.href = "/auth"
        }
        `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderizarCarregando() {
    return (
      <div
        className={`
      flex justify-center items-center h-screen`}
      >
        <Image src={loading} alt="loading" />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    route.push('/auth');
    return null;
  }
}
