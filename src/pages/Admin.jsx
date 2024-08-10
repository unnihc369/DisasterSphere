import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, updateUserAdminStatus } from '../redux/allUsersSlice';
import UserList from '../components/UserList';
import StatsCard from '../components/StatsCard';
import './Admin.css';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import statesData from './states.json'; 
import NonVerifiedDisasters from '../components/NonVerifiedDisasters';
import VerifiedDisasters from '../components/VerifiedDisasters';

const Admin = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const users = useSelector((state) => state.users.users);
    const status = useSelector((state) => state.users.status);

    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (!user.isAdmin) {
            return <Navigate to={'/login'} replace />;
        }
    }, [user.isAdmin]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    const makeAdmin = (id) => {
        const userToUpdate = users.find(user => user._id === id);
        if (userToUpdate) {
            dispatch(updateUserAdminStatus({ id, isAdmin: !userToUpdate.isAdmin }));
        }
    };

    const adminCount = users.filter(user => user.isAdmin).length;

    const handleStateChange = (e) => {
        const stateName = e.target.value;
        setSelectedState(stateName);
        setSelectedCity('');

        const selectedStateData = statesData[stateName];
        if (selectedStateData) {
            setCities(selectedStateData);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://disaster-sphere-backend.vercel.app/user/alert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    state: selectedState,
                    city: selectedCity,
                    subject,
                    message,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Alerts sent successfully!');
                setSelectedState('');
                setSelectedCity('');
                setSubject('');
                setMessage('');
            } else {
                toast.error(data.error || 'Failed to send alerts');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="admin-panel">
            <Toaster />
            {(!user.isAdmin || !user) && <Navigate to="/login" replace />}
            <h1>Admin Panel</h1>
            <div className="stats">
                <StatsCard title="Total Users" count={users.length} />
                <StatsCard title="Total Admins" count={adminCount} />
                <StatsCard title="Total Posts" count={20} />
            </div>
            <UserList users={users} makeAdmin={makeAdmin} />

            <div className="alert-form">
                <h2>Send Alerts to Users</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <select
                            id="state"
                            value={selectedState}
                            onChange={handleStateChange}
                            required
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
                        <label htmlFor="city">City:</label>
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            required
                            disabled={!selectedState}
                        >
                            <option value="">Select City</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Send Alert</button>
                </form>
            </div>
            <NonVerifiedDisasters/>
            <VerifiedDisasters/>
        </div>
    );
};

export default Admin;
