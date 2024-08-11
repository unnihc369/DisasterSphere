import React from 'react';
import './common.css';

const Flood = () => {
    return (
        <div className="disaster-container">
            <header className="disaster-header">
                <h1>Flood</h1>
            </header>

            <section className="disaster-section">
                <div className="disaster-image">
                    <img src="https://img.freepik.com/free-photo/natural-disaster-concept-with-flood_23-2150385391.jpg?t=st=1723339917~exp=1723343517~hmac=498e7ebd8949c023f89af6634706da66027541c8f225f4738cad0f15f0d80556&w=1060" alt="Flood" />
                </div>
                <div className="disaster-content">
                    <h2>What is a Flood?</h2>
                    <p>
                        A flood is an overflow of water that submerges land that is usually dry. In the sense of "flowing water," the word may also be applied to the inflow of the tide. Flooding may occur as an overflow of water from water bodies, such as a river, lake, or ocean, in which the water overtops or breaks levees, resulting in some of that water escaping its usual boundaries. It may also occur due to an accumulation of rainwater on saturated ground in an areal flood.
                        <br /><br />
                        Floods are a significant hazard to both life and property, and the damage caused by floods can be devastating. They can result from various factors, including heavy rainfall, snowmelt, storm surges from tropical cyclones or tsunamis in coastal areas, or the overflow of rivers. Floods can cause widespread damage to infrastructure, crops, and buildings, and they can lead to the displacement of people and the disruption of essential services.
                        <br /><br />
                        The impact of floods can be both short-term and long-term. In the immediate aftermath, floods can lead to loss of life, destruction of property, and contamination of water supplies. In the longer term, floods can cause lasting damage to agricultural lands, increase the risk of disease outbreaks, and exacerbate existing economic vulnerabilities in affected regions.
                        <br /><br />
                        Flood risk management involves strategies to prevent or reduce the likelihood of flooding and mitigate the consequences. These strategies include the construction of levees, dams, and flood barriers, the improvement of drainage systems, the implementation of land use planning and zoning regulations, and the development of early warning systems. Additionally, public awareness and preparedness play a critical role in reducing the impact of floods on communities.
                        <br /><br />
                        Climate change is expected to increase the frequency and severity of floods in many parts of the world. Rising sea levels, more intense rainfall, and changes in precipitation patterns are likely to contribute to more frequent and severe flooding. As such, efforts to mitigate and adapt to climate change are also essential components of flood risk management.
                    </p>
                </div>
            </section>

            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>Signs of a Flood</h2>
                    <ul>
                        <li>Heavy and prolonged rainfall</li>
                        <li>Rising water levels in rivers and streams</li>
                        <li>Rapid snowmelt</li>
                        <li>Storm surges along coastal areas</li>
                        <li>Overflowing of reservoirs or dams</li>
                        <li>Waterlogged soil unable to absorb more water</li>
                        <li>Flash floods in dry areas after heavy rain</li>
                        <li>Continuous thunderstorms in a specific region</li>
                        <li>Warning alerts from meteorological agencies</li>
                        <li>Unusual water currents in nearby water bodies</li>
                    </ul>
                </div>
            </section>

            <section className="disaster-section">
                <div className="disaster-content">
                    <h2>How to Act During a Flood</h2>
                    <p>
                        Floods can occur with little warning, and their impact can be devastating. Knowing how to respond effectively during a flood can help protect lives and minimize damage. Here's what you need to know to stay safe during a flood.
                        <br /><br />
                        Before a flood, it's essential to stay informed by monitoring weather reports and flood warnings. If you live in a flood-prone area, prepare an emergency kit that includes essentials like food, water, medications, and important documents. Identify the safest routes to higher ground and practice evacuation plans with your family.
                        <br /><br />
                        If a flood is imminent, evacuate immediately if advised to do so by authorities. Move to higher ground, away from rivers, streams, and low-lying areas. Avoid walking or driving through floodwaters, as just six inches of moving water can knock you down, and two feet can carry away most vehicles.
                        <br /><br />
                        During a flood, stay indoors if possible. Move to the highest floor of your home if water starts to enter. If you’re trapped in a building, move to the roof and signal for help. Avoid contact with floodwaters, as they may be contaminated with sewage, chemicals, or other hazardous substances.
                        <br /><br />
                        After the flood, be cautious when returning to your home. Check for structural damage and avoid entering if the building is unsafe. Wear protective clothing and use disinfectants when cleaning up flood-affected areas. Be aware of the risk of disease outbreaks and ensure that your water supply is safe before drinking.
                        <br /><br />
                        Community awareness and preparedness are key to reducing the impact of floods. Ensure that you and your family know the local emergency plans and evacuation routes. Stay informed about the risks in your area, and be prepared to take immediate action when a flood threatens.
                    </p>
                    <h3>Advisory Steps:</h3>
                    <ul className="advisory-steps">
                        <li>Evacuate immediately if instructed by authorities.</li>
                        <li>Move to higher ground away from flood-prone areas.</li>
                        <li>Avoid walking or driving through floodwaters.</li>
                        <li>If trapped, move to the roof and signal for help.</li>
                        <li>Avoid contact with floodwaters due to contamination risks.</li>
                        <li>Do not return home until authorities declare it safe.</li>
                        <li>Check for structural damage before entering buildings.</li>
                        <li>Use protective clothing when cleaning up.</li>
                        <li>Ensure your water supply is safe before drinking.</li>
                        <li>Stay informed through official updates and warnings.</li>
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

export default Flood;