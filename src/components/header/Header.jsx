import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Fondo from '../../assets/pexels-pavel-danilyuk-5495842.mp4'
import {BsArrowLeft} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <div className="me">
          <video src={Fondo} alt="me"  className='videoo' autoPlay loop muted/>
        </div>
        <div className='contenedor-encab'>
        <h5>Hola, soy</h5>
        <h1>Cristian Lopez</h1>
        <h5 className="text-light">FRONTEND DEVELOPER</h5>
        </div>
        <CTA/>
        <HeaderSocials/>
        
        <a href="#contact" className='scroll__down'><BsArrowLeft/></a>
        
      </div>
    </header>
  )
}

export default Header