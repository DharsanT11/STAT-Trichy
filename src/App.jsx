import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import AppRoutes from './routes/AppRoutes';

const App = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="flex flex-col min-h-screen">
            {!isAdminRoute && <Navbar />}
            <main className="flex-1">
                <AppRoutes />
            </main>
            {!isAdminRoute && <Footer />}
            {!isAdminRoute && <WhatsappButton />}
        </div>
    );
};

export default App;
