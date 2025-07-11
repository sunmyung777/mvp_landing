import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 gap-8 mb-32"
        >
          <div className="col-span-12 md:col-span-4 md:col-start-2">
            <h2 className="font-display text-6xl md:text-7xl font-bold text-primary-dark tracking-tight">
              About
              <br />
              <span className="text-primary-light">Re:joice</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-secondary text-xl font-light leading-relaxed">
              우리의 일상 속에서
              <br />
              <span className="font-medium text-primary">하나님을 경험하는</span>
              <br />
              방법을 제안합니다
            </p>
          </div>
        </motion.div>

        <div className="space-y-40">
          {/* Problem Section */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6 md:col-start-2"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="absolute -top-8 -left-8 w-32 h-32 bg-primary rounded-full"
                ></motion.div>
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src="/images/about1.jpg"
                  alt="About Re:joice 1"
                  className="relative w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-4"
            >
              <h3 className="text-4xl font-bold text-primary-dark mb-12">Problem</h3>
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 bg-white rounded-lg shadow-sm border border-primary-light/20"
                >
                  <h4 className="text-xl font-medium text-primary-dark mb-3">버거운 일상</h4>
                  <p className="text-secondary leading-relaxed">
                    삶이 너무 바쁘고 벅차고 힘들기에, 하나님을 바라보는 시선이 쉽게 흐려집니다.
                    신앙적 루틴과 묵상이 삶의 무게에 눌려 밀려나게 됩니다.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 bg-white rounded-lg shadow-sm border border-primary-light/20"
                >
                  <h4 className="text-xl font-medium text-primary-dark mb-3">통합 공간의 부재</h4>
                  <p className="text-secondary leading-relaxed">
                    일상과 신앙을 함께 기록하고 매개할 수 있는 공간이 없습니다.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 bg-white rounded-lg shadow-sm border border-primary-light/20"
                >
                  <h4 className="text-xl font-medium text-primary-dark mb-3">미학적 간극</h4>
                  <p className="text-secondary leading-relaxed">
                    일상의 공간과 신앙의 공간이 디자인 언어가 다릅니다.
                    신앙을 위한 아이템이 일상에서 자연스럽게 사용하기 어렵고, 결국 따로 구분됩니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Goal Section */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-4 md:col-start-2"
            >
              <h3 className="text-4xl font-bold text-primary-dark mb-12">Goal</h3>
              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-light leading-relaxed"
                >
                  나의 하루가 곧
                  <br />
                  <span className="font-medium text-primary">예배가 되는 삶</span>
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-secondary leading-relaxed space-y-6 p-8 bg-white rounded-lg shadow-sm border border-primary-light/20"
                >
                  <p>
                    세련된 감성 속에 믿음을 담다,
                    <br />
                    Re:joice는 신앙이 부끄럽지 않고 자랑스러울 수 있도록,
                    <br />
                    20대 여성의 일상에 어울리는 아름답고 감각적인 크리스천 다이어리를 만듭니다.
                  </p>
                  <p>
                    바쁜 하루 속에도 주님과 연결된 시간을 만들고 싶은 당신에게,
                    <br />
                    믿음을 나만의 언어로 기록할 수 있는 공간을 선물합니다.
                  </p>
                  <p className="text-xl font-medium text-primary">
                    당신의 믿음이 다시 기쁨이 되도록 — Re:joice
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary rounded-full"
                ></motion.div>
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src="/images/about2.jpg"
                  alt="About Re:joice 2"
                  className="relative w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;