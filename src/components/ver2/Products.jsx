import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const Products = () => {
  // 메인 페이지에서는 처음 3개의 제품만 보여줍니다
  const featuredProducts = products.slice(0, 3);

  return (
    <section id="products" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-4 md:col-start-2"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-primary-dark tracking-tight">
              Featured
              <br />
              <span className="text-primary-light">Products</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-4 md:col-start-7 flex items-end"
          >
            <p className="text-xl text-secondary font-light">
              믿음의 메시지를 담은
              <br />
              <span className="font-medium text-primary">특별한 제품들</span>
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-12 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="col-span-12 md:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link
                to={`/products/${product.id}`}
                className="block group"
              >
                <div className="relative overflow-hidden">
                  {/* Background Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"
                  />

                  {/* Product Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="object-cover object-center w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-primary bg-opacity-20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <span className="text-primary-dark font-medium px-6 py-3 bg-white/80 rounded-lg hover:bg-white hover:text-primary transition-colors duration-300">
                        자세히 보기
                      </span>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-6 space-y-2">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      className="text-2xl font-medium text-primary-dark"
                    >
                      {product.title}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      className="flex justify-between items-center"
                    >
                      <p className="text-lg text-secondary">{product.price}</p>
                      <div className="h-px w-12 bg-primary-light group-hover:w-24 group-hover:bg-primary transition-all duration-300" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24"
        >
          <Link
            to="/products"
            className="inline-flex items-center group bg-white px-8 py-4 rounded-lg shadow-sm border border-primary-light/20 hover:shadow-md transition-all duration-300"
          >
            <span className="text-xl font-medium text-primary group-hover:text-primary-dark transition-colors duration-300">
              모든 제품 보기
            </span>
            <div className="ml-4 w-12 h-px bg-primary group-hover:w-24 group-hover:bg-primary-dark transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;