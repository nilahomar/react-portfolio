import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin } from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { useState } from "react";

const API_KEY=process.env.REACT_APP_API_KEY

const Contact = () => {
//success message
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('')

 
  //form email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_eqo9ogi', 'template_5nnmvts', form.current, API_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
      setSubmitted(true);
  };

  const onChange = (e)=>{
    e.preventDefault()
    setName(e.target.value)
  }

  const submitButton = () =>{
    if(name.length === 0){
      setSubmitted(false)
    }else{
      setSubmitted(true)
    }
  }
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <a href="mailto:nilahomar@gmail.com" target="_blank" rel="noreferrer"> <MdEmail className='contact_option_icon' /> </a>
            <h4>Email</h4>
            <h5>nilahomar@gmail.com</h5>
            <a href="mailto:nilahomar@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <a href="https://www.linkedin.com/in/nilahomar/" target="_blank" rel="noreferrer"> <SiLinkedin className='contact_option_icon' />  </a>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/nilahomar/" target="_blank" rel="noreferrer">Connect with me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' onChange={onChange} onClick={() => setSubmitted(false)}/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'onClick={submitButton}>Send Message</button>
          {submitted && <div className='success-message'>
            <p>Hey, {name.toLocaleUpperCase()}. Thanks for your message <span role="img" aria-label="smile">😊</span></p>
            </div>}
        </form>
      </div>
    </section>
  )
}

export default Contact