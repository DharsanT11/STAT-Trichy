import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';
import { addProduct, isAuthenticated } from '../utils/storage';

const AddProduct = () => {
    const navigate = useNavigate();
    const [featureInput, setFeatureInput] = useState('');
    const [form, setForm] = useState({
        name: '',
        image: '',
        capacity: '',
        category: '',
        description: '',
        features: [],
    });

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/admin');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addFeature = () => {
        if (featureInput.trim()) {
            setForm({ ...form, features: [...form.features, featureInput.trim()] });
            setFeatureInput('');
        }
    };

    const removeFeature = (index) => {
        setForm({ ...form, features: form.features.filter((_, i) => i !== index) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.image || !form.capacity || !form.description) {
            alert('Please fill in all required fields.');
            return;
        }
        addProduct(form);
        alert('Product added successfully!');
        navigate('/admin/manage-products');
    };

    return (
        <div className="pt-20 min-h-screen bg-black">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex items-center gap-6 mb-12">
                    <Link
                        to="/admin/dashboard"
                        className="w-12 h-12 bg-[#111] border border-[#333] flex items-center justify-center hover:border-white transition-colors group"
                    >
                        <FaArrowLeft className="text-[#888] group-hover:-translate-x-1 group-hover:text-white transition-all" />
                    </Link>
                    <div>
                        <img src="/stat_logo.svg" alt="STAT RECOVERY" className="h-10 object-contain mix-blend-screen hover:mix-blend-normal transition-all mb-2" />
                        <p className="text-muted text-xs font-condensed font-bold uppercase tracking-widest mt-1">Configure hardware listing parameters</p>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#222] p-8 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-3">Model Designation *</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="e.g. Seagate Enterprise 8TB"
                                className="w-full px-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-3">Asset URL (Image) *</label>
                            <input
                                type="url"
                                name="image"
                                value={form.image}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="w-full px-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans"
                                required
                            />
                            {form.image && (
                                <div className="mt-4 border border-[#333] bg-[#111] aspect-[21/9] overflow-hidden">
                                    <img src={form.image} alt="Preview" className="w-full h-full object-cover filter grayscale contrast-125" onError={(e) => e.target.style.display = 'none'} />
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-3">Storage Capacity *</label>
                                <input
                                    type="text"
                                    name="capacity"
                                    value={form.capacity}
                                    onChange={handleChange}
                                    placeholder="e.g. 2TB"
                                    className="w-full px-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-3">Hardware Category</label>
                                <select
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans appearance-none rounded-none"
                                >
                                    <option value="" className="bg-[#111]">Select category</option>
                                    <option value="Internal HDD" className="bg-[#111]">Internal HDD</option>
                                    <option value="External HDD" className="bg-[#111]">External HDD</option>
                                    <option value="SSD" className="bg-[#111]">SSD</option>
                                    <option value="NAS" className="bg-[#111]">NAS</option>
                                    <option value="NAS HDD" className="bg-[#111]">NAS HDD</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-3">Specification Details *</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Enter operational parameters..."
                                className="w-full px-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Features */}
                        <div>
                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-3">Technical Features</label>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    value={featureInput}
                                    onChange={(e) => setFeatureInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                                    placeholder="Add parameter and press Enter"
                                    className="flex-1 px-4 py-3 bg-[#111] border border-[#333] text-white focus:border-accent outline-none transition-colors text-sm font-sans"
                                />
                                <button
                                    type="button"
                                    onClick={addFeature}
                                    className="px-6 py-3 bg-[#222] text-white hover:bg-white hover:text-black transition-colors font-condensed font-bold uppercase tracking-widest flex items-center justify-center border border-transparent hover:border-white"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                            {form.features.length > 0 && (
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {form.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 border border-[#333] bg-[#111] text-[#ccc] text-xs font-sans px-3 py-2 group hover:border-accent transition-colors"
                                        >
                                            {feature}
                                            <button type="button" onClick={() => removeFeature(index)} className="text-[#666] group-hover:text-accent transition-colors">
                                                <FaTimes className="text-sm" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#222]">
                            <button type="submit" className="btn-primary sm:flex-1 py-4">
                                Execute Deployment
                            </button>
                            <Link
                                to="/admin/dashboard"
                                className="btn-outline sm:flex-1 py-4 flex items-center justify-center"
                            >
                                Abort
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
