import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="/images/love.jpg"
          alt="Re:joice Brand Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black/40"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display italic text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
          >
            Re:joice
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-6 text-white/90 font-body"
          >
            일상과 신앙의 간극을 메우는 브랜드
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 text-white/80 font-body leading-relaxed"
          >
            삶의 모든 순간이 하나님 앞에서
            <br className="hidden md:block" />
            의미있고 아름답게 드러나는 삶
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out"
            >
              더 알아보기
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out"
            >
              문의하기
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;