import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio1.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis proyectos</h5>
      <h2>Portadolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>portafolio</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.github.com"className='btn'>Git Hub</a>
          <a href="https://dribbble.com/Alien_pixels"className='btn btn-primary' target='{_blank}'>Pagina</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>portafolio</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.github.com"className='btn'>Git Hub</a>
          <a href="https://dribbble.com/Alien_pixels"className='btn btn-primary' target='{_blank}'>Pagina</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>portafolio</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.github.com"className='btn'>Git Hub</a>
          <a href="https://dribbble.com/Alien_pixels"className='btn btn-primary' target='{_blank}'>Pagina</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>portafolio</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.github.com"className='btn'>Git Hub</a>
          <a href="https://dribbble.com/Alien_pixels"className='btn btn-primary' target='{_blank}'>Pagina</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>portafolio</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.github.com"className='btn'>Git Hub</a>
          <a href="https://dribbble.com/Alien_pixels"className='btn btn-primary' target='{_blank}'>Pagina</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>portafolio</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.github.com"className='btn'>Git Hub</a>
          <a href="https://dribbble.com/Alien_pixels"className='btn btn-primary' target='{_blank}'>Pagina</a>
         </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio