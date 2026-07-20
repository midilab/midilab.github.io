import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames, useThemeConfig } from '@docusaurus/theme-common';
import {
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';

function splitNavbarItemsThreeWay(items) {
  const left = items.filter((item) => item.position === 'left' && !item.center);
  const center = items.filter((item) => item.center === true);
  const right = items.filter(
    (item) => item.position === 'right',
  );
  return [left, center, right];
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbar: { items } } = useThemeConfig();

  const [leftItems, centerItems, rightItems] = splitNavbarItemsThreeWay(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <div className="navbar__inner">
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          'navbar__items',
          styles.navbarItemsLeft,
        )}>
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        <NavbarLogo />
        <NavbarItems items={leftItems} />
      </div>

      <div className={clsx('navbar__items', styles.navbarItemsCenter)}>
        <NavbarItems items={centerItems} />
      </div>

      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          'navbar__items navbar__items--right',
          styles.navbarItemsRight,
        )}>
        <NavbarItems items={rightItems} />
        <NavbarColorModeToggle className={styles.colorModeToggle} />
        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}
      </div>
    </div>
  );
}

function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem key={i} {...item} />
      ))}
    </>
  );
}