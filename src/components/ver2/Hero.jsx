import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Main Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full">
          {/* Large Background Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-0 w-full pointer-events-none select-none"
          >
            <h1 className="text-[20vw] font-display font-bold text-softpink-light text-center leading-none">
              REJOICE
            </h1>
          </motion.div>

          {/* Content Grid */}
          <div className="relative container mx-auto px-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Main Title */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="col-span-12 md:col-span-6 md:col-start-2"
              >
                <h2 className="font-display text-8xl md:text-9xl font-bold mb-4 tracking-tighter">
                  Re:
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-softpink"
                  >
                    joice
                  </motion.span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-12 md:col-span-4 md:col-start-7 flex flex-col justify-center"
              >
                <p className="text-2xl md:text-3xl mb-6 font-light">
                  일상과 신앙의
                  <br />
                  <span className="font-medium text-softpink-dark">간극을 메우는</span>
                  <br />
                  브랜드
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-8 font-light leading-relaxed">
                  삶의 모든 순간이 하나님 앞에서
                  <br />
                  의미있고 아름답게 드러나는 삶
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-12 md:col-span-4 md:col-start-7 flex flex-col md:flex-row gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#about"
                  className="px-8 py-4 bg-softpink text-white text-lg font-medium rounded-none hover:bg-softpink-dark transition-colors duration-300"
                >
                  더 알아보기
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,181,199,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-4 border border-softpink text-softpink text-lg font-medium rounded-none hover:bg-softpink-light/20 transition-colors duration-300"
                >
                  문의하기
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute bottom-0 right-0 w-1/3 h-1/3 pointer-events-none"
          >
            <div className="absolute bottom-0 right-0 w-full h-full border-l-2 border-t-2 border-softpink-light"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="absolute top-0 left-0 w-1/4 h-1/4 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-full h-full border-r-2 border-b-2 border-softpink-light"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;