import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Weather from './Weather';

const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            // Get user's geolocation
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                    },
                    (error) => {
                        setError(error.message);
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        }
    }, [user, navigate]);

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-cover">
                    <img src="https://disasterherotulsa.com/wp-content/uploads/2023/01/ESR-Disaster-Hero-Logo_FLOOD.svg" alt="Cover" className="cover-img" />
                </div>
                <div className="profile-avatar">
                    <img src={user.profileImage ? user.profileImage : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} alt="Avatar" className="avatar-img" />
                </div>
                <div className="profile-name">
                    <h1>{user.name}</h1>
                </div>
                <div className="profile-info">
                    <p><strong>State:</strong> {user.state}</p>
                    <p><strong>City:</strong> {user.city}</p>
                    <p><strong>Joined:</strong> {new Date(user.createdAt).toDateString()}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            </div>

            <Weather latitude={location.latitude} longitude={location.longitude} />

            <div className="profile-content">
                <h2>Your Volunteered Disasters</h2>
                {user.volunteeredDisasters.length > 0 ? (
                    user.volunteeredDisasters.map((disasterId) => (
                        <Link key={disasterId} to={`/disaster/${disasterId}`} className="activity">
                            <p>Disaster ID: {disasterId}</p>
                        </Link>
                    ))
                ) : (
                    <p>You have not volunteered for any disasters yet.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
