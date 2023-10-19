import React, { useState } from 'react'
import {AiOutlineMenuFold} from 'react-icons/ai'
import {LuSoup} from 'react-icons/lu'
import Aside from './Aside'
const Header = () => {
  const [shown, setIsShown] = useState(false)
  const show = event => {
    setIsShown(!shown)
  }
  return (
  <div>
    <div className='Header'>
        <div className="cont-logo">
            <div className="logo">
                Поваренок
            </div>
            <div><LuSoup className='logo-icon'/></div>   
        </div>
        <div className="icon-cont" onClick={show}>
            <AiOutlineMenuFold className='icon'/>
        </div>
    </div>
    {shown && <Aside/>}
  </div>
  )
}

export default Header