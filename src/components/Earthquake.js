import React from 'react';
import './common.css';

const Earthquake = () => {
    return (
        <div className="disaster-container">
            {/* Header Section */}
            <header className="disaster-header">
                <h1>Earthquake</h1>
            </header>

            {/* What is an Earthquake Section */}
            <section className="disaster-section">
                <div className="disaster-image">
                    <img src="earthquake-image-url.jpg" alt="Earthquake" />
                </div>
                <div className="disaster-content">
                    <h2>What is an Earthquake?</h2>
                    <p>
                        An earthquake is the shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere that creates seismic waves. Earthquakes can range in size from those that are so weak that they cannot be felt to those violent enough to propel objects and people into the air and wreak destruction across entire cities. The seismicity, or seismic activity, of an area refers to the frequency, type, and size of earthquakes experienced over a period of time. The word tremor is also used for non-earthquake seismic rumbling.
                        <br /><br />
                        Earthquakes are caused mostly by rupture of geological faults, but also by other events such as volcanic activity, landslides, mine blasts, and nuclear tests. The underground point of origin of the earthquake is called the focus or hypocenter. The point directly above it on the surface of the Earth is called the epicenter. Earthquakes manifest themselves by vibration, shaking, and sometimes displacement of the ground. When the epicenter of a large earthquake is located offshore, the seabed may be displaced sufficiently to cause a tsunami. Earthquakes can also trigger landslides, and occasionally volcanic activity.
                        <br /><br />
                        Earthquakes are measured using observations from seismometers. The magnitude of an earthquake and the intensity of shaking is measured on the Richter scale. The Richter scale measures the amount of seismic energy released by an earthquake. A logarithmic scale is used; this means that for every whole number you go up on the scale, the amount of energy released increases tenfold. There are also scales that measure the intensity of shaking, such as the Modified Mercalli scale. 
                        <br /><br />
                        The risks associated with earthquakes are large, especially in densely populated areas where buildings and other infrastructure might not be designed to withstand significant ground movement. Understanding what earthquakes are and the mechanisms behind them helps us to better prepare and mitigate the risks associated with them.
                    </p>
                </div>
            </section>

            {/* Signs of an Earthquake Section */}
            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>Signs of an Earthquake</h2>
                    <ul>
                        <li>Unusual animal behavior</li>
                        <li>Small tremors or foreshocks</li>
                        <li>Ground shaking or vibration</li>
                        <li>Changes in water levels in wells</li>
                        <li>Rumbling or low-frequency noise</li>
                        <li>Cracks in walls, pavements, or the ground</li>
                        <li>Unusual atmospheric phenomena</li>
                        <li>Sudden rise in radon levels</li>
                        <li>Disruption of radio and TV signals</li>
                        <li>Unexpected power outages</li>
                    </ul>
                </div>
            </section>

            {/* How to Act During an Earthquake Section */}
            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>How to Act During an Earthquake</h2>
                    <p>
                        Earthquakes can strike without warning, and their aftermath can be devastating. Proper preparedness and knowing how to act during an earthquake can significantly reduce the risks of injury and loss of life. Here’s what you need to know to stay safe during an earthquake.
                        <br /><br />
                        Before an earthquake, it’s crucial to ensure that your home or workplace is structurally sound and resistant to seismic activity. This includes securing heavy furniture to walls, installing safety latches on cabinets, and identifying safe spots to take cover during a quake, such as under sturdy furniture or against interior walls away from windows.
                        <br /><br />
                        When an earthquake occurs, the most important thing is to stay calm. If you’re indoors, immediately take cover under sturdy furniture or move to an interior wall, away from windows, glass, and heavy objects that could fall. Drop to your hands and knees to prevent being knocked over, cover your head and neck with your arms, and hold on to your shelter until the shaking stops. Do not run outside, as you could be injured by falling debris.
                        <br /><br />
                        If you’re outdoors, move to an open area away from buildings, trees, streetlights, and utility wires. Drop to the ground and protect your head and neck. Stay in place until the shaking stops.
                        <br /><br />
                        If you’re in a vehicle, stop as quickly and safely as possible, avoiding bridges, overpasses, and power lines. Stay inside the vehicle until the shaking stops.
                        <br /><br />
                        After the earthquake, be prepared for aftershocks, which can be as strong as the initial quake. Check yourself and others for injuries, and provide first aid if necessary. If you smell gas or suspect a leak, turn off the gas supply and evacuate the building. Avoid using elevators, and be cautious when opening cabinets, as objects may have shifted during the quake.
                        <br /><br />
                        Having an emergency kit with essential supplies, such as water, food, medications, and first aid materials, is vital. Familiarize yourself with your community’s emergency response plan and evacuation routes. Regularly practice earthquake drills with your family or coworkers to ensure everyone knows what to do in the event of a quake.
                        <br /><br />
                        By staying informed, planning ahead, and knowing how to act during an earthquake, you can greatly increase your chances of staying safe and minimizing the impact of the disaster.
                    </p>
                    <h3>Advisory Steps:</h3>
                    <ul className="advisory-steps">
                        <li>Drop, Cover, and Hold On during shaking.</li>
                        <li>Move away from windows, glass, and heavy objects.</li>
                        <li>If outdoors, move to an open area away from hazards.</li>
                        <li>If in a vehicle, stop in a safe area away from overpasses.</li>
                        <li>Stay indoors until the shaking stops and it's safe to exit.</li>
                        <li>Avoid using elevators.</li>
                        <li>Be prepared for aftershocks.</li>
                        <li>Check for injuries and provide first aid if necessary.</li>
                        <li>Turn off the gas supply if you smell gas.</li>
                        <li>Stay informed through emergency broadcasts and alerts.</li>
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

export default Earthquake;
