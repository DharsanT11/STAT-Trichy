import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Contact from '../pages/Contact';
import Login from '../admin/Login';
import Dashboard from '../admin/Dashboard';
import AddProduct from '../admin/AddProduct';
import ManageProducts from '../admin/ManageProducts';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/manage-products" element={<ManageProducts />} />
        </Routes>
    );
};

export default AppRoutes;
