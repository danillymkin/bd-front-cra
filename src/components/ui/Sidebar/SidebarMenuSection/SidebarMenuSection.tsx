import React, { FunctionComponent } from 'react';

import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';
import classes from './SidebarMenuSection.module.scss';
import { SidebarMenuItemType } from '../SidebarMenuItem/SidebarMenuItemType';
import { SidebarMenuSectionType } from './SidebarMenuSectionType';

interface SidebarMenuSectionProps {
  active: string;
  section: SidebarMenuSectionType;
}

type Props = SidebarMenuSectionProps;

export const SidebarMenuSection: FunctionComponent<Props> = ({
                                                               section,
                                                               active,
                                                             }): JSX.Element => {
  const { name, items } = section;

  return (
    <li>
      <span className={classes.name}>{name}</span>

      <ul className={classes.list}>
        {items.map((item: SidebarMenuItemType) => (
          <SidebarMenuItem key={item.name} item={item} active={active} />
        ))}
      </ul>
    </li>
  );
};
