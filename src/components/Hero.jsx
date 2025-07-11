import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-illustration.png"
          alt="Re:joice Brand Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.22)] to-[rgba(255,245,247,0.85)] backdrop-blur-[1px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-100/30 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-50/30 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative">
        <div className="max-w-2xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/Logo2.png"
              alt="Re:joice"
              className="h-24 md:h-28 w-auto mb-6 filter drop-shadow-lg"
            />
            <p className="text-[#FF1493] font-elegant italic text-2xl uppercase tracking-widest mb-4
               drop-shadow-[0_0_8px_rgba(255,20,147,0.2)] font-extrabold">
              Brand Identity
            </p>
            <p className="text-gray-700 font-elegant italic text-xl uppercase tracking-wide font-black">
              Christian Lifestyle
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8 pt-6"
          >
            <a href="https://www.youtube.com/@yonmed_run" className="font-elegant italic text-base text-gray-600 font-semibold hover:text-[#FF1493] transition-colors duration-300
                               hover:drop-shadow-[0_0_8px_rgba(255,20,147,0.2)]">Youtube</a>
            <a href="https://www.tiktok.com/@forminkedv9" className="font-elegant italic text-base text-gray-600 font-semibold hover:text-[#FF1493] transition-colors duration-300
                               hover:drop-shadow-[0_0_8px_rgba(255,20,147,0.2)]">Tiktok</a>
            <a href="https://www.instagram.com/yonmed_run" className="font-elegant italic text-base text-gray-600 font-semibold hover:text-[#FF1493] transition-colors duration-300
                               hover:drop-shadow-[0_0_8px_rgba(255,20,147,0.2)]">Instagram</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;