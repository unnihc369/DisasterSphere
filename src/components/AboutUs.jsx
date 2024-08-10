import React from 'react';
import './AboutUs.css';
import FAQ from './FAQ';

const AboutUs = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>DisasterSphere</h1>
                <p>Enhancing disaster preparedness with real-time alerts, community support, and educational resources.</p>
            </header>
            <section className="about-section">
                <div className="about-image">
                    <img src="https://img.freepik.com/free-vector/modern-emergency-word-concept-with-flat-design_23-2147939594.jpg?t=st=1723310139~exp=1723313739~hmac=65ad86396563954a21f8d886c041b369bdf5457090b2f7db8bb5806ba645d67a&w=826" alt="Our Mission" className='img'/>
                </div>
                <div className="about-content">
                    <h2>Our Mission</h2>
                    <p>DisasterSphere aims to provide a reliable platform for disaster preparedness. Our goal is to ensure that communities have access to real-time information, effective communication tools, and educational resources to stay safe and respond efficiently during emergencies.</p>
                </div>
            </section>
            <section className="about-section reverse">
                <div className="about-image">
                    <img src="https://img.freepik.com/free-photo/landscape-extreme-typhoon-damages_23-2150880029.jpg?t=st=1723309973~exp=1723313573~hmac=6e51f9d8ce7557ebb36d0a2b91ff1ecabc8197f992d47ff8c9b472ef6cc6d6f6&w=1380" alt="How We Help" className='img' />
                </div>
                <div className="about-content">
                    <h2>How We Help</h2>
                    <p>Our platform offers real-time disaster alerts, a virtual volunteer network, community-based reporting, and interactive educational modules. These features are designed to provide immediate support, foster community collaboration, and enhance overall disaster response effectiveness.</p>
                </div>
            </section>
            <section className="about-section">
                <div className="about-image">
                    <img src="https://www.exhibit.tech/wp-content/uploads/2024/06/Emergency-Kit-720x360.webp" alt="Our Approach" className='img' />
                </div>
                <div className="about-content">
                    <h2>Our Approach</h2>
                    <p>We focus on simplicity and accessibility. DisasterSphere integrates easy-to-use tools and real-time data to ensure that users can quickly access critical information and resources. Our platform is designed to be intuitive and user-friendly, making disaster preparedness and response straightforward and effective.</p>
                </div>
            </section>
            <section className="about-section reverse">
                <div className="about-image">
                    <img src="https://img.freepik.com/free-photo/close-up-volunteer-teamwork-join-hands-environment-conservation-volunteering-world-environment-day_640221-254.jpg?t=st=1723309880~exp=1723313480~hmac=6cd5691dee5511be5ea76646c0053b3beabd12527477fec73ea9ca023895b58a&w=1380" alt="Get Involved" className='img' />
                </div>
                <div className="about-content">
                    <h2>Get Involved</h2>
                    <p>Join the DisasterSphere community to stay informed, volunteer, or support our mission. Together, we can make a difference by improving disaster readiness and response in our communities.</p>
                </div>
            </section>
            <FAQ/>
        </div>
    );
};

export default AboutUs;