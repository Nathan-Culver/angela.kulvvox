import React, { useState } from 'react';
import './IntroCard.css';

export default function IntroCard(props) {

    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [phone, setPhone] = useState('') 
    const [message, setMessage] = useState('') 

    const handleNameOnChange = e => {
        setName(e.target.value)
    }

    const handleEmailOnChange = e => {
        setEmail(e.target.value)
    }

    const handlePhoneOnChange = e => {
        setPhone(e.target.value)
    }
    
    const handleMessageOnChange = e => {
        setMessage(e.target.value)
    }

    return (  
        <>
        {props.contact === false ?
                <section className="container" id="intro-card-container" >
                    <div className="container" id="profile-intro-card-container" >
                        <div className="title" id="profile-intro-title" >Nice to Meet You</div>
                        <p className="text" id="profile-intro" >
                        Angela Foley is a UI/UX Designer who has experience working with several small companies in research and design as well as the testing of products to further the individual goals of the companies.  Angela knows the impact that user focused product design can have on a company. She believes that by working with companies to stay focused on user centered designs she can help companies accelerate and optimize their products and limit the consumption of resources. Angela has worked with small game development companies as well as for companies focused on mobile application development. Most recently with Home Heroes on their first time buyer mobile application to support consumers in purchasing their first home. 
Angela has two Bachelors of Arts degrees, one in English Literature and another in American Sign Language Studies and has an extensive background in research as well as working with minority groups to develop programs in order to bridge the gap of understanding. She also trained in the Springboard online UI/UX Design program to launch her into the field of program development and design.
                        </p>
                        <button className="btn" id="intro-read-more-btn" >Read More</button>
                    </div>
                </section>
            :
            <section className="container" id="contact-container" >
                <form className="container" id="contact-form-container" >
                    <div className="input-container" id="name-container" >
                        <label className="form-label" id="form-label-name" >Name</label>
                        <input
                            className='input'
                            id='name-input'
                            type='text'
                            name={name}
                            onChange={ handleNameOnChange }
                        />
                    </div>
                    <div className="input-container" id="email-container" >
                        <label className="form-label" id="form-label-email" >Email</label>
                        <input
                            className='input'
                            id='email-input'
                            type='text'
                            name={email}
                            onChange={ handleEmailOnChange }
                        />
                    </div>
                    <div className="input-container" id="phone-container" >
                        <label className="form-label" id="form-label-phone" >Phone</label>
                        <input
                            className='input'
                            id='phone-input'
                            type='text'
                            name={phone}
                            onChange={ handlePhoneOnChange }
                        />
                    </div>
                    <div className="input-container" id="message-button-container" >
                        <label className="form-label" id="form-label-message" >Message</label>
                        <textarea 
                            className="textarea" 
                            id="message-textarea" 
                            name={message}
                            rows="4" 
                            cols="50"
                            onChange={ handleMessageOnChange }
                        ></textarea>
                        <button className='btn' id='submit-btn' type='submit' onClick={ props.handleContactOnSubmit }>
                            Contact Me
                        </button>
                    </div>
                </form>
            </section>
            }
            </>
    );
  }