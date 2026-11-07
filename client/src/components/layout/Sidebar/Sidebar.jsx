import { NavLink } from "react-router";
import {
  HomeIcon,
  CalendarIcon,
  FolderIcon,
  StatisticsIcon,
  SettingsIcon,
  LogoutIcon,
  LogoIcon,
} from "../../ui/Icons";
import Button from "../../ui/Button/Button";
import styles from "./Sidebar.module.css";

const items = [
  { to: "/", label: "Today", icon: HomeIcon, end: true },
  { to: "/calendar", label: "Calendar", icon: CalendarIcon },
  { to: "/projects", label: "Projects", icon: FolderIcon },
  { to: "/statistic", label: "Statistic", icon: StatisticsIcon },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

function Sidebar({ onLogout }) {
  return (
    <aside className={styles.sidebar}>
      <LogoIcon className={styles.logo} />

      <nav className={styles.nav} aria-label="Main">
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={styles.link}
            aria-label={label}
            title={label}
          >
            <Icon />
          </NavLink>
        ))}
      </nav>

      <Button
        variant="ghost"
        leftIcon={<LogoutIcon />}
        onClick={onLogout}
        aria-label="Log out"
        title="Log out"
        className={styles.logout}
      />
    </aside>
  );
}

export default Sidebar;
