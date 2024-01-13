import React from 'react';
import {MenuData} from "../types";
import './Total.css';

interface Props {
  menuContain: MenuData[];
}

const Total: React.FC<Props> = (props) => {

  const price = props.menuContain.reduce((acc, price) => {
    acc += price.mount * price.price;
    return acc
  }, 0);

  return (
    <div className='total-price'>
      <span>{price} KGS</span>
    </div>
  );
};

export default Total;