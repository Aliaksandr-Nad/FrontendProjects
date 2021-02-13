import {useState} from 'react';
import cn from 'classnames';

import PokemonCard from "../../../../../../components/PokemonCard";

import s from "./style.module.css";

const FinishBoard = ({player, cards, onClickCard}) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <div className={cn(s.flex)}>
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
                            className={s.Card}

                            isActive
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default FinishBoard;
