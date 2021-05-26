import React from 'react';
import cn from 'classnames';

import Heading from '../../components/heading';

import s from './style.module.scss';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const pokemons = {
    name_clean: 'bulbasaur',
    abilities: ['overgrow', 'chlorophyll'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      'special-attack': 65,
      'special-defense': 65,
      speed: 45,
    },
    types: ['grass', 'poison'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    name: 'Bulbasaur',
    base_experience: 64,
    height: 7,
    id: 1,
    is_default: true,
    order: 1,
    weight: 69,
  };

  return (
    <div className={s.root} style={{ marginLeft: '20%' }}>
      <div className={s.pictureWrap}>
        <img src={pokemons.img} alt={pokemons.name} />

        <div className={s.typeWrap}>
          {pokemons.types.map((type) => (
            <span key={type} className={cn(s.label, s[type])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.infoWrap}>
        <div className={s.labelWrap}>
          <Heading className={s.titleName} type="h3">
            {' '}
            {pokemons.name}{' '}
          </Heading>
          <Heading className={s.titleName} type="h4">
            {' '}
            Generation {pokemons.order}{' '}
          </Heading>
          <div style={{ display: 'inline-block' }}>
            <div className={s.experienceWrap}>{pokemons.base_experience}</div>
          </div>
        </div>

        <div className={s.statWrap}>
          <div className={cn(s.statRow, s.containerWrap)}>
            <div>
              Abilities
              <p>{pokemons.abilities.reduce((result, ability) => `${result} - ${ability}`)}</p>
            </div>
          </div>

          <div className={cn(s.statRow, s.containerWrap)} style={{ width: '100%' }}>
            Healthy Points
            <p />
            {pokemons.stats.hp}
            <p />
            Experience
            <p />
            {pokemons.base_experience}
            <p />
          </div>

          <div className={cn(s.statRow)}>
            <div className={s.containerWrap}>
              <div className={s.statItem}>
                <div className={s.statValue}>{pokemons.stats.attack}</div>
                Attack
              </div>
            </div>
            <div className={s.containerWrap}>
              <div className={s.statItem}>
                <div className={s.statValue}>{pokemons.stats.defense}</div>
                Defense
              </div>
            </div>
            <div className={s.containerWrap}>
              <div className={s.statItem}>
                <div className={s.statValue}>{pokemons.stats['special-attack']}</div>
                Special attack
              </div>
            </div>
            <div className={s.containerWrap}>
              <div className={s.statItem}>
                <div className={s.statValue}>{pokemons.stats['special-defense']}</div>
                Special defense
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
