import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>DisasterSphere</h1>
                <p>Enhancing disaster preparedness with real-time alerts, community support, and educational resources.</p>
            </header>
            <section className="about-section">
                <div className="about-image">
                    <img src="https://via.placeholder.com/500" alt="Our Mission" />
                </div>
                <div className="about-content">
                    <h2>Our Mission</h2>
                    <p>DisasterSphere aims to provide a reliable platform for disaster preparedness. Our goal is to ensure that communities have access to real-time information, effective communication tools, and educational resources to stay safe and respond efficiently during emergencies.</p>
                </div>
            </section>
            <section className="about-section reverse">
                <div className="about-image">
                    <img src="https://via.placeholder.com/500" alt="How We Help" />
                </div>
                <div className="about-content">
                    <h2>How We Help</h2>
                    <p>Our platform offers real-time disaster alerts, a virtual volunteer network, community-based reporting, and interactive educational modules. These features are designed to provide immediate support, foster community collaboration, and enhance overall disaster response effectiveness.</p>
                </div>
            </section>
            <section className="about-section">
                <div className="about-image">
                    <img src="https://via.placeholder.com/500" alt="Our Approach" />
                </div>
                <div className="about-content">
                    <h2>Our Approach</h2>
                    <p>We focus on simplicity and accessibility. DisasterSphere integrates easy-to-use tools and real-time data to ensure that users can quickly access critical information and resources. Our platform is designed to be intuitive and user-friendly, making disaster preparedness and response straightforward and effective.</p>
                </div>
            </section>
            <section className="about-section reverse">
                <div className="about-image">
                    <img src="https://via.placeholder.com/500" alt="Get Involved" />
                </div>
                <div className="about-content">
                    <h2>Get Involved</h2>
                    <p>Join the DisasterSphere community to stay informed, volunteer, or support our mission. Together, we can make a difference by improving disaster readiness and response in our communities.</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;