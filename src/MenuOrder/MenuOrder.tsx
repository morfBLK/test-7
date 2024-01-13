import React from "react";
import {MenuData} from "../types";
import Total from "../Total/Total";
import './MenuOrder.css'


interface Props {
  menuContain: MenuData[];
  deleteBtn: (name: string) => void;
}

const MenuOrder: React.FC<Props> = (props) => {
  const print = () => {
    return props.menuContain.map((dish) => {
      if (dish.mount > 0) {
        return (
          <div key={dish.name + 1} className='order-box'>
            <img className='img-lagman' src={dish.image} alt={dish.name}/>
            <div>
              <span>{dish.name}</span>
              <span>{dish.mount}</span>
              <button className='del-btn' onClick={() => props.deleteBtn(dish.name)}></button>
            </div>
          </div>
        )
      } else {
        return null
      }
    })
  }

  const empty = () => {
    const emptyDish = props.menuContain.reduce((acc) => {
      props.menuContain.forEach(element => {
        if (element.mount > 0) {
          acc++
        }
      })
      return acc;
    }, 0)
    if (!emptyDish) {
      return <p>Empty</p>
    }
  }

  return (

    <div className='order-details'>
      {empty()}
      {print()}
      <Total menuContain={props.menuContain}/>
    </div>
  );
};

export default MenuOrder;