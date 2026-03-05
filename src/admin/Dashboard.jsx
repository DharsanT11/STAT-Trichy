import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBox, FaPlus, FaList, FaSignOutAlt, FaHdd } from 'react-icons/fa';
import { getProducts, isAuthenticated, logoutAdmin } from '../utils/storage';

const Dashboard = () => {
    const [productCount, setProductCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/admin');
            return;
        }
        setProductCount(getProducts().length);
    }, [navigate]);

    const handleLogout = () => {
        logoutAdmin();
        navigate('/admin');
    };

    return (
        <div className="pt-20 min-h-screen bg-black">
            {/* Admin Header */}
            <div className="bg-[#0a0a0a] border-b border-[#222]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/admin/dashboard" className="flex items-center">
                            <img src="/stat_logo.svg" alt="STAT RECOVERY" className="h-10 object-contain mix-blend-screen hover:mix-blend-normal transition-all" />
                        </Link>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-condensed font-bold uppercase tracking-widest text-[#888] hover:text-accent transition-colors"
                    >
                        <FaSignOutAlt /> Terminate Session
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-[#0a0a0a] border border-[#222] p-8">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-14 h-14 bg-[#111] border border-[#333] flex items-center justify-center">
                                <FaBox className="text-accent text-2xl" />
                            </div>
                            <div>
                                <p className="text-4xl font-condensed font-bold text-white mb-1">{productCount}</p>
                                <p className="text-muted text-xs font-condensed font-bold uppercase tracking-widest">Total Inventory</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-14 h-14 bg-[#111] border border-[#333] flex items-center justify-center">
                                <FaList className="text-accent text-2xl" />
                            </div>
                            <div>
                                <p className="text-4xl font-condensed font-bold text-white mb-1">{productCount}</p>
                                <p className="text-muted text-xs font-condensed font-bold uppercase tracking-widest">Active Listings</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Quick Actions */}
                <h2 className="text-2xl font-condensed font-bold text-white uppercase tracking-wider mb-8">Control Modules</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        to="/admin/add-product"
                        className="bg-[#0a0a0a] p-8 border border-[#222] hover:border-accent transition-colors duration-300 group flex flex-col items-start"
                    >
                        <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                            <FaPlus className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-condensed font-bold text-white uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">Deploy Product</h3>
                        <p className="text-muted text-sm font-sans">Input new hardware specs, images, and capabilities into the active inventory database.</p>
                    </Link>

                    <Link
                        to="/admin/manage-products"
                        className="bg-[#0a0a0a] p-8 border border-[#222] hover:border-white transition-colors duration-300 group flex flex-col items-start"
                    >
                        <div className="w-16 h-16 bg-[#111] border border-[#333] flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                            <FaList className="text-white text-2xl group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-xl font-condensed font-bold text-white uppercase tracking-widest mb-2">Manage Database</h3>
                        <p className="text-muted text-sm font-sans">Modify existing hardware parameters, update configurations, or purge listings.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
