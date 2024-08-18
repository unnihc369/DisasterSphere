import React, { useState } from 'react';
import './UserList.css';

const UserList = ({ users, makeAdmin, deleteUser }) => {
    const [expandedUser, setExpandedUser] = useState(null);

    const toggleDetails = (userId) => {
        setExpandedUser(expandedUser === userId ? null : userId);
    };

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <div className="user-summary">
                            {user.name} 
                            <div className="button-group">
                                <button onClick={() => makeAdmin(user._id)}>
                                    {user.isAdmin ? 'Remove Admin' : 'Make Admin'}
                                </button>
                                <button onClick={() => deleteUser(user._id)} className="delete-btn">
                                    Delete User
                                </button>
                                <button onClick={() => toggleDetails(user._id)} className="details-btn">
                                    {expandedUser === user._id ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="rotate(180)">
                                        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                                        <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
                                    </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" /></svg>}
                                </button>
                            </div>
                        </div>
                        {expandedUser === user._id && (
                            <div className="user-details">
                                <p>Email: {user.email}</p>
                                <p>State: {user.state}</p>
                                <p>City: {user.city}</p>
                                <p>Verified: {user.isVerified ? 'Yes' : 'No'}</p>
                                <p>Joined On: {new Date(user.createdAt).toDateString()} </p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
