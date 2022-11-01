import React from 'react'
import './experience.css'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Habilidades adquiridas</h5>
      <h2>Mis Habilidades</h2>
      <div className="container experience__container">
            <div className="experience__frontend">
               <h3>Frontend Developer</h3>
                  <div className="experience__content">
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>HTML</h4>
                            <small className='text-light'>Intermedio</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>CSS</h4>
                            <small className='text-light'>Intermedio</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>JavaScript</h4>
                            <small className='text-light'>Intermedio</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>Boostrap</h4>
                            <small className='text-light'>Intermedio</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>React</h4>
                            <small className='text-light'>Intermedio</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>Responsive Designe</h4>
                            <small className='text-light'>Avanzado</small>
                          </div>
                     </article>
                  </div>
             </div>
             {/*--------------------------------Fin del frontend-----------------------------------------------*/}
        <div className="experience__backend">
        <h3>Frontend Developer</h3>
                  <div className="experience__content">
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>Ingles</h4>
                            <small className='text-light'>Intermedio</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                          <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>Excel</h4>
                            <small className='text-light'>Intermedio</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                          </div>
                     </article>
                     <article className='experience__details' >
                     <IoMdCheckmarkCircleOutline className='experience__details-icons'/>
                          <div>
                             <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                          </div>
                     </article>
                  </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience