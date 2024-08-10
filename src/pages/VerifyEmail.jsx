import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './VerifyEmail.css';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');

        if (!token) {
            setMessage('Invalid or missing token');
            setLoading(false);
            return;
        }

        const verifyToken = async () => {
            try {
                const response = await fetch(`/user/verify-email?token=${token}`, {
                    method: 'GET',
                });

                const data = await response.json();

                if (response.status === 200) {
                    setVerified(true);
                    setMessage(data.message || 'Email verified successfully!');
                    toast.success(data.message || 'Email verified successfully!');
                } else {
                    setMessage(data.message || 'Verification failed.');
                    toast.error(data.message || 'Verification failed.');
                }
            } catch (err) {
                setMessage('An error occurred. Please try again.');
                toast.error('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, [searchParams]);

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className={`verify-email-container ${verified ? 'verified' : 'not-verified'}`}>
            <Toaster />
            {loading ? (
                <div className="loading">Verifying your email...</div>
            ) : (
                <div className="message">
                    <h1>{message}</h1>
                    {verified && (
                        <button onClick={handleLoginRedirect} className="login-button">
                            Login Now
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
