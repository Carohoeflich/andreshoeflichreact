import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Mailer = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ev5mv89', 'template_0tayvop', form.current, 'jMsSSIVpgnMNgpDjV')
        .then((result) => {
            console.log(result.text);
            Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ""));
            Array.from(document.querySelectorAll('textarea')).forEach(textarea => (textarea.value = ""));
            this.setState({form: [{}]});

            alert("Your message was sent!");

        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div class="contact-forms">
    <div class="wrapper">
      <h2>MESSAGE ME</h2>
      <form ref={form} onSubmit={sendEmail} action="" method="POST">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Write your name" required minlength="3"
            maxlength="40" />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" name="user_email" id="email" placeholder="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="5" placeholder="Type your message"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="submit">Send <i class="far fa-envelope"></i></button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Mailer