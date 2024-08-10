import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import statesData from './states.json'; // Adjust the path as necessary
import toast, { Toaster } from 'react-hot-toast';
import './AddDisaster.css'

const AddDisaster = () => {
    const user = useSelector((state) => state.user.user); 
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [disc, setDisc] = useState('');
    const [place, setPlace] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (state) {
            const selectedStateData = statesData[state];
            setCities(selectedStateData || []);
            setCity('');
        }
    }, [state]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/dis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    state,
                    city,
                    disc,
                    Place: place,
                    userId: user._id, 
                }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Disaster added successfully!');
                setName('');
                setState('');
                setCity('');
                setDisc('');
                setPlace('');
            } else {
                toast.error(data.error || 'Failed to add disaster');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="add-disaster-form">
            <Toaster />
            <h2>Add Disaster</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <select
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    >
                        <option value="">Select State</option>
                        {Object.keys(statesData).map((stateName) => (
                            <option key={stateName} value={stateName}>
                                {stateName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <select
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        disabled={!state}
                    >
                        <option value="">Select City</option>
                        {cities.map((cityName, index) => (
                            <option key={index} value={cityName}>
                                {cityName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="disc">Description:</label>
                    <textarea
                        id="disc"
                        value={disc}
                        onChange={(e) => setDisc(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="place">Place:</label>
                    <input
                        type="text"
                        id="place"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Disaster</button>
            </form>
        </div>
    );
};

export default AddDisaster;
