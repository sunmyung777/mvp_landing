import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const Products = () => {
  // 메인 페이지에서는 처음 3개의 제품만 보여줍니다
  const featuredProducts = products.slice(0, 3);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">믿음의 메시지를 담은 특별한 제품들</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/products/${product.id}`}>
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                  <p className="mt-1 text-gray-600">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            모든 제품 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;