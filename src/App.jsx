import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import './App.css';

function App() {
  useEffect(() => {
    console.log('App mounted');  // 디버깅용 로그
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Add smooth scroll snap
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollSnapType = 'y mandatory';

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollSnapType = '';
    };
  }, []);

  return (
    <Router>
      <div className="bg-background text-text font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Products />
              <Contact />
            </main>
          } />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;