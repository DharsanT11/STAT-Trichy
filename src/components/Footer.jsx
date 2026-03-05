import { Link } from 'react-router-dom';
import { FiHardDrive, FiCpu, FiServer, FiMonitor, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-[#222]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/stat_logo.svg" alt="STAT RECOVERY" className="h-[50px] object-contain mix-blend-screen hover:mix-blend-normal transition-all" />
                        </Link>
                        <p className="text-muted text-sm leading-relaxed font-sans pr-4">
                            Professional data recovery services specializing in complex mechanical and logical failures. We rescue data when others fail.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-condensed font-bold uppercase tracking-widest mb-6 text-sm">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Our Services', path: '/services' },
                                { name: 'Storage Products', path: '/products' },
                                { name: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-muted hover:text-accent font-sans text-sm transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-condensed font-bold uppercase tracking-widest mb-6 text-sm">Services</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Hard Disk Recovery', icon: FiHardDrive },
                                { name: 'SSD Recovery', icon: FiCpu },
                                { name: 'RAID Array Recovery', icon: FiServer },
                                { name: 'Laptop Recovery', icon: FiMonitor },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link to="/services" className="text-muted hover:text-accent font-sans text-sm transition-colors duration-300 flex items-center gap-2 group">
                                        <service.icon className="text-[#333] group-hover:text-accent transition-colors duration-300" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-condensed font-bold uppercase tracking-widest mb-6 text-sm">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted text-sm font-sans">
                                <FiMapPin className="text-[#333] mt-1 shrink-0" />
                                <span>123 Tech Park, Electronic City<br />Bangalore, KA 560100</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted text-sm font-sans hover:text-white transition-colors">
                                <FiPhone className="text-[#333] shrink-0" />
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted text-sm font-sans hover:text-white transition-colors">
                                <FiMail className="text-[#333] shrink-0" />
                                <a href="mailto:info@statrecovery.com">info@statrecovery.com</a>
                            </li>
                            <li className="pt-2">
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-whatsapp font-condensed font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    WhatsApp Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section-divider mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-[#555]">
                    <p>&copy; {new Date().getFullYear()} STAT DATA Recovery. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
