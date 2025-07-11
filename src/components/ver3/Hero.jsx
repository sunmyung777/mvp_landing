import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // 폰트 로딩 확인
    const checkFont = () => {
      const fonts = document.fonts;
      fonts.ready.then(() => {
        const isPretendardLoaded = fonts.check('1em Pretendard');
        console.log('Pretendard font loaded:', isPretendardLoaded);
      });
    };

    checkFont();
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Decorative Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Giant Heart */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute -right-1/4 -bottom-1/4 text-[80rem] text-gray-100 select-none transform -rotate-12"
        >
          ♥
        </motion.div>

        {/* Medium Hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Large decorative text */}
          <div className="absolute -top-20 -left-20 text-[20rem] font-black text-gray-100 opacity-20 select-none">
            RE
          </div>
          <div className="absolute top-1/3 -right-20 text-[20rem] font-black text-gray-100 opacity-20 select-none">
            JOICE
          </div>

          {/* Hearts pattern - various sizes */}
          <div className="absolute -top-20 left-1/4 text-[30rem] opacity-5 transform rotate-12">♥</div>
          <div className="absolute top-1/3 -left-20 text-[25rem] opacity-3 transform -rotate-12">♥</div>
          <div className="absolute bottom-0 right-1/4 text-[35rem] opacity-4 transform rotate-6">♥</div>

          {/* Smaller scattered hearts */}
          <div className="absolute top-20 left-20 text-8xl opacity-8">♥</div>
          <div className="absolute top-40 right-40 text-6xl opacity-5 transform rotate-45">♥</div>
          <div className="absolute bottom-40 left-1/3 text-7xl opacity-6 transform -rotate-12">♥</div>
          <div className="absolute top-1/2 right-1/4 text-9xl opacity-7 transform rotate-12">♥</div>
          <div className="absolute bottom-20 right-20 text-5xl opacity-8 transform rotate-45">♥</div>
          <div className="absolute top-1/4 left-1/2 text-4xl opacity-5 transform -rotate-45">♥</div>
          <div className="absolute bottom-1/3 right-1/3 text-6xl opacity-6">♥</div>
          <div className="absolute top-2/3 left-1/4 text-7xl opacity-7 transform rotate-180">♥</div>
          <div className="absolute top-1/3 right-1/2 text-5xl opacity-5 transform -rotate-90">♥</div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-bold leading-tight mb-8 text-gray-900 text-center relative z-10"
          >
            Re:joice
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-center relative z-10"
          >
            <p className="text-2xl md:text-3xl mb-6 text-gray-700 font-light tracking-tight">
              일상과 신앙의 간극을 메우는 브랜드
            </p>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 font-light leading-relaxed tracking-tight">
              삶의 모든 순간이 하나님 앞에서
              <br className="hidden md:block" />
              의미있고 아름답게 드러나는 삶
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center relative z-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="inline-block bg-gray-900 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300"
            >
              더 알아보기
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-white text-gray-900 border-2 border-gray-900 font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
            >
              문의하기
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;