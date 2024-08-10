import React from 'react';
import { Link } from 'react-router-dom';
import './DisasterView.css';

const DisasterView = () => {
    return (
        <div className="disaster-view-container">
            <header className="disaster-view-header">
                <h1>Disaster Information Center</h1>
                <p>Navigate to detailed information about various types of disasters.</p>
            </header>
            <section className="disaster-view-content">
                <ul className="disaster-list">
                    <li>
                        <Link to="/earthquake" className="disaster-link">
                            Earthquake
                        </Link>
                    </li>
                    <li>
                        <Link to="/flood" className="disaster-link">
                            Flood
                        </Link>
                    </li>
                    <li>
                        <Link to="/cyclone" className="disaster-link">
                            Cyclone
                        </Link>
                    </li>
                    <li>
                        <Link to="/wildfire" className="disaster-link">
                            Wildfire
                        </Link>
                    </li>
                    <li>
                        <Link to="/tsunami" className="disaster-link">
                            Tsunami
                        </Link>
                    </li>
                    <li>
                        <Link to="/landslide" className="disaster-link">
                            Landslide
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default DisasterView;