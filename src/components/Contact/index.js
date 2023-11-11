import React from 'react';

function Contact() {
  return (
    <div className='Contact'>

      <div className='contactGreeter'>Contact Us</div>

      <div className='contactMain'>

        <div className= 'contactBackdrop'>
          <div className='contactImage'>
            <img src={'assets/standingJustina.png'} id='stndJustina' width='40%' alt='Contact Image'/>
          </div>
        </div>  

        <div className='contactBoxes'>
          <label>Email</label>

            <input className='textBackdrop' type="text" id="email"/>

          <label>Message</label>

            <input className='textBackdrop' type="text" id="mail"/>

          <button onclick="myFunction()">Send</button> 
        </div>

      </div>

    </div>
  )
}

function myFunction() {
  alert("Sent!");
}

export default Contact;