import React from 'react';
import {MenuData} from "../types";
import './Card.css';

interface Props {
  menuContain: MenuData[];
  deleteBtn: (name: string) => void;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className='menu-box'>
      {props.menuContain.map((dish) => {
        return (
          <div className='item-box' key={dish.name + 1} onClick={() => props.deleteBtn(dish.name)}>
            <img src={dish.image} alt={dish.name}/>
            <p>{dish.name}</p>
            <p>{dish.price} KGS</p>
          </div>
        )
      })}
    </div>
  );
};

export default Card;