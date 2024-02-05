import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import Usuario from '@/model/Usuario';
import route from 'next/router';
import Cookies from 'js-cookie';

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
  carregando?: boolean;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User,
): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0]?.providerId,
    imagemUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set('admin-template-cod3r-auth', logado, {
      expires: 7,
    });
  } else {
    Cookies.remove('admin-template-cod3r-auth');
  }
}

export function AuthProvider(props: any) {
  const [usuario, setUsuario] = useState<Usuario>();
  const [carregando, setCarregando] = useState(true);

  async function configurarSessao(usuarioFirebase) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configurarSessao(resp.user);
      route.push('/');
    } finally {
      setCarregando(false);
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();
    } else {
      setCarregando(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, loginGoogle, logout, carregando }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
