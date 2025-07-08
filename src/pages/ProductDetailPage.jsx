import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const [selectedOptions, setSelectedOptions] = useState({
    size: '',
    color: '',
    model: '',
    version: '',
    quantity: 1
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionType]: value
    }));
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(10, Number(e.target.value)));
    handleOptionChange('quantity', value);
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting restock notification:', {
        phone_number: phoneNumber,
        product_id: productId,
        product_name: product.title,
        selected_options: selectedOptions
      });

      const { data, error } = await supabase
        .from('restock_notifications')
        .insert([
          {
            phone_number: phoneNumber,
            product_id: productId,
            product_name: product.title,
            selected_options: selectedOptions,
            status: 'pending',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Submission successful:', data);
      alert('재입고 알림이 신청되었습니다.');
      setIsModalOpen(false);
      setPhoneNumber('');
    } catch (error) {
      console.error('Error details:', error);
      alert('알림 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제품을 찾을 수 없습니다</h2>
          <Link to="/products" className="text-gray-600 hover:text-gray-900">
            제품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* 제품 이미지 */}
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-center object-cover"
            />
          </div>

          {/* 제품 정보 */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">{product.price}</p>

            {/* 옵션 선택 */}
            <div className="mt-8">
              {/* 수량 선택 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">수량</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange({ target: { value: selectedOptions.quantity - 1 } })}
                    className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                    disabled={selectedOptions.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={selectedOptions.quantity}
                    onChange={handleQuantityChange}
                    className="w-20 text-center px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                  />
                  <button
                    onClick={() => handleQuantityChange({ target: { value: selectedOptions.quantity + 1 } })}
                    className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                    disabled={selectedOptions.quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>

              {product.sizes && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">사이즈</label>
                  <select
                    value={selectedOptions.size}
                    onChange={(e) => handleOptionChange('size', e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black rounded-md"
                  >
                    <option value="">선택해주세요</option>
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              )}

              {product.colors && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">색상</label>
                  <select
                    value={selectedOptions.color}
                    onChange={(e) => handleOptionChange('color', e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black rounded-md"
                  >
                    <option value="">선택해주세요</option>
                    {product.colors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
              )}

              {product.models && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">모델</label>
                  <select
                    value={selectedOptions.model}
                    onChange={(e) => handleOptionChange('model', e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black rounded-md"
                  >
                    <option value="">선택해주세요</option>
                    {product.models.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
              )}

              {product.versions && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">버전</label>
                  <select
                    value={selectedOptions.version}
                    onChange={(e) => handleOptionChange('version', e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black rounded-md"
                  >
                    <option value="">선택해주세요</option>
                    {product.versions.map((version) => (
                      <option key={version} value={version}>{version}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* 구매 버튼 */}
            <div className="mt-8 space-y-4">
              <button
                onClick={handleBuyClick}
                className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                구매하기
              </button>
            </div>
          </div>
        </div>

        {/* 상세 이미지 섹션 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">상세 정보</h2>
          <div className="space-y-8">
            {product.detailImages?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${product.title} 상세 이미지 ${index + 1}`}
                  className="w-full h-full object-center object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 매진/재입고 알림 모달 */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-sm w-full"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">죄송합니다</h3>
              <p className="text-gray-600 mb-6">
                현재 상품이 매진되었습니다. 재입고 알림을 신청하시면 상품 입고 시 알려드리겠습니다.
              </p>
              <form onSubmit={handlePhoneSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    휴대폰 번호
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                    disabled={isSubmitting}
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 disabled:bg-gray-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '처리 중...' : '알림 신청'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailPage;