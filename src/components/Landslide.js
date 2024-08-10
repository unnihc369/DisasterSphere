import React from 'react';
import './common.css';

const Landslide = () => {
    return (
        <div className="disaster-container">
            {/* Header Section */}
            <header className="disaster-header">
                <h1>Landslide</h1>
            </header>

            {/* What is a Landslide Section */}
            <section className="disaster-section">
                <div className="disaster-image">
                    <img src="landslide-image-url.jpg" alt="Landslide" />
                </div>
                <div className="disaster-content">
                    <h2>What is a Landslide?</h2>
                    <p>
                        A landslide is the movement of rock, earth, or debris down a slope due to gravity. Landslides can occur suddenly or gradually and are often triggered by various factors such as heavy rainfall, earthquakes, volcanic eruptions, or human activities. The movement can range from small rockfalls to large-scale avalanches that can cause significant damage to property and infrastructure.
                        <br /><br />
                        Landslides can be classified into several types based on their movement and the materials involved. These include rockfalls, landslides, debris flows, mudflows, and slumps. Rockfalls are sudden and rapid falls of rock from a cliff or steep slope, while landslides involve the sliding of soil or rock masses. Debris flows are fast-moving mixtures of water, soil, and debris, and mudflows are similar but consist primarily of fine particles. Slumps involve the sliding of a cohesive mass along a curved surface.
                        <br /><br />
                        The causes of landslides can be natural or anthropogenic. Natural causes include heavy rainfall that saturates the soil, leading to increased weight and decreased stability of the slope. Earthquakes can also trigger landslides by shaking the ground and causing the collapse of unstable slopes. Volcanic eruptions can produce landslides due to the accumulation of volcanic debris and the explosive forces involved. Human activities such as construction, deforestation, and mining can destabilize slopes and increase the risk of landslides.
                        <br /><br />
                        Landslides can have severe consequences, including the destruction of homes, infrastructure, and natural landscapes. They can block roads and rivers, leading to flooding and isolation of communities. Landslides can also cause casualties and injuries, making them a significant hazard in many parts of the world, especially in mountainous and hilly regions.
                        <br /><br />
                        Effective landslide risk management involves monitoring and early warning systems, proper land use planning, and engineering solutions to stabilize slopes. Community education and preparedness are also critical to reducing the impact of landslides. Understanding the warning signs and taking appropriate actions can help mitigate the risks associated with landslides and protect lives and property.
                    </p>
                </div>
            </section>

            {/* Signs of a Landslide Section */}
            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>Signs of a Landslide</h2>
                    <ul>
                        <li>Cracks or fissures in the ground or on building foundations</li>
                        <li>Unusual bulging or tilting of trees or utility poles</li>
                        <li>Increased water flow or erosion in streams and rivers</li>
                        <li>Leaning or sagging fences or retaining walls</li>
                        <li>Sudden appearance of large amounts of debris or mud</li>
                        <li>Rumbling or other unusual sounds from the ground</li>
                        <li>Changes in groundwater flow or water levels in wells</li>
                        <li>Increased sediment or soil in local waterways</li>
                        <li>New or worsening landslide scars or deposits</li>
                        <li>Frequent small landslides or rockfalls in the area</li>
                    </ul>
                </div>
            </section>

            {/* How to Act During a Landslide Section */}
            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>How to Act During a Landslide</h2>
                    <p>
                        Landslides can be sudden and unpredictable, making it essential to know how to respond during such events to ensure safety and minimize damage. Here's what you should do during a landslide:
                        <br /><br />
                        If you are in an area prone to landslides, be aware of the warning signs and monitor local news and weather updates for potential landslide warnings. If you notice any signs of a landslide, such as ground cracks or shifting land, evacuate the area immediately. Move to higher ground if possible and stay away from steep slopes, cliffs, and riverbanks.
                        <br /><br />
                        During a landslide, protect yourself from falling debris by covering your head and neck with your arms or a sturdy object. Seek shelter in a stable, protected area such as a sturdy building or a designated safe zone. Avoid using elevators, as they may become stuck or malfunction during a landslide.
                        <br /><br />
                        If you are trapped in a landslide, stay calm and try to signal for help using a whistle or by shouting. If you are caught in debris, protect your mouth and nose to prevent suffocation and try to create an air pocket around you. Wait for rescuers to reach you, and avoid making sudden movements that could cause further instability.
                        <br /><br />
                        After a landslide, avoid entering damaged areas until they have been inspected and deemed safe by authorities. Be cautious of further landslide risks and check for potential hazards such as gas leaks or electrical problems. Follow official instructions for evacuation and recovery, and assist in rescue and relief efforts if possible.
                        <br /><br />
                        Community preparedness is key to reducing the impact of landslides. Participate in local drills and education programs to stay informed about landslide risks and safety measures. Encourage neighbors and community members to be aware of landslide hazards and to have emergency plans in place.
                    </p>
                    <h3>Advisory Steps:</h3>
                    <ul className="advisory-steps">
                        <li>Monitor weather updates and landslide warnings.</li>
                        <li>Evacuate immediately if signs of a landslide are detected.</li>
                        <li>Move to higher ground away from slopes and riverbanks.</li>
                        <li>Seek shelter in a stable, protected area.</li>
                        <li>Protect your head and neck from falling debris.</li>
                        <li>Do not use elevators during a landslide.</li>
                        <li>Signal for help if trapped and protect your mouth and nose.</li>
                        <li>Wait for rescuers and follow official instructions.</li>
                        <li>Avoid entering damaged areas until deemed safe.</li>
                        <li>Participate in community preparedness programs and drills.</li>
                    </ul>
                </div>
            </section>

            {/* Government Helplines Section */}
            <section className="helpline-info">
                <h3>Government Helplines</h3>
                <p>India Disaster Management Helpline: 1078</p>
                <p>National Disaster Response Force (NDRF): 011-24363260</p>
                <p>State Disaster Management Authority (Contact for specific state numbers)</p>
            </section>
        </div>
    );
};

export default Landslide;
