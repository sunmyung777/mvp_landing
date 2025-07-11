import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form:', formData);

      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            status: 'unread',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Submission successful:', data);
      alert("메시지가 성공적으로 전송되었습니다!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error details:', error);
      alert('메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-96 h-96 rounded-full border-2 border-primary absolute -top-48 -left-48 opacity-20" />
          <div className="w-64 h-64 rounded-full border-2 border-primary absolute top-1/2 -right-32 opacity-20" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6">
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
              Contact
              <br />
              <span className="text-primary-light">Us</span>
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
              Re:joice와 함께
              <br />
              <span className="font-medium text-primary">하고 싶으신가요?</span>
              <br />
              언제든 연락주세요
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Contact Form */}
          <div className="col-span-12 md:col-span-8 md:col-start-2">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 p-8 bg-white rounded-lg shadow-sm border border-primary-light/20"
            >
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="col-span-2 md:col-span-1"
                >
                  <label className="block text-sm font-medium text-primary-dark mb-2">이름</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background rounded-lg border-0 focus:ring-2 focus:ring-primary transition-all duration-300 text-lg"
                    placeholder="홍길동"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="col-span-2 md:col-span-1"
                >
                  <label className="block text-sm font-medium text-primary-dark mb-2">이메일</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background rounded-lg border-0 focus:ring-2 focus:ring-primary transition-all duration-300 text-lg"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-2"
              >
                <label className="block text-sm font-medium text-primary-dark mb-2">메시지</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background rounded-lg border-0 focus:ring-2 focus:ring-primary transition-all duration-300 text-lg min-h-[120px] resize-none"
                  placeholder="문의하실 내용을 입력해주세요"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-8"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-primary text-white px-8 py-4 text-lg inline-flex items-center rounded-lg shadow-sm hover:bg-primary-dark transition-colors duration-300"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "전송 중..." : "Send Message"}
                  </span>
                </motion.button>
              </motion.div>
            </motion.form>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-24 flex items-center space-x-12"
            >
              <div className="text-sm text-primary font-medium">Follow Us</div>
              <div className="h-px flex-1 bg-primary-light/20" />
              <div className="flex space-x-8">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="mailto:formindsinone@gmail.com"
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  Email
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://instagram.com/yonmed_run"
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  Instagram
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://facebook.com/rejoice"
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  Facebook
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;