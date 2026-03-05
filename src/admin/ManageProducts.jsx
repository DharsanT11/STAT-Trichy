import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrash, FaSave, FaTimes, FaPlus } from 'react-icons/fa';
import { getProducts, updateProduct, deleteProduct, isAuthenticated } from '../utils/storage';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/admin');
            return;
        }
        setProducts(getProducts());
    }, [navigate]);

    const startEdit = (product) => {
        setEditingId(product.id);
        setEditForm({ ...product, features: product.features ? product.features.join(', ') : '' });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditForm({});
    };

    const saveEdit = () => {
        const updated = {
            ...editForm,
            features: editForm.features
                ? editForm.features.split(',').map((f) => f.trim()).filter(Boolean)
                : [],
        };
        updateProduct(editingId, updated);
        setProducts(getProducts());
        setEditingId(null);
        setEditForm({});
    };

    const handleDelete = (id, name) => {
        if (window.confirm(`Are you sure you want to PURGE "${name}" from the database?`)) {
            deleteProduct(id);
            setProducts(getProducts());
        }
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-20 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
                    <div className="flex items-center gap-6">
                        <Link
                            to="/admin/dashboard"
                            className="w-12 h-12 bg-[#111] border border-[#333] flex items-center justify-center hover:border-white transition-colors group"
                        >
                            <FaArrowLeft className="text-[#888] group-hover:-translate-x-1 group-hover:text-white transition-all" />
                        </Link>
                        <div>
                            <img src="/stat_logo.svg" alt="STAT RECOVERY" className="h-10 object-contain mix-blend-screen hover:mix-blend-normal transition-all mb-2" />
                            <p className="text-muted text-xs font-condensed font-bold uppercase tracking-widest mt-1">{products.length} Mapped Entries</p>
                        </div>
                    </div>
                    <Link to="/admin/add-product" className="btn-outline flex items-center justify-center gap-3">
                        <FaPlus /> Deploy New
                    </Link>
                </div>

                {/* Products Table */}
                <div className="bg-[#0a0a0a] border border-[#222]">
                    {products.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-[#555] font-condensed font-bold uppercase tracking-widest text-lg mb-6">Database Empty</p>
                            <Link to="/admin/add-product" className="btn-primary">
                                Initialize First Entry
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#111] border-b border-[#333]">
                                        <th className="text-left px-6 py-5 text-xs font-condensed font-bold text-[#888] uppercase tracking-widest">Hardware Profile</th>
                                        <th className="text-left px-6 py-5 text-xs font-condensed font-bold text-[#888] uppercase tracking-widest">Cap. Spec</th>
                                        <th className="text-left px-6 py-5 text-xs font-condensed font-bold text-[#888] uppercase tracking-widest">Class</th>
                                        <th className="text-right px-6 py-5 text-xs font-condensed font-bold text-[#888] uppercase tracking-widest">Overrides</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#222]">
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-[#111] transition-colors group">
                                            {editingId === product.id ? (
                                                <>
                                                    <td className="px-6 py-5">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={editForm.name}
                                                            onChange={handleEditChange}
                                                            className="w-full px-4 py-2 bg-black border border-[#444] text-white text-sm focus:border-accent outline-none font-sans mb-3 block"
                                                        />
                                                        <input
                                                            type="url"
                                                            name="image"
                                                            value={editForm.image}
                                                            onChange={handleEditChange}
                                                            placeholder="Asset URL"
                                                            className="w-full px-4 py-2 bg-black border border-[#444] text-white text-sm focus:border-accent outline-none font-sans mb-3 block"
                                                        />
                                                        <textarea
                                                            name="description"
                                                            value={editForm.description}
                                                            onChange={handleEditChange}
                                                            rows="2"
                                                            className="w-full px-4 py-2 bg-black border border-[#444] text-white text-sm focus:border-accent outline-none font-sans resize-none mb-3 block"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="features"
                                                            value={editForm.features}
                                                            onChange={handleEditChange}
                                                            placeholder="CSV Features"
                                                            className="w-full px-4 py-2 bg-black border border-[#444] text-white text-sm focus:border-accent outline-none font-sans block"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-5 align-top">
                                                        <input
                                                            type="text"
                                                            name="capacity"
                                                            value={editForm.capacity}
                                                            onChange={handleEditChange}
                                                            className="w-full px-4 py-2 bg-black border border-[#444] text-white text-sm focus:border-accent outline-none font-sans"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-5 align-top">
                                                        <select
                                                            name="category"
                                                            value={editForm.category || ''}
                                                            onChange={handleEditChange}
                                                            className="w-full px-4 py-2 bg-black border border-[#444] text-white text-sm focus:border-accent outline-none font-sans rounded-none"
                                                        >
                                                            <option value="" className="bg-black">Select</option>
                                                            <option value="Internal HDD" className="bg-black">Internal HDD</option>
                                                            <option value="External HDD" className="bg-black">External HDD</option>
                                                            <option value="SSD" className="bg-black">SSD</option>
                                                            <option value="NAS" className="bg-black">NAS</option>
                                                            <option value="NAS HDD" className="bg-black">NAS HDD</option>
                                                        </select>
                                                    </td>
                                                    <td className="px-6 py-5 text-right align-top">
                                                        <div className="flex justify-end gap-3 flex-col sm:flex-row">
                                                            <button
                                                                onClick={saveEdit}
                                                                className="px-4 py-2 bg-white text-black font-condensed font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors"
                                                            >
                                                                Commit
                                                            </button>
                                                            <button
                                                                onClick={cancelEdit}
                                                                className="px-4 py-2 border border-[#444] text-[#888] font-condensed font-bold uppercase tracking-widest text-xs hover:text-white hover:border-white transition-colors"
                                                            >
                                                                Abort
                                                            </button>
                                                        </div>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="px-6 py-5">
                                                        <div className="flex items-start gap-4">
                                                            <div className="w-16 h-16 bg-[#111] border border-[#333] shrink-0">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p className="font-condensed font-bold text-white uppercase tracking-wider text-base mb-1 group-hover:text-accent transition-colors">{product.name}</p>
                                                                <p className="text-muted text-xs font-sans line-clamp-2 max-w-sm">{product.description}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <span className="border border-[#333] bg-[#0a0a0a] text-white px-3 py-1 text-xs font-condensed font-bold uppercase tracking-widest">
                                                            {product.capacity}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 text-xs text-[#888] font-condensed font-bold uppercase tracking-widest">{product.category || '—'}</td>
                                                    <td className="px-6 py-5 text-right">
                                                        <div className="flex justify-end gap-3">
                                                            <button
                                                                onClick={() => startEdit(product)}
                                                                className="w-10 h-10 border border-[#333] bg-[#111] text-white flex items-center justify-center hover:border-white transition-colors"
                                                                title="Configure"
                                                            >
                                                                <FaEdit />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(product.id, product.name)}
                                                                className="w-10 h-10 border border-[#333] bg-[#111] text-[#888] flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors"
                                                                title="Purge"
                                                            >
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
