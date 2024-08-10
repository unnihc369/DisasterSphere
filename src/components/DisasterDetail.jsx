import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { volunteerSuccess } from '../redux/userSlice';
import './DisasterDetail.css';
import toast, { Toaster } from 'react-hot-toast';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase.js'

const DisasterDetail = () => {
    const { id } = useParams();
    const [disaster, setDisaster] = useState(null);
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemName, setItemName] = useState('');
    const [quantityNeeded, setQuantityNeeded] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    //Posts
    const[title,setTitle] = useState('');
    const[desc,setDesc] =useState('');
    const [postImage, setPostImage] = useState(null);
    const priority = user.isAdmin?1:2;
    const[posts,setPosts]=useState([]);

    useEffect(() => {
        const fetchDisaster = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/dis/${id}`);
                setDisaster(response.data);
            } catch (error) {
                console.error('Failed to fetch disaster:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchMaterials = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/mat/${id}`);
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
            const response = await axios.post('http://localhost:5000/dis/vol', {
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
            const response = await axios.post('http://localhost:5000/mat/add', {
                disasterId: id,
                itemName,
                quantityNeeded,
                isVerified: user.isAdmin 
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
            const response = await axios.post(`http://localhost:5000/mat/accept/${materialId}`, {
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

    const handleDeleteMaterial = async (materialId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/mat/${materialId}`);

            if (response.status === 200) {
                setMaterials(materials.filter(material => material._id !== materialId));
                toast.success('Material deleted successfully!');
            }
        } catch (error) {
            toast.error('Failed to delete material.');
        }
    };

    const handleVerifyMaterial = async (materialId) => {
        try {
            const response = await axios.put(`http://localhost:5000/mat/verify/${materialId}`);

            if (response.status === 200) {
                // Update the state with the newly verified material
                setMaterials(materials.map(material =>
                    material._id === materialId ? { ...material, isVerified: true } : material
                ));
                toast.success('Material verified successfully!');
            }
        } catch (error) {
            console.error('Failed to verify material:', error);
            toast.error('Failed to verify material.');
        }
    };

    const handlePayments = async () => {
        try {
            const response = await axios.post('http://localhost:5000/dis/success', {
                disasterId: disaster._id,
            });
            console.log(response);
            window.location.href = "https://buy.stripe.com/test_cN214faWn1R69j2eUU";
        } catch (error) {
            console.error('Payment failed:', error);
            toast.error('Failed to initiate payment. Please try again.');
        }
    }

    const handleSubmitPost = async (e) => {
        e.preventDefault();
        setLoading(true);
        let imageUrl = '';

        if (postImage) {
            const imageRef = ref(storage, `posts/${postImage.name}`);
            const uploadTask = uploadBytesResumable(imageRef, postImage);

            await uploadTask.then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            }).then((url) => {
                imageUrl = url;
            }).catch((error) => {
                toast.error('Failed to upload image');
                setLoading(false);
                return;
            });
        }

        try {
            const response = await fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    disc: desc,
                    imageUrl,
                    priority,
                    disasterId: id,
                    userId: user._id,
                    username:user.name
                })
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(data.message);
                setPosts((prevPosts) => [...prevPosts, data.post]); // Add the new post to the state
                setTitle('');
                setDesc('');
                setPostImage(null);
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/posts/${postId}`);
            if (response.status === 200) {
                setPosts(posts.filter(post => post._id !== postId));
                toast.success('Post deleted successfully!');
            }
        } catch (error) {
            toast.error('Failed to delete post.');
        }
    };

    useEffect(() => {
        const fetchDisaster = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/dis/${id}`);
                setDisaster(response.data);
            } catch (error) {
                console.error('Failed to fetch disaster:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchMaterials = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/mat/${id}`);
                setMaterials(response.data);
            } catch (error) {
                console.error('Failed to fetch materials:', error);
            }
        };

        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/disaster/${id}`);
                setPosts(response.data.sort((a, b) => a.priority - b.priority)); // Sort by priority
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchDisaster();
        fetchMaterials();
        fetchPosts();
    }, [id]);

    if (loading) return <div className="loading">Loading...</div>;

    if (!disaster) return <div className="error">No disaster found!</div>;

    const hasVolunteered = user.volunteeredDisasters.includes(disaster._id);

    return (
        <div className="disaster-detail">
            <Toaster />
            <div className="disaster-sect">
            <h2 className="disaster-title"><Link to='/dis'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M20 0H0v20h20zm-7.354 14.166-1.389 1.439-5.737-5.529 5.729-5.657 1.4 1.424-4.267 4.215z" /></svg> </Link> {disaster.name}</h2>
            <div className="disaster-info">
                <p><strong>State:</strong> {disaster.state}</p>
                <p><strong>City:</strong> {disaster.city}</p>
                <p><strong>Description:</strong> {disaster.disc}</p>
                <p><strong>Place:</strong> {disaster.Place}</p>
                <p><strong>Amount Raised:</strong> ₹{disaster.amount}</p>
            </div>
            {!hasVolunteered && (
                <button onClick={handleVolunteer} className="volunteer-button">
                    Volunteer for this Disaster
                </button>
            )}
            {hasVolunteered && <p className="">You are Volunteering</p>}
            {(hasVolunteered || user.isAdmin) && (
                <div className="materials-section">
                    <h3>Required Materials</h3>
                    <ul className="materials-list">
                        {materials
                            .filter(material => user.isAdmin || material.isVerified) // Only show verified materials to volunteers
                            .map(material => (
                                <li key={material._id} className="material-item">
                                    <p>{material.itemName} - Quantity Needed: {material.quantityNeeded}</p>
                                    {!material.fulfilled ? (
                                        <>
                                            <button onClick={() => handleAcceptMaterial(material._id)} className="accept-button">
                                                Accept to Donate
                                            </button>
                                            <button onClick={() => handleDeleteMaterial(material._id)} className="delete-button">
                                                Delete
                                            </button>
                                            {user.isAdmin && !material.isVerified && (
                                                <button onClick={() => handleVerifyMaterial(material._id)} className="verify-button">
                                                    Verify
                                                </button>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <p className="fulfilled-status">Accepted by: {material.volunteer ? material.volunteer : 'Unknown'}</p>
                                            {user.isAdmin && (
                                                <button onClick={() => handleDeleteMaterial(material._id)} className="delete-button">
                                                    Delete
                                                </button>
                                            )}
                                        </>
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
                    <button className="volunteer-button" onClick={handlePayments}>Make a Payment</button>
                </div>
            )}
            </div>

            <div className="posts-section">
                <h3>Posts Related to this Disaster</h3>
                <ul className="posts-list">
                    {posts.map(post => (
                        <li key={post._id} className="post-item">
                            <h4>{post.title}</h4>
                            <h6>{post.username}</h6>
                            <p>{post.disc}</p>
                            {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="post-image" />}
                            {(user._id === post.userId || user.isAdmin) && (
                                <button onClick={() => handleDeletePost(post._id)} className="delete-post-button">Delete Post</button>
                            )}
                        </li>
                    ))}
                </ul>
                
                <form onSubmit={handleSubmitPost} className="post-form">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Post Title"
                        className="post-input"
                    />
                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Post Description"
                        className="post-input"
                    />
                    <input
                        type="file"
                        onChange={(e) => setPostImage(e.target.files[0])}
                        className="post-input"
                    />
                    <button type="submit" className="add-post-button">Create Post</button>
                </form>

                
            </div>
        </div>
    );
};

export default DisasterDetail;
