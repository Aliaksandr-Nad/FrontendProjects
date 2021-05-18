import React from 'react';
import HomePage from './pages/home';
import PokedexPage from './pages/pokedex';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage title="Pokédex" />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <PokedexPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <PokedexPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
