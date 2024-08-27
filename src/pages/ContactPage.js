import React from 'react';
import Hero from '../components/Hero';
import backImage from '../assets/image/Contact-hero.png';
import useTitle from '../useTitle';


const ContactPage = () => {
  useTitle('Contattaci')
  return (
    <>
    <Hero img={backImage} disableOverlay>
      <div className='contact-hero container'>
        <div className='contact-hero-text'>
          <div className='contact-hero-title'>
            <h2 className='contact-title'>
              Vorresti aggiungere un cocktail?
            </h2>
            <h4 className='contact-subtitle'>
              Il nostro super team è sempre disponibile per valutare nuove ricette ed aggiungerle al nostro database
            </h4>
          </div>
        </div>
        <div className='contact-form-container container'>
          <form 
          action=""
          method="POST"
          className='contact-form container'>
            <div className='form-group'>
              <label htmlfor='nome'>Nome</label>
              <input type="text" id='nome' name='name' className='input' placeholder='Giorgio' />
            </div>
            <hr/>
            <div className='form-group'>
              <label htmlfor='cognome'>Cognome</label>
              <input type="text" id='cognome' name='cognome' className='input' placeholder='Struzzi' />
            </div>
            <hr/>
            <div className='form-group'>
              <label htmlfor='email'>Email</label>
              <input type="text" id='email' name='email' className='input' placeholder='giorgiostr@mail.com' />
            </div>
            <hr/>
            <div className='form-group'>
              <label htmlfor='telefono'>Telefono</label>
              <input type="text" id='telefono' name='telefono' className='input' placeholder='3288888888' />
            </div>
            <hr/>
            <div className='form-group'>
              <label htmlfor='ricetta'>La tua ricetta</label>
              <textarea type="text" id='ricetta' name='ricetta' className='input' placeholder='inserisci la tua ricetta' />
            </div>
            <button type='submit' className='btn btn-primary'>Invia ricetta</button>
          </form>
        </div>
      </div>
    </Hero>
    </>
  )
}

export default ContactPage