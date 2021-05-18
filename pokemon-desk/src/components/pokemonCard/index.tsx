import React from 'react';
import Heading from '../heading';

import s from './style.module.scss';

interface IPokemonCard {
  id: number;
  name: string;
  attack: number;
  defense: number;
  types: string[];
  img: string;
}

const PokemonCard: React.FC<IPokemonCard> = ({ id, name, attack, defense, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading className={s.titleName} type="h4">
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span className={s.label}>{type}</span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;