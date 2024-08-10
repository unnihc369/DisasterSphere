import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './Signup.css';
import { storage } from '../firebase';
import statesData from './states.json';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([]);

    const handleStateChange = (e) => {
        const stateName = e.target.value;
        setSelectedState(stateName);
        setSelectedCity('');

        const selectedCities = statesData[stateName] || [];
        setCities(selectedCities);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let imageUrl = '';

        if (profileImage) {
            const imageRef = ref(storage, `profiles/${profileImage.name}`);
            const uploadTask = uploadBytesResumable(imageRef, profileImage);

            await uploadTask.then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            }).then((url) => {
                imageUrl = url;
            }).catch((error) => {
                toast.error('Failed to upload image');
                setLoading(false);
                return;
            });
        }

        try {
            const response = await fetch('https://disaster-sphere-backend.vercel.app/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    profileImage: imageUrl,
                    state: selectedState,
                    city: selectedCity,
                })
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(data.message);
                setName('');
                setEmail('');
                setPassword('');
                setSelectedState('');
                setSelectedCity('');
                setProfileImage(null);
                setCities([]); // Reset cities when form is submitted
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="signup-container">
            <Toaster />
            <div className="signup-form-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select
                            id="state"
                            value={selectedState}
                            onChange={handleStateChange}
                        >
                            <option value="">Select State</option>
                            {Object.keys(statesData).map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            disabled={!selectedState}
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="profileImage">Profile Image</label>
                        <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
