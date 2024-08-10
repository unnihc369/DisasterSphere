// ContactUs.js
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './ContactUs.css';

const ContactUs = () => {
    const notify = () => toast.error('Email not Registered.');
    return (
        <div className="contact-container">
            <Toaster />
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, please get in touch with us.</p>
            </div>
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" onClick={()=>notify()} className="submit-button">Send Message</button>
                </form>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 1234 Street Name, City, State, Zip</p>
                    <div className="map">
                        {/* You can embed a Google map here */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092887!2d144.953736315686!3d-37.81627974202159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b70f1f540ec6!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1610073891162!5m2!1sen!2sau"
                            width="100%"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUs;
