import React, { FunctionComponent } from 'react';

import classes from './SidebarMenuItem.module.scss';
import { SidebarMenuItemType } from './SidebarMenuItemType';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

interface SidebarMenuItemProps {
  item: SidebarMenuItemType;
  active: string;
  isMobile?: boolean;
}

type Props = SidebarMenuItemProps;

const cx = classNames.bind(classes);

const SidebarMenuItem: FunctionComponent<Props> = ({
                                                     item,
                                                     active,
                                                     isMobile = false,
                                                   }): JSX.Element => {
  const { name, to, icon } = item;

  const isActive = to === active;

  return (
    <li className={cx({ item: true, activeItem: isActive })}>
      <Link to={to} className={cx({ link: true, linkMobile: isMobile, activeLink: isActive })}>
        {icon}
        {!isMobile && <span className={classes.name}>{name}</span>}
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
