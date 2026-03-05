import seedProducts from '../data/products.json';

const STORAGE_KEY = 'stat_recovery_products';

export const getProducts = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    // Initialize with seed data on first load
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedProducts));
    return seedProducts;
};

export const saveProducts = (products) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const addProduct = (product) => {
    const products = getProducts();
    const newProduct = {
        ...product,
        id: Date.now(),
    };
    products.push(newProduct);
    saveProducts(products);
    return newProduct;
};

export const updateProduct = (id, updatedData) => {
    const products = getProducts();
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedData };
        saveProducts(products);
        return products[index];
    }
    return null;
};

export const deleteProduct = (id) => {
    const products = getProducts();
    const filtered = products.filter((p) => p.id !== id);
    saveProducts(filtered);
    return filtered;
};

export const getProductById = (id) => {
    const products = getProducts();
    return products.find((p) => p.id === Number(id));
};

// Admin auth helpers
const AUTH_KEY = 'stat_admin_auth';

export const isAuthenticated = () => {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
};

export const loginAdmin = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
        sessionStorage.setItem(AUTH_KEY, 'true');
        return true;
    }
    return false;
};

export const logoutAdmin = () => {
    sessionStorage.removeItem(AUTH_KEY);
};
