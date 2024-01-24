import { IconAdjustements, IconHome, IconNotifications } from '../icons';
import MenuItem from './MenuItem';

export default function AsideMenu() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Inicio" icon={IconHome} />
        <MenuItem url="/ajustes" text="Ajustes" icon={IconAdjustements} />
        <MenuItem
          url="/notificações"
          text="Notificações"
          icon={IconNotifications}
        />
      </ul>
    </aside>
  );
}
