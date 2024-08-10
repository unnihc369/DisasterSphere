import React from 'react';
import './common.css';

const Wildfire = () => {
    return (
        <div className="disaster-container">
            <header className="disaster-header">
                <h1>Wildfire</h1>
            </header>

            <section className="disaster-section">
                <div className="disaster-image">
                    <img src="wildfire-image-url.jpg" alt="Wildfire" />
                </div>
                <div className="disaster-content">
                    <h2>What is a Wildfire?</h2>
                    <p>
                        A wildfire, also known as an uncontrolled fire, is an uncontrolled blaze that spreads rapidly through vegetation such as forests, grasslands, and shrublands. These fires can occur naturally due to lightning strikes or volcanic eruptions, but they are often ignited by human activities such as campfires, discarded cigarettes, and arson.
                        <br /><br />
                        Wildfires are characterized by their ability to spread quickly and unpredictably, fueled by dry conditions, high winds, and flammable vegetation. The intensity of a wildfire can vary, ranging from small, manageable fires to large, devastating infernos that can consume vast areas of land and cause significant damage to property, wildlife, and natural resources.
                        <br /><br />
                        The impact of wildfires can be severe, including loss of homes and infrastructure, destruction of habitats, and air quality deterioration due to smoke and particulate matter. Effective wildfire management involves prevention strategies, early detection, and coordinated response efforts to control and extinguish the fire before it causes extensive damage.
                    </p>
                </div>
            </section>

            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>Signs of a Wildfire</h2>
                    <ul>
                        <li>Smoke or haze in the air, even if no visible flames are present</li>
                        <li>Unusual heat or warmth in the area</li>
                        <li>Smell of burning or smoke</li>
                        <li>Visible flames or glowing embers in the distance</li>
                        <li>Increased presence of emergency vehicles or fire crews</li>
                        <li>Signs of burning vegetation or charred landscapes</li>
                        <li>Sudden change in wind patterns or gusts</li>
                        <li>Dense smoke obstructing visibility</li>
                        <li>Rapidly changing weather conditions, such as high winds or temperature increases</li>
                        <li>Reports of fire from local authorities or news sources</li>
                    </ul>
                </div>
            </section>

            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>How to Act During a Wildfire</h2>
                    <p>
                        If you are in an area threatened by a wildfire, it is crucial to take immediate action to protect yourself and your property. Here are key steps to follow:
                        <br /><br />
                        If you are in the vicinity of a wildfire, evacuate the area immediately if instructed by authorities or if you notice signs of the fire approaching. Use a mask or cloth to cover your nose and mouth to avoid inhaling smoke and particulate matter. Move to a designated evacuation center or a safe location away from the fire.
                        <br /><br />
                        If evacuation is not possible, shelter in a fire-resistant structure, close all windows and doors to prevent smoke from entering, and stay indoors with the air conditioning turned off. Stay tuned to local news and emergency alerts for updates on the fire's progress and evacuation instructions.
                        <br /><br />
                        Prepare an emergency kit with essential supplies, including food, water, medications, and important documents. If you are driving, avoid using the vehicle if visibility is compromised by smoke and follow official routes and instructions.
                        <br /><br />
                        After the wildfire has passed, be cautious of potential hazards such as smoldering embers and weakened structures. Follow safety guidelines provided by authorities and assist with recovery efforts if it is safe to do so.
                        <br /><br />
                        Community preparedness and prevention efforts are essential for managing wildfire risks. Participate in fire safety education programs, create a defensible space around your property, and adhere to local regulations and fire bans to reduce the likelihood of wildfires.
                    </p>
                    <h3>Advisory Steps:</h3>
                    <ul className="advisory-steps">
                        <li>Evacuate immediately if instructed or if the fire is approaching.</li>
                        <li>Cover your nose and mouth to avoid inhaling smoke.</li>
                        <li>Shelter in a fire-resistant structure if evacuation is not possible.</li>
                        <li>Close all windows and doors to prevent smoke from entering.</li>
                        <li>Stay informed through local news and emergency alerts.</li>
                        <li>Prepare an emergency kit with essential supplies.</li>
                        <li>Avoid driving if visibility is compromised by smoke.</li>
                        <li>Follow official evacuation routes and instructions.</li>
                        <li>Be cautious of smoldering embers and weakened structures.</li>
                        <li>Assist with recovery efforts if it is safe to do so.</li>
                        <li>Participate in fire safety education programs and create a defensible space.</li>
                        <li>Adhere to local regulations and fire bans to reduce wildfire risks.</li>
                    </ul>
                </div>
            </section>

            <section className="helpline-info">
                <h3>Government Helplines</h3>
                <p>India Disaster Management Helpline: 1078</p>
                <p>National Disaster Response Force (NDRF): 011-24363260</p>
                <p>State Disaster Management Authority (Contact for specific state numbers)</p>
            </section>
        </div>
    );
};

export default Wildfire;