import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Enhancing disaster preparedness with real-time</p><p> alerts, community support, and educational</p><p> resources.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: disastersphere@email.com</p>
                    <p>Phone: +91 80808 08080</p>
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
                <p>&copy; {new Date().getFullYear()} DisasterSphere. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
