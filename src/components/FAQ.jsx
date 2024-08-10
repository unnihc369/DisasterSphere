import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "How does DisasterSphere work?",
            answer: "DisasterSphere integrates real-time disaster alerts, volunteer networks, community reporting, and educational modules to enhance disaster preparedness and response."
        },
        {
            question: "How can I use the DisasterSphere app?",
            answer: "Simply sign up on our platform, explore available features, and access tools for disaster alerts, volunteering, reporting, and more based on your needs."
        },
        {
            question: "How can I volunteer through DisasterSphere?",
            answer: "Sign up as a volunteer on our platform, join our virtual volunteer network, and select tasks or projects you’d like to participate in."
        },
        {
            question: "How can I donate to disaster relief efforts?",
            answer: "Visit our donation page where you can contribute to various disaster relief efforts and support affected communities."
        },
        {
            question: "How do I report a disaster or raise an alert?",
            answer: "Use our community-based reporting system to submit disaster reports and alerts. Provide detailed information to help us coordinate a response."
        },
        {
            question: "How can I get help from DisasterSphere?",
            answer: "Access our emergency communication hub for immediate assistance or connect with local volunteers and support networks through our platform."
        },
        {
            question: "How can I reach out during a disaster?",
            answer: "Use our app to communicate with emergency services, volunteers, and community members. Stay updated with real-time alerts and instructions."
        },
        {
            question: "How do I know about weather details and disaster alerts?",
            answer: "Check the weather section on our platform for live weather updates and disaster alerts to stay informed about ongoing and potential disasters."
        },
        {
            question: "Where can I find a list of alerted disaster areas?",
            answer: "Visit our disaster alerts page to view a list of areas currently affected by disasters and receive real-time updates on the situation."
        },
        {
            question: "How can I help people affected by disasters?",
            answer: "You can donate, volunteer, or participate in relief efforts organized through our platform to provide support and aid to those in need."
        },
        {
            question: "How can I learn about disaster preparedness?",
            answer: "Explore our educational modules and interactive learning sections to gain knowledge and skills related to disaster preparedness and response."
        },
        {
            question: "Where can I find state-wise disaster links?",
            answer: "Our platform provides links and resources for each state, offering information on state-specific disaster preparedness and response guidelines."
        },
        {
            question: "What should I do if I need immediate help?",
            answer: "Contact our emergency communication hub through the app, which connects you with local support services and emergency responders."
        }
    ];

    return (
        <div className="faq-container">
            <h1 className="faq-header">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq - item ${selectedQuestion === index ? 'active' : ''}`}
                onClick={() => toggleQuestion(index)}
                    >
                <div className="faq-question">
                    {item.question}
                    <span className="faq-icon">{selectedQuestion === index ? '-' : '+'}</span>
                </div>
                {selectedQuestion === index && <div className="faq-answer">{item.answer}</div>}
            </div>
                ))}
        </div>
        </div >
    );
};

export default FAQ;