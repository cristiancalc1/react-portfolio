import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
     <a href="#" className='footer__logo'>Cristian Lopez</a>
     <ul className="permalink">
      <li><a href="#">Header</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__socials">
      <a href=""><FiFacebook/></a>
      <a href=""><BsInstagram/></a>
      <a href=""><FiTwitter/></a>
     </div>
    </footer>
  )
}

export default Footer