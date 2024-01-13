import React from "react";
import {MenuData} from "../types";
import './Menu.css';
import '../Card/Card'
import Card from "../Card/Card";

interface Props {
  menuContain: MenuData[]
  deleteBtn: (name: string) => void;
}

const Menu: React.FC<Props> = (props) => {

  return (

    <div className='add-items'>
      <div>
        <Card menuContain={props.menuContain} deleteBtn={props.deleteBtn}/>
      </div>
    </div>

  );
};
export default Menu;