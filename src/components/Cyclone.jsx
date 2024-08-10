import React from 'react';
import './common.css';

const Cyclone = () => {
    return (
        <div className="disaster-container">
            <header className="disaster-header">
                <h1>Cyclone</h1>
            </header>

            <section className="disaster-section">
                <div className="disaster-image">
                    <img src="cyclone-image-url.jpg" alt="Cyclone" />
                </div>
                <div className="disaster-content">
                    <h2>What is a Cyclone?</h2>
                    <p>
                        A cyclone is a large scale air mass that rotates around a strong center of low atmospheric pressure. Cyclones are characterized by inward spiraling winds that rotate counterclockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere. Depending on their location and strength, cyclones are referred to by different names such as hurricanes, typhoons, or simply cyclones. The strongest tropical cyclones are known as hurricanes or typhoons in different parts of the world, whereas weaker systems are called tropical storms, depressions, or simply cyclones.
                        <br /><br />
                        Cyclones are caused by atmospheric disturbances around a low-pressure area distinguished by swift and often destructive air circulation. The low-pressure systems, also known as depressions, form over warm sea waters and can produce violent winds, high waves, torrential rain, and flooding, making them highly dangerous natural events.
                        <br /><br />
                        Cyclones form in regions near the equator where the water temperature is above 26.5°C, and they derive their energy from the warm surface waters of the ocean. The most significant threat from cyclones is the storm surge—a rising of the sea as a result of atmospheric pressure changes and wind associated with a storm—which can lead to severe flooding and destruction in coastal areas.
                        <br /><br />
                        The impact of a cyclone depends on several factors, including its intensity, size, location, speed, and the level of preparedness of the affected area. While the direct impact of cyclones includes strong winds, heavy rainfall, and storm surges, they can also trigger secondary hazards such as landslides, tornadoes, and widespread infrastructure damage. The damage caused by cyclones can be extensive, affecting housing, agriculture, transportation networks, and utilities, and leading to long-term economic and social disruption.
                        <br /><br />
                        Cyclone risk management involves preparing for, responding to, and recovering from the impacts of cyclones. This includes the development and enforcement of building codes, the establishment of early warning systems, the implementation of evacuation plans, and public education on cyclone preparedness. Additionally, it involves post-cyclone recovery efforts, which may include rebuilding infrastructure, providing humanitarian assistance, and restoring services and livelihoods.
                        <br /><br />
                        Climate change is expected to influence the behavior and impact of cyclones. Research suggests that while the overall number of cyclones may not increase, the intensity of the storms could become more severe, leading to more powerful and destructive cyclones in the future. Therefore, continuous improvements in cyclone prediction, preparedness, and resilience are essential to reducing the risks associated with these powerful natural events.
                    </p>
                </div>
            </section>

            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>Signs of a Cyclone</h2>
                    <ul>
                        <li>Rapidly falling barometric pressure</li>
                        <li>Increasingly strong winds</li>
                        <li>Darkening skies with large, towering clouds</li>
                        <li>Sudden onset of heavy rain</li>
                        <li>Large waves and high tides along coastal areas</li>
                        <li>Formation of a calm "eye" in the storm's center</li>
                        <li>Frequent lightning and thunder</li>
                        <li>Unusual bird and animal behavior</li>
                        <li>Official cyclone warnings from meteorological agencies</li>
                        <li>Noticeable drop in temperature and humidity</li>
                    </ul>
                </div>
            </section>

            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>How to Act During a Cyclone</h2>
                    <p>
                        Cyclones are among the most dangerous weather phenomena, capable of causing widespread destruction. Knowing how to respond during a cyclone can save lives and reduce property damage. Here's what you need to know to stay safe during a cyclone.
                        <br /><br />
                        Before a cyclone, it is crucial to stay informed by monitoring weather updates and cyclone warnings from trusted sources. Prepare an emergency kit with essentials like food, water, medications, and important documents. Secure your home by boarding up windows, reinforcing doors, and removing outdoor objects that could become projectiles in high winds.
                        <br /><br />
                        If a cyclone warning is issued, evacuate immediately if advised by authorities, especially if you live in low-lying coastal areas prone to storm surges. Move to a sturdy building on higher ground if possible. Avoid driving during the cyclone, as roads may be flooded or obstructed by debris.
                        <br /><br />
                        During the cyclone, stay indoors in the strongest part of the building, such as a bathroom or cellar. Keep away from windows and glass doors. If the eye of the cyclone passes over, there will be a temporary lull in the storm, but winds will pick up again from the opposite direction, so stay indoors until the cyclone has passed.
                        <br /><br />
                        After the cyclone, avoid going outside until authorities declare it safe. Beware of downed power lines, fallen trees, and debris. Do not drink tap water until it has been declared safe, as water supplies may be contaminated. If your home has been damaged, evacuate to a safe location and avoid re-entering until it has been inspected.
                        <br /><br />
                        Community preparedness and awareness are key to minimizing the impact of cyclones. Ensure that you and your family know the local emergency plans and evacuation routes. Participate in community drills and education programs to stay informed and prepared for cyclone risks.
                    </p>
                    <h3>Advisory Steps:</h3>
                    <ul className="advisory-steps">
                        <li>Monitor weather updates and cyclone warnings.</li>
                        <li>Prepare an emergency kit with essentials.</li>
                        <li>Secure your home by boarding up windows.</li>
                        <li>Evacuate immediately if advised by authorities.</li>
                        <li>Stay indoors in the strongest part of the building.</li>
                        <li>Keep away from windows and glass doors.</li>
                        <li>Avoid driving during the cyclone.</li>
                        <li>Wait for official all-clear before going outside.</li>
                        <li>Beware of downed power lines and debris.</li>
                        <li>Avoid drinking tap water until declared safe.</li>
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

export default Cyclone;