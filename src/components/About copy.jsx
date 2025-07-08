import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Re:joice
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            우리의 일상 속에서 하나님을 경험하는 방법을 제안합니다
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Problem Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/images/about1.jpg"
                alt="About Re:joice 1"
                className="rounded-2xl shadow-lg w-3/4 aspect-square object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem: 일상과 신앙의 분리</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">버거운 일상</h4>
                  <p className="text-gray-600 leading-relaxed">
                    삶이 너무 바쁘고 벅차고 힘들기에, 하나님을 바라보는 시선이 쉽게 흐려집니다.<br/>
                    신앙적 루틴과 묵상이 삶의 무게에 눌려 밀려나게 됩니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">통합 공간의 부재</h4>
                  <p className="text-gray-600 leading-relaxed">
                    일상과 신앙을 함께 기록하고 매개할 수 있는 공간이 없습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">미학적 간극</h4>
                  <p className="text-gray-600 leading-relaxed">
                    일상의 공간과 신앙의 공간이 디자인 언어가 다릅니다.<br/>
                    신앙을 위한 아이템이 일상에서 자연스럽게 사용하기 어렵고, 결국 따로 구분됩니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Goal Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 md:order-2"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/images/about2.jpg"
                alt="About Re:joice 2"
                className="rounded-2xl shadow-lg w-3/4 aspect-square object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 md:order-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Goal: 나의 하루가 곧 예배가 되는 삶</h3>
              <p className="text-gray-600 leading-relaxed space-y-2">
                세련된 감성 속에 믿음을 담다,<br/>
                Re:joice는 신앙이 부끄럽지 않고 자랑스러울 수 있도록,<br/>
                20대 여성의 일상에 어울리는 아름답고 감각적인 크리스천 다이어리를 만듭니다.<br/><br/>
                바쁜 하루 속에도 주님과 연결된 시간을 만들고 싶은 당신에게,<br/>
                믿음을 나만의 언어로 기록할 수 있는 공간을 선물합니다.<br/><br/>
                당신의 믿음이 다시 기쁨이 되도록 — Re:joice
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;