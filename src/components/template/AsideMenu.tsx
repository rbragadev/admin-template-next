import useAuth from '@/data/hook/useAuth';
import {
  IconAdjustements,
  IconHome,
  IconLogout,
  IconNotifications,
} from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function AsideMenu() {
  const { logout } = useAuth();
  return (
    <aside className="flex flex-col dark:bg-gray-900 bg-gray-200 text-gray-700">
      <div
        className={`
        flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul
        className={`
        flex-grow
      `}
      >
        <MenuItem url="/" text="Inicio" icon={IconHome} />
        <MenuItem url="/ajustes" text="Ajustes" icon={IconAdjustements} />
        <MenuItem
          url="/notificacoes"
          text="Notificações"
          icon={IconNotifications}
        />
      </ul>
      <ul className="">
        <MenuItem
          onClick={logout}
          text="logout"
          icon={IconLogout}
          className={`text-red-600 hover:bg-red-400 hover:text-white`}
        />
      </ul>
    </aside>
  );
}
