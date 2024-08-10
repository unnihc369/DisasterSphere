import React from 'react';
import './UserList.css'

const UserList = ({ users, makeAdmin }) => {
    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.isAdmin ? 'Admin' : 'User'}
                        <button onClick={() => makeAdmin(user._id)}>
                            {user.isAdmin ? 'Remove Admin' : 'Make Admin'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
