import React from 'react';
import { Link } from 'react-router-dom';
import './DisasterView.css';

const disasters = [
    {
        name: 'Earthquake',
        image: 'https://www.hindustantimes.com/ht-img/img/2023/02/08/1600x900/turkey_syria_earthquake_1675827422716_1675827423020_1675827423020.JPG',
        link: '/earthquake',
    },
    {
        name: 'Flood',
        image: 'https://img.freepik.com/free-photo/natural-disaster-concept-with-flood_23-2150385391.jpg?t=st=1723339917~exp=1723343517~hmac=498e7ebd8949c023f89af6634706da66027541c8f225f4738cad0f15f0d80556&w=1060',
        link: '/flood',
    },
    {
        name: 'Cyclone',
        image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ia4lQ3m4Wu58/v1/-1x-1.jpg',
        link: '/cyclone',
    },
    {
        name: 'Wildfire',
        image: 'https://th.bing.com/th/id/OIP.ws5F4IRqkWPmfJ_C-3BKVQHaE7?w=2200&h=1464&rs=1&pid=ImgDetMain',
        link: '/wildfire',
    },
    {
        name: 'Tsunami',
        image: 'https://img.freepik.com/free-photo/natural-disaster-concept-with-flood_23-2150385378.jpg?t=st=1723339833~exp=1723343433~hmac=88b4319ad964314b099324b02a6b31faf043b0d66ea7e0b3cd863dceb5df6151&w=1060',
        link: '/tsunami',
    },
    {
        name: 'Landslide',
        image: 'https://video.cgtn.com/news/2022-12-16/Dozens-feared-trapped-in-western-Malaysia-landslide-1fNKyoCevW8/video/7ca33f538bb44630b83ab469975ac2ee/7ca33f538bb44630b83ab469975ac2ee.jpg',
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
