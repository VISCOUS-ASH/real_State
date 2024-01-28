import React,{useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header =()=> {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <=  800)
    {
        return {right: !menuOpened && "-100%"} 
    }
  }
    return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} /> 

        <OutsideClickHandler 
        onOutsideClick={()=>{
          setMenuOpened(false)}}
        >
        <div className="h-menu flexCenter" 
        style={getMenuStyles(menuOpened)}
        >
          <a href="#residency">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get_started">Get Started</a>
          <button className="button">
          <a href="#contact">Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </OutsideClickHandler>
      </div>
    </section>
    )
}
export default Header