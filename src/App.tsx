import './App.css'
import Menu from "./Menu/Menu"
import MenuOrder from "./MenuOrder/MenuOrder";
import {useState} from "react";
import lagman1 from './images/noodle1.png';
import lagman2 from './images/noodle2.png';
import lagman3 from './images/noodle3.png';
import lagman4 from './images/noodle4.png';
import lagman5 from './images/noodle5.png';
import lagman6 from './images/noodle6.png';


function App() {

  const [menuContain, setMenuContain] = useState([
    {name: 'Creamy Lagman', price: 265, mount: 0, image: lagman1},
    {name: 'Guiru Lagman', price: 245, mount: 0, image: lagman2},
    {name: 'Boso Lagman', price: 220, mount: 0, image: lagman3},
    {name: 'Lagman Vegan', price: 260, mount: 0, image: lagman4},
    {name: 'Suyru Lagman', price: 200, mount: 0, image: lagman5},
    {name: 'Moguru Lagman', price: 210, mount: 0, image: lagman6}
  ]);


  const getMount = (name: string) => {
    setMenuContain(prev => prev.map((dish) => {
      return dish.name === name ? {
        ...dish,
        mount: dish.mount + 1,
      } : dish
    }))
  }

  const deleteBtn = (name: string) => {
    setMenuContain(prev => prev.map((dish) => {
      return dish.name === name ? {...dish, mount: 0,} : dish
    }))
  }

  return (

    <div className="App">

      <div className="menu-order">
        <MenuOrder menuContain={menuContain}
                   deleteBtn={deleteBtn}/>
      </div>

      <div className="menu-items">
        <Menu menuContain={menuContain}
              deleteBtn={getMount}/>
      </div>

    </div>

  );
}

export default App;
