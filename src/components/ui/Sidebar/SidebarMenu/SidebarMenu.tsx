import React, { FunctionComponent, useState } from 'react';
import { useUpdateEffect } from 'usehooks-ts';
import classNames from 'classnames/bind';

import classes from './SidebarMenu.module.scss';
import { SidebarMenuSection } from '../SidebarMenuSection/SidebarMenuSection';
import { SidebarMenuType } from './SidebarMenuType';
import { SidebarMenuSectionType } from '../SidebarMenuSection/SidebarMenuSectionType';
import { useLocation } from 'react-router-dom';

interface SidebarMenuProps {
  menu: SidebarMenuType;
  isMobile: boolean;
}

type Props = SidebarMenuProps;

const cx = classNames.bind(classes);

const SidebarMenu: FunctionComponent<Props> = ({ menu, isMobile }): JSX.Element => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname);

  useUpdateEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const listClasses = cx({
    desktop: !isMobile,
    mobile: isMobile,
  });

  return (
    <ul className={listClasses}>
      {menu.map((section: SidebarMenuSectionType) => (
        <SidebarMenuSection
          isMobile={isMobile}
          key={section.name}
          active={active}
          section={section}
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;
