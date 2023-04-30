import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/Nested/Person'
import Message from './components/Nested/Message'
import Card from './components/Card/Card'
import {guns} from '../Test'
import Basic from './components/Events/Basic'
import ArrayExample from './components/ArrayExample'

function App() {
  const guns = [
  {
    id: 1,
    name: "GLOCK 17 Gen5",
    img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/glock.png",
    bullet: "9mm",
    capacity: "17 + 1",
    action: "Semi-Automatic",
    price: "540",
    category: "Pistol",
  },
  {
    id: 2,
    name: "FN 509 Tactical",
    img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/FN.png",
    bullet: "9mm",
    capacity: "10 + 1",
    action: "Semi-Automatic",
    price: "900",
    category: "Pistol",
  },
  {
    id: 3,
    name: "Kimber Custom 1911",
    img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/ki%2Cber.png",
    bullet: "45 ACP",
    capacity: "7 + 1",
    action: "Semi-Automatic",
    price: "900",
    category: "Pistol",
  },
  {
    id: 4,
    name: "Beretta M9A4 RDO",
    img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/beretta.png",
    bullet: "9mm",
    capacity: "18 + 1",
    action: "Semi-Automatic",
    price: "1000",
    category: "Pistol",
  },
  {
    id: 5,
    name: "Beretta A400 Xcel",
    img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/glock.png",
    bullet: "12 Gauge",
    capacity: "3 + 1",
    action: "Semi-Automatic",
    price: "1720",
    category: "Shotgun",
  },
];

  return (
    <div className="App">
      {/* <Person></Person> */}
      {/* <Message></Message> */}
      {/* <div className='grid grid-cols-3 gap-5'>
          {
        guns.map(item =>
          <Card {...item}
          
          ></Card>
      )}
      </div> */}
      {/* <div className='grid grid-cols-3 gap-5'>
        
      </div> */}
      


      <Basic></Basic>
      <ArrayExample />
    </div>
  )
}

export default App;
