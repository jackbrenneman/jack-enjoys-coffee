import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import BuildIcon from '@material-ui/icons/Build';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export const drawerPages = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    path: '/home'
  },
  {
    name: 'Data',
    icon: <AssessmentIcon />,
    path: '/data'
  },
  {
    name: 'Coffee',
    icon: <LocalCafeIcon />,
    path: '/coffee'
  },
  {
    name: 'Equipment',
    icon: <BuildIcon />,
    path: '/equipment'
  },
  {
    name: 'Blog',
    icon: <LibraryBooksIcon />,
    path: '/blog'
  }
];
