import React from 'react'
import './about.css'
import ME from '../../assets/pexels-xxss-is-back-777001.jpg'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {SiBootstrap} from 'react-icons/si'
import {SiMaterialui} from 'react-icons/si'
const About = () => {
  return (
    <section id='about'>
     <h5>Get to Know</h5>
     <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="about Image" />
            </div>
      </div>
      <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                  <ImHtmlFive className='about__icon'/>
                   <h5>HTML</h5>
                   
                </article>

                <article className='about__card'>
                  <SiCss3 className='about__icon'/>
                   <h5>CSS</h5>
                   
                </article>

                <article className='about__card'>
                  <DiJavascript className='about__icon'/>
                   <h5>JAVASCRIPT</h5>
                   
                </article>
                <article className='about__card'>
                  <FaReact className='about__icon'/>
                   <h5>REACT</h5>
                   
                </article>
                <article className='about__card'>
                  <SiBootstrap className='about__icon'/>
                   <h5>BOOTSTRAP</h5>
                   
                </article>
                <article className='about__card'>
                  <SiMaterialui className='about__icon'/>
                   <h5>MATERIAL-UI</h5>
                   
                </article>
                
                
            </div>
           

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus rerum dicta eaque consequatur reprehenderit suscipit, laboriosam omnis repudiandae fuga maiores necessitatibus cumque deleniti tenetur hic magni sit optio blanditiis.
            </p>
            <a href="#contact" className='btn btn-primary'>Contact</a>
      </div>
    </div>

    </section>
  )
}

export default About