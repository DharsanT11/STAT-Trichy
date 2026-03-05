import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaHdd } from 'react-icons/fa';
import { loginAdmin } from '../utils/storage';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginAdmin(username, password)) {
            navigate('/admin/dashboard');
        } else {
            setError('Invalid credentials. Use admin / admin123');
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-[#0a0a0a] border border-[#222] p-8 lg:p-12">
                    {/* Logo */}
                    <div className="text-center mb-10 flex flex-col items-center">
                        <img src="/stat_logo.svg" alt="STAT RECOVERY" className="h-20 object-contain mix-blend-screen hover:mix-blend-normal transition-all mb-6" />
                        <p className="text-muted text-sm font-sans uppercase tracking-widest">Admin Control Panel</p>
                    </div>

                    {error && (
                        <div className="bg-[#111] border border-accent text-accent text-sm p-4 mb-6 font-sans">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-2">Username</label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] text-sm" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    className="w-full pl-11 pr-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-2">Password</label>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] text-sm" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full pl-11 pr-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary w-full py-4 mt-8">
                            Authenticate
                        </button>
                    </form>

                    <p className="text-center text-[#555] text-xs font-sans mt-8 uppercase tracking-widest">
                        Demo: admin / admin123
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
