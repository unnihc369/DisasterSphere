import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDisaster, fetchNonVerifiedDisasters } from '../redux/disasterSlice';
import './NonVerifiedDisasters.css';
import { Link } from 'react-router-dom';

const VerifiedDisasters = () => {
    const dispatch = useDispatch();
    const disasters = useSelector((state) => state.disasters.disasters);
    const status = useSelector((state) => state.disasters.status);
    const isAdmin = useSelector(state => state.user.isAdmin);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNonVerifiedDisasters());
        }
    }, [status, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteDisaster(id));
    };

    return (
        <div className="non-verified-disasters">
            <h2>Verified Disasters</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Description</th>
                        {isAdmin && <th>Delete</th>}
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {disasters
                        .filter((disaster) => disaster.isVerified)
                        .map((disaster) => (
                            <tr key={disaster._id}>
                                <td>{disaster.name}</td>
                                <td>{disaster.state}</td>
                                <td>{disaster.city}</td>
                                <td>{disaster.disc}</td>
                                {isAdmin && <td>
                                    <button onClick={() => handleDelete(disaster._id)}>Delete</button>
                                </td>}
                                <Link to={`/disaster/${disaster._id}`}>
                                    <button>View Details</button>
                                </Link>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default VerifiedDisasters;
