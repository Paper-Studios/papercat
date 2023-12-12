import React from 'react';
import Button from '../Shared/Button.jsx';

function Contact() {
  return (
    <div className='Contact'>

      
      <div className='contactMain'>

        <div className= 'contactBackdrop'>
          <div className='contactImage'>
            <img src={'assets/ContactUs.png'} id='stndJustina' width='40%' alt='Contact Image'/>
          </div>
        </div>  

        <div className='contactBoxes'>
          
          <div className='contactInputs'>
            <label>Name</label>
              <input className='textBackdrop' type="text" id="name"/>
            <label>Email</label>
              <input className='textBackdrop' type="text" id="email"/>
            <label>Message</label>
              <textarea className='textBackdrop' id="mail" name="mail"></textarea>
          </div>
          
          <Button icon={'send'} text={'Send'} href={'/presskit'} type={'button'}/>
        
        </div>

      </div>

    </div>
  )
}

function myFunction() {
  alert("Sent!");
}

export default Contact;