import React, { FunctionComponent } from 'react';
import { FaCar, FaFileAlt, FaHandshake, FaHome } from 'react-icons/fa';

import classes from './Sidebar.module.scss';
import { SidebarMenuType } from '../../ui/Sidebar/SidebarMenu/SidebarMenuType';
import SidebarMenu from '../../ui/Sidebar/SidebarMenu/SidebarMenu';
import SidebarHeader from '../../ui/Sidebar/SidebarHeader/SidebarHeader';
import {
  CARS_ROUTE,
  CONTRACT_ROUTE,
  MAIN_ROUTE,
  REPORTS_ROUTE,
} from '../../../constants/routes';

const Sidebar: FunctionComponent = (): JSX.Element => {
  const menu: SidebarMenuType = [
    {
      name: 'Меню',
      items: [
        {
          name: 'Главная',
          to: MAIN_ROUTE,
          icon: <FaHome size={22} />,
        },
        {
          name: 'Автомобили',
          to: CARS_ROUTE,
          icon: <FaCar size={22} />,
        },
      ],
    },
    {
      name: 'Управление',
      items: [
        {
          name: 'Отчеты',
          to: REPORTS_ROUTE,
          icon: <FaFileAlt size={22} />,
        },
        {
          name: 'Договора',
          to: CONTRACT_ROUTE,
          icon: <FaHandshake size={22} />,
        },
      ],
    },
  ];

  return (
    <aside className={classes.sidebar}>
      <SidebarHeader />
      <SidebarMenu menu={menu} />
    </aside>
  );
};

export default Sidebar;
