import React from "react";
import {MenuData} from "../types";
import './Menu.css';

interface Props {
  menuContain: MenuData[]
  deleteBtn: (name:string) => void;
}

const Menu: React.FC<Props> = (props) => {
  const Print = () => {
    return props.menuContain.map((dish) => {
      return (
        <div className='dish-box' key={dish.name + 1} onClick={() => props.deleteBtn(dish.name)}>
          <p>{dish.name}</p>
          <p>{dish.price}</p>
        </div>
      )})
  }
  return (
    <div>
      <div className='menu-box'> {Print()}
      </div>
    </div>
  );
};
export default Menu;