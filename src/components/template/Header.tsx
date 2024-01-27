import useAppData from '@/data/hook/useAppData';
import ButtonAlterTheme from './ButtonAlterTheme';
import Title from './Title';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, alternarTema } = useAppData();
  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end">
        <ButtonAlterTheme theme={theme} alternarTema={alternarTema} />
      </div>
    </div>
  );
}
