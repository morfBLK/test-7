import './App.css'
import {MenuData} from "./types";
import Menu from "./Menu/Menu"


const menuContain:MenuData[] = [
  {name:'Сливочный Лагман', price: 265, mount: 0},
  {name:'Гуйру Лагман', price: 245, mount: 0},
  {name:'Босо Лагман', price: 220, mount: 0},
  {name:'Лагман Vegan', price: 260, mount: 0},
  {name:'Суйру Лагман', price: 200, mount: 0},
  {name:'Могуру Лагман', price: 210, mount: 0}
];


function App() {


  return (

    <div className="App">

      <div className="menu-order"></div>

      <div className="menu-items">
        <Menu menuContain={menuContain}/>
      </div>

    </div>

  );
}

export default App
