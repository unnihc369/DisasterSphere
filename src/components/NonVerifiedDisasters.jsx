import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNonVerifiedDisasters, verifyDisaster } from '../redux/disasterSlice';
import './NonVerifiedDisasters.css'; 

const NonVerifiedDisasters = () => {
    const dispatch = useDispatch();
    const disasters = useSelector((state) => state.disasters.disasters);
    const status = useSelector((state) => state.disasters.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNonVerifiedDisasters());
        }
    }, [status, dispatch]);

    const handleVerify = (id) => {
        dispatch(verifyDisaster(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteDisaster(id));
    };

    return (
        <div className="non-verified-disasters">
            <h2>Non-Verified Disasters</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Description</th>
                        <th>Actions</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {disasters
                        .filter((disaster) => !disaster.isVerified) 
                        .map((disaster) => (
                            <tr key={disaster._id}>
                                <td>{disaster.name}</td>
                                <td>{disaster.state}</td>
                                <td>{disaster.city}</td>
                                <td>{disaster.disc}</td>
                                <td>
                                    <button onClick={() => handleVerify(disaster._id)}>Verify</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(disaster._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default NonVerifiedDisasters;
