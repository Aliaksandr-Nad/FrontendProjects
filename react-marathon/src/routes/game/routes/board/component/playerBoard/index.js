import {useState} from 'react';

import PokemonCard from "../../../../../../components/pokemonCard";

import cn from 'classnames';
import s from "./style.module.css";

const PlayerBoard = ({wrapper, player, cards, onClickCard}) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <div className={wrapper}>
            {
                cards.map((item) => (
                    <div className={cn(s.cardBoard, {
                        [s.selected]: isSelected === item.id
                    })}
                         onClick={() => {
                             setSelected(item.id)
                             onClickCard && onClickCard({
                                 player,
                                 ...item,
                             })
                         }}
                    >
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default PlayerBoard;
