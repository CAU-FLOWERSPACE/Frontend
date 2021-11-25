import React from 'react';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: '컬러 테라피',
    path: '/option1page',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: '공간 테라피',
    path: '/upload',
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: 'nav-text'
  },
  {
    title: '로그인',
    path: '/login',
    icon: <BsIcons.BsEnvelopeFill />,
    cName: 'nav-text'
  }
];