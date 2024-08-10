// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are a team of dedicated professionals committed to providing quality service.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Twitter</a>
                        <a href="#" className="social-icon">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
