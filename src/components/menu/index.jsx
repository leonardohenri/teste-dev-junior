import { useState } from 'react'
import './styles.css'
export const Menu=()=>{
    const [openClose,setOpenClose] = useState(false)
    const handleClick= () =>{
        const mobile = document.getElementById('1');
      if (!openClose){
        setOpenClose(true)
        mobile.classList.add('ativo')
        
      }
      else{
        setOpenClose(false)
        mobile.classList.remove('ativo')
      }
    }
    return(
        <div className="menu-container">
            <div className="logo"></div>
        <div className="Menu-Desktop">
            <a href="/" >Home</a>
            <a href="/product">Product</a>
            <a href="/promo">Promo</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
        <div onClick={()=>handleClick()} className="mobile">
            <div className='Menu-mobile' id='1'>
            <a href="/" >Home</a>
            <a href="/product">Product</a>
            <a href="/promo">Promo</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            </div>
        </div>
        </div>
    )
}