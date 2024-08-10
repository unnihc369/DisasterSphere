import React from 'react';
import { Link } from 'react-router-dom';
import './DisasterView.css';

const disasters = [
    {
        name: 'Earthquake',
        image: 'path/to/earthquake-image.jpg', // Replace with the actual image path
        link: '/earthquake',
    },
    {
        name: 'Flood',
        image: 'path/to/flood-image.jpg', // Replace with the actual image path
        link: '/flood',
    },
    {
        name: 'Cyclone',
        image: 'path/to/cyclone-image.jpg', // Replace with the actual image path
        link: '/cyclone',
    },
    {
        name: 'Wildfire',
        image: 'path/to/wildfire-image.jpg', // Replace with the actual image path
        link: '/wildfire',
    },
    {
        name: 'Tsunami',
        image: 'path/to/tsunami-image.jpg', // Replace with the actual image path
        link: '/tsunami',
    },
    {
        name: 'Landslide',
        image: 'path/to/landslide-image.jpg', // Replace with the actual image path
        link: '/landslide',
    },
];

const DisasterView = () => {
    return (
        <div className="disaster-view-container">
            <header className="disaster-view-header">
                <h1>Disaster Information Center</h1>
                <p>Navigate to detailed information about various types of disasters.</p>
            </header>
            <section className="disaster-view-content">
                <div className="disaster-list">
                    {disasters.map((disaster, index) => (
                        <div key={index} className="disaster-card">
                            <img src={disaster.image} alt={disaster.name} className="disaster-image" />
                            <h2 className="disaster-name">{disaster.name}</h2>
                            <Link to={disaster.link} className="view-more-button">
                                View More
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DisasterView;
