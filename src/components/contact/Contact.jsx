import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
<section id='contact'>
      <h5>charlemos</h5>
      <h2>Contacto</h2>
    <div className="container contact__container">
      <div className="contact__options">
       <article className="contact__option">
        <MdOutlineMailOutline className='contact__option-icon'/>
        <h4 >Email</h4>
        <h5>cristianlopezcastillo99@gmail.com</h5>
        <a href="mailto:cristianlopezcastillo99@gmail.com" target="_blank">Envia un mensaje</a>
       </article>

       <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
        <h4 >Messenger</h4>
        <h5>Cristian Lopez</h5>
        <a href="https://m.me/cristian.alexis.144" target="_blank">Envia un mensaje</a>
       </article>

       <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4 >Whatsapp</h4>
        <h5>+54(3572)44056</h5>
        <a href="https://wa.me/543572440456">Envia un mensaje</a>
       </article>
      </div>
 {/*----------------------------Fin del contact options*--------------------------*/}
 <form action="">
  <input type="text" name='name' placeholder='Tu nombre' required />
  <input type="email" name='email' placeholder='Email' required />
  <textarea name="message"  rows="7" placeholder='Mensaje' required></textarea>
  <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
 </form>
    </div>
</section>
  )
}

export default Contact