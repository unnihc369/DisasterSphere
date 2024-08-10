import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { volunteerSuccess } from '../redux/userSlice';
import './DisasterDetail.css';
import toast, { Toaster } from 'react-hot-toast';

const DisasterDetail = () => {
    const { id } = useParams();
    const [disaster, setDisaster] = useState(null);
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemName, setItemName] = useState('');
    const [quantityNeeded, setQuantityNeeded] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        const fetchDisaster = async () => {
            try {
                const response = await axios.get(`/dis/${id}`);
                setDisaster(response.data);
            } catch (error) {
                console.error('Failed to fetch disaster:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchMaterials = async () => {
            try {
                const response = await axios.get(`/mat/${id}`);
                setMaterials(response.data);
            } catch (error) {
                console.error('Failed to fetch materials:', error);
            }
        };

        fetchDisaster();
        fetchMaterials();
    }, [id]);

    const handleVolunteer = async () => {
        try {
            const response = await axios.post('/dis/vol', {
                userId: user._id,
                disasterId: disaster._id
            });

            if (response.status === 200) {
                dispatch(volunteerSuccess(id));
                toast.success('Successfully volunteered!');
            }
        } catch (error) {
            console.error('Failed to volunteer:', error);
            toast.error('Failed to volunteer.');
        }
    };

    const handleAddMaterial = async () => {
        try {
            const response = await axios.post('/mat/add', {
                disasterId: id,
                itemName,
                quantityNeeded,
            });

            if (response.status === 201) {
                setMaterials([...materials, response.data.material]);
                setItemName('');
                setQuantityNeeded(0);
                toast.success('Material added successfully!');
            }
        } catch (error) {
            console.error('Failed to add material:', error);
            toast.error('Failed to add material.');
        }
    };

    const handleAcceptMaterial = async (materialId) => {
        try {
            const response = await axios.post(`/mat/accept/${materialId}`, {
                username: user.name,
            }); 

            if (response.status === 200) {
                setMaterials(materials.map(material =>
                    material._id === materialId ? response.data.material : material
                ));
                toast.success('Material accepted for donation');
            }
        } catch (error) {
            console.error('Failed to accept material:', error);
            toast.error('Failed to accept material.');
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    if (!disaster) return <div className="error">No disaster found!</div>;

    const hasVolunteered = user.volunteeredDisasters.includes(disaster._id);

    return (
        <div className="disaster-detail">
            <Toaster />
            <h2 className="disaster-title">{disaster.name}</h2>
            <div className="disaster-info">
                <p><strong>State:</strong> {disaster.state}</p>
                <p><strong>City:</strong> {disaster.city}</p>
                <p><strong>Description:</strong> {disaster.disc}</p>
                <p><strong>Place:</strong> {disaster.Place}</p>
                <p><strong>Verified:</strong> {disaster.isVerified ? 'Yes' : 'No'}</p>
            </div>
            {!hasVolunteered ? (
                <button onClick={handleVolunteer} className="volunteer-button">
                    Volunteer for this Disaster
                </button>
            ) : (
                <p className="volunteer-status">Already a volunteer</p>
            )}
            {hasVolunteered && <div className="materials-section">
                <h3>Required Materials</h3>
                <ul className="materials-list">
                    {materials.map(material => (
                        <li key={material._id} className="material-item">
                            <p>{material.itemName} - Quantity Needed: {material.quantityNeeded}</p>
                            {!material.fulfilled ? (
                                <button onClick={() => handleAcceptMaterial(material._id)} className="accept-button">
                                    Accept to Donate
                                </button>
                            ) : (
                                <p className="fulfilled-status">Accepted by: {material.volunteer ? material.volunteer : 'Unknown'}</p>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="add-material">
                    <h4>Add New Material Requirement</h4>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="Item Name"
                        className="material-input"
                    />
                    <input
                        type="number"
                        value={quantityNeeded}
                        onChange={(e) => setQuantityNeeded(Number(e.target.value))}
                        placeholder="Quantity Needed"
                        className="material-input"
                    />
                    <button onClick={handleAddMaterial} className="add-material-button">Add Material</button>
                </div>
            </div>}
        </div>
    );
};

export default DisasterDetail;
