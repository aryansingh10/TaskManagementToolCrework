import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (error) {
            setError('Failed to login');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Welcome to <span className="text-purple-600">Task Management Tool</span>
                </h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don’t have an account? <a href="/signup" className="text-purple-600 underline">Create a new account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;