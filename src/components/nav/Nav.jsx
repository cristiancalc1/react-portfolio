import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {ImBooks} from 'react-icons/im'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import {AiOutlineHdd} from 'react-icons/ai'

const Nav = () => {
  const [activeNav , setActiveNav]=useState('');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav=== '#' ? 'active': ''}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav=== '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')}className={activeNav=== '#experience' ? 'active': ''}><BiBook/></a>
      <a href="#services"onClick={() => setActiveNav('#services')}className={activeNav=== '#services' ? 'active': ''}><ImBooks/></a>
      <a href="#portfolio"onClick={() => setActiveNav('#portfolio')}className={activeNav=== '#portfolio' ? 'active': ''}><AiOutlineHdd/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav=== '#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav