import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
        toast.success('Logout Successful');
    };

    return (
        <div>
            <Toaster />
            <nav className="navbar">
                <Link to='/'><div className="logo">DisasterSphere</div></Link>
                <div className="menu-icon" onClick={toggleSidebar}>
                    &#9776;
                </div>
                <ul className={`nav-links`}>
                    <Link to='/'><li>Home</li></Link>
                    {user && (user.isAdmin && <Link to='/admin'><li>Admin</li></Link>)}
                    {!user ? (
                        <>
                            <Link to='/login'><li>Login</li></Link>
                            <Link to='/signup'><li>Sign Up</li></Link>
                        </>
                    ) : (
                        <>
                            <Link to='/disasterview'><li>Edu</li></Link>
                            <Link to='/adddisaster'><li>Add Disaster</li></Link>
                            <Link to='/dis'><li>Disasters</li></Link>
                            <Link to='/profile'><li>Profile</li></Link>
                            <li onClick={handleLogout}>Logout</li>
                        </>
                    )}
                </ul>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h2>Menu</h2>
                    <span className="close-icon" onClick={toggleSidebar}>&times;</span>
                </div>
                <ul className="sidebar-links">
                    <Link to='/'><li onClick={toggleSidebar}>Home</li></Link>
                    {user && (user.isAdmin && <Link to='/admin'><li>Admin</li></Link>)}
                    {!user ? (
                        <>
                            <Link to='/login'><li>Login</li></Link>
                            <Link to='/signup'><li>Sign Up</li></Link>
                        </>
                    ) : (
                        <>
                            <Link to='/dis'><li>Disasters</li></Link>
                            <Link to='/profile'><li>Profile</li></Link>
                            <li onClick={handleLogout}>Logout</li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
