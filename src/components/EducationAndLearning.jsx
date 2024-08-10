import React from 'react';
import './EducationAndLearning.css';

const EducationAndLearning = () => {
    const disasterTypes = [
        { name: 'Earthquake', link: '/disasters/earthquake' },
        { name: 'Flood', link: '/disasters/flood' },
        { name: 'Cyclone', link: '/disasters/cyclone' },
        { name: 'Wildfire', link: '/disasters/wildfire' },
        { name: 'Tsunami', link: '/disasters/tsunami' },
    ];

    const stateLinks = [
        { state: 'Andhra Pradesh', link: 'http://www.apsdma.ap.gov.in' },
        { state: 'Karnataka', link: 'https://ksdma.karnataka.gov.in' },
        { state: 'Maharashtra', link: 'http://mahadisaster.gov.in' },
        { state: 'Tamil Nadu', link: 'https://tnsdma.tn.gov.in' },
    ];

    const youtubeVideos = [
        { title: 'Disaster Preparedness 101', url: 'https://www.youtube.com/watch?v=abcd1234' },
        { title: 'How to Survive a Natural Disaster', url: 'https://www.youtube.com/watch?v=efgh5678' },
        { title: 'Disaster Management Strategies', url: 'https://www.youtube.com/watch?v=ijkl9012' },
    ];

    return (
        <div className="education-container">
            <section className="intro-section">
                <h1>What is a Disaster?</h1>
                <p>A disaster is a sudden, catastrophic event that disrupts the functioning of a community or society and causes human, material, and economic or environmental losses that exceed the community’s or society’s ability to cope using its own resources. Disasters are often classified according to their cause (natural or man-made) and their impact. Common natural disasters include earthquakes, floods, hurricanes, and tsunamis, while examples of man-made disasters include industrial accidents, terrorist attacks, and nuclear meltdowns.</p>
            </section>

            <section className="preparedness-section">
                <h2>How to Be Prepared for a Disaster?</h2>
                <p>Being prepared for a disaster involves understanding the risks, creating an emergency plan, and assembling a disaster supply kit. Identify the types of disasters that are most likely to occur in your area and learn about the best ways to protect yourself and your family. Establish a communication plan, ensure that everyone knows where to go and what to do in an emergency, and keep your disaster supply kit stocked with essentials like water, food, first-aid supplies, and important documents.</p>
            </section>

            <section className="disaster-types-section">
                <h2>Types of Disasters</h2>
                <ul>
                    {disasterTypes.map((disaster, index) => (
                        <li key={index}>
                            <a href={disaster.link}>{disaster.name}</a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="state-links-section">
                <h2>State-wise Disaster Management Links</h2>
                <ul>
                    {stateLinks.map((stateLink, index) => (
                        <li key={index}>
                            <a href={stateLink.link} target="_blank" rel="noopener noreferrer">{stateLink.state}</a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="image-blocks-section">
                <h2>Preparedness Image Blocks</h2>
                <div className="image-blocks">
                    <div className="image-block">
                        <img src="https://via.placeholder.com/300" alt="Preparedness 1" />
                        <p>Preparedness Tip 1</p>
                    </div>
                    <div className="image-block">
                        <img src="https://via.placeholder.com/300" alt="Preparedness 2" />
                        <p>Preparedness Tip 2</p>
                    </div>
                    <div className="image-block">
                        <img src="https://via.placeholder.com/300" alt="Preparedness 3" />
                        <p>Preparedness Tip 3</p>
                    </div>
                </div>
            </section>

            <section className="youtube-videos-section">
                <h2>Disaster Preparedness Videos</h2>
                <div className="video-blocks">
                    {youtubeVideos.map((video, index) => (
                        <div key={index} className="video-block">
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                <img src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/0.jpg`} alt={video.title} />
                                <p>{video.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EducationAndLearning;