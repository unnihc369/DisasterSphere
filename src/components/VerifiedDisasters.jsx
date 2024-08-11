import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDisaster, fetchNonVerifiedDisasters } from '../redux/disasterSlice';
import './VerifiedDisasters.css';
import { Link } from 'react-router-dom';

const VerifiedDisasters = () => {
    const dispatch = useDispatch();
    const disasters = useSelector((state) => state.disasters.disasters);
    const status = useSelector((state) => state.disasters.status);
    const isAdmin = useSelector(state => state.user.isAdmin);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNonVerifiedDisasters());
        }
    }, [status, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteDisaster(id));
    };

    const filteredDisasters = disasters.filter(
        (disaster) =>
            disaster.isVerified &&
            (disaster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                disaster.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
                disaster.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                disaster.disc.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="verified-disasters">
            <h2>Current Disasters</h2>
            <input
                type="text"
                placeholder="Search disasters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="disaster-cards">
                {filteredDisasters.map((disaster) => (
                    <div key={disaster._id} className="disaster-card">
                        <h3>{disaster.name}</h3>
                        <p><strong>State:</strong> {disaster.state}</p>
                        <p><strong>City:</strong> {disaster.city}</p>
                        <p><strong>Description:</strong> {disaster.disc}</p>
                        <div className="card-buttons">
                            {isAdmin && (
                                <button onClick={() => handleDelete(disaster._id)} className="delete-button">
                                    Delete
                                </button>
                            )}
                            <Link to={`/disaster/${disaster._id}`}>
                                <button className="view-button">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerifiedDisasters;
