// Profile.js
import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import { useNavigate,redirect } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    if(!user){
        redirect('/login');
        return null;
    }
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-cover">
                    <img src="https://img.freepik.com/premium-vector/gym-t-shirt-design-work-hard-beats-talent_142392-1584.jpg?w=826" alt="Cover" className="cover-img" />
                </div>
                <div className="profile-avatar">
                    <img src={user.profileImage ? user.profileImage :"https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} alt="Avatar" className="avatar-img" />
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
        </div>
    );
};

export default Profile;
