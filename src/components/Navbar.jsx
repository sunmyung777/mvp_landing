import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            <img src="/images/Logo.png" alt="Re:joice" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-gray-600">Home</Link>
            <a href="#about" className="text-gray-900 hover:text-gray-600">About</a>
            <a href="/products" className="text-gray-900 hover:text-gray-600">Products</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;