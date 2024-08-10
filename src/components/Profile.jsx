import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    // Redirect to login if user is not logged in
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
                    <img src="https://img.freepik.com/premium-vector/gym-t-shirt-design-work-hard-beats-talent_142392-1584.jpg?w=826" alt="Cover" className="cover-img" />
                </div>
                <div className="profile-avatar">
                    <img src={user.profileImage ? user.profileImage : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} alt="Avatar" className="avatar-img" />
                </div>
                <div className="profile-name">
                    <h1>{user.name}</h1>
                </div>
                <div className="profile-info">
                    <p><strong>Bio:</strong> Developer, Tech Enthusiast, Coffee Lover.</p>
                    <p><strong>Location:</strong> New York, USA</p>
                    <p><strong>Joined:</strong> January 2021</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            </div>
            <div className="profile-content">
                <h2>Recent Activities</h2>
                <div className="activity">
                    <p>John commented on a post: "Great article, thanks for sharing!"</p>
                    <span>2 hours ago</span>
                </div>
                <div className="activity">
                    <p>John liked a photo.</p>
                    <span>5 hours ago</span>
                </div>
                <div className="activity">
                    <p>John updated his profile picture.</p>
                    <span>1 day ago</span>
                </div>
            </div>
            <div className="location-info">
                <h2>Your Location</h2>
                {error && <p className="error-message">Error: {error}</p>}
                {location.latitude && location.longitude ? (
                    <p>
                        <b>Latitude:</b> {location.latitude}<br />
                        <b>Longitude:</b> {location.longitude}
                    </p>
                ) : (
                    <p>Fetching location...</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
