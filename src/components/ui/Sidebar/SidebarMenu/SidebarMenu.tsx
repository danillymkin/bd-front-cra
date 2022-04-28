import React, { FunctionComponent, useState } from 'react';
import { useUpdateEffect } from 'usehooks-ts';

import classes from './SidebarMenu.module.scss';
import { SidebarMenuSection } from '../SidebarMenuSection/SidebarMenuSection';
import { SidebarMenuType } from './SidebarMenuType';
import { SidebarMenuSectionType } from '../SidebarMenuSection/SidebarMenuSectionType';
import { useLocation } from 'react-router-dom';

interface SidebarMenuProps {
  menu: SidebarMenuType;
}

type Props = SidebarMenuProps;

const SidebarMenu: FunctionComponent<Props> = ({ menu }): JSX.Element => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname);

  useUpdateEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <ul className={classes.list}>
      {menu.map((section: SidebarMenuSectionType) => (
        <SidebarMenuSection
          key={section.name}
          active={active}
          section={section}
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;
