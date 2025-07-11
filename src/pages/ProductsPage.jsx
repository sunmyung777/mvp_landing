import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">믿음의 메시지를 담은 특별한 제품들</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link to={`/products/${product.id}`} className="block">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-center object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                  <p className="mt-1 text-gray-600">{product.price}</p>
                  <p className="mt-2 text-sm text-gray-500">{product.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;