import React from "react";
import {MenuData} from "../types";

interface Props {
  menuContain: MenuData[];
  deleteBtn: (name: string) => void;
}

const MenuOrder: React.FC<Props> = (props) => {
  let totalPrice = 0;
  const print = () => {
    return props.menuContain.map((dish) => {
      if (dish.mount > 0) {
        totalPrice += dish.price * dish.mount
        return (
          <div key={dish.name + 1}>
            <img className='img-lagman' src={dish.image} alt={dish.name}/>
            <div>
              <span>{dish.name}</span>
              <span>{dish.mount}</span>
              <button onClick={() => props.deleteBtn(dish.name)}>Delete</button>
            </div>
          </div>
        )
      } else {
        return null
      }
    })
  }

  return (
    <div>
            {print()}
      <div>
        <span>{totalPrice}</span>
      </div>
    </div>
  );
};

export default MenuOrder;