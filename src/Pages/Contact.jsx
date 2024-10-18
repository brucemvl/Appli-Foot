import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import "../styles/Contact.scss"
import Home from "../Pages/Home.jsx"





function Contact() {

    const form = useRef();
     const sendEmail = (e) => { e.preventDefault(); emailjs.sendForm( "react_contact", "react_contact_11/10", form.current, "5a9QlNXeINK_p0GwQ" ) 
        .then( (result) =>  { alert('Message envoyé avec succes!'); console.log(result.text); },
         (error) => { console.log(error.text); } ); };

    return (
        <div className='blocContact'> 
            <h1>Contact</h1>
            <form className='formulaire' ref={form} onSubmit={sendEmail}>
                <div className='formulaire__background'>
                <div className='formulaire__nom'>
                    <label>Nom</label>
                    <input type='text' placeholder='Nom' name='user_name' />
                </div>
                <div className='formulaire__mail'>
                    <label>Mail</label>
                    <input type='email' placeholder='Adresse e-mail' name='user_email' />
                </div>
                <div className='formulaire__message'>
                    <label>Message</label>
                    <textarea name='message' type='text' placeholder='Message'></textarea>
                </div>
                </div>
                <input type='submit' value='Envoyer' id='input-submit' className='submit' />
            </form>
        </div>);
}
export default Contact;