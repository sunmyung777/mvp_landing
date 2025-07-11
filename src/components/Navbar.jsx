import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-text backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            <img
              src={isScrolled ? "/images/Logo.png" : "/images/Logo2.png"}
              alt="Re:joice"
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`hover:opacity-75 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-gray-800'
              }`}
            >
              Home
            </Link>
            <a
              href="/#about"
              className={`hover:opacity-75 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-gray-800'
              }`}
            >
              About
            </a>
            <a
              href="/products"
              className={`hover:opacity-75 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-gray-800'
              }`}
            >
              Products
            </a>
            <a
              href="/#contact"
              className={`hover:opacity-75 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-gray-800'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;