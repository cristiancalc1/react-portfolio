import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>Cursos y estudios</h5>
      <h2>Estudios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>HTML/CSS</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            
          </ul>
        </article>




        <article className="service">
          <div className="service__head">
            <h3>JAVASCRIPT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
          
          </ul>
        </article>





        <article className="service">
          <div className="service__head">
            <h3>REACT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services