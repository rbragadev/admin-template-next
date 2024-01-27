import { createContext, useState } from 'react';

type themeValue = 'dark' | '';

interface AppContextProps {
  theme?: themeValue;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [tema, setTema] = useState<themeValue>('dark');

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '');
  }

  return (
    <AppContext.Provider
      value={{
        theme: tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
