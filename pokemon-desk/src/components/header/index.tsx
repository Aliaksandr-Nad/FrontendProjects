import React from 'react';
import { A } from 'hookrouter';
import s from './header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title} href={link} className={s.menuLink}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
