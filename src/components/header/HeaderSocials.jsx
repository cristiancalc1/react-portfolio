import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/cristian-lopez-b4aa66245/" target="_blank"><BsLinkedin/></a>
    <a href="http://github.com" target="_blank"><FaGithubSquare/></a>
    <a href="http://instagram.com" target="_blank"><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials