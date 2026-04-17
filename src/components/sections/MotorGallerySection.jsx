import React from 'react';
import { motion } from 'framer-motion';
const motorImages = [{
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/7692adcfdb63e38ca1b4911f405413ca.jpg",
  alt: "Showroom motor Gaiska Motor dengan berbagai pilihan"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/6a1e275a3f048a9221cdb812b35ef9c0.jpg",
  alt: "Deretan motor second berkualitas di Gaiska Motor"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/88f46c8f36dcbeaf0ee741b9d18f9599.jpg",
  alt: "Motor matic dan bebek second siap jual"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/f6a04694532d2624df071dd64c98a622.jpg",
  alt: "Pintu masuk showroom Gaiska Motor"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/94f8cd6fe872509bd3aff682e3421afe.jpg",
  alt: "Pengiriman motor ke pelanggan"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/f98b7e736097c43d2348e2f4361fa67e.jpg",
  alt: "Stok motor di dalam gudang Gaiska Motor"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/624a2d6926798200152b4c7b8f65f87e.jpg",
  alt: "Armada pengiriman motor Gaiska Motor"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/547e5d21e7eb26341c6c571ecba1cf49.jpg",
  alt: "Berbagai jenis motor second yang tersedia"
}, {
  src: "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/2831b5422bc15d9f4e940f77ce972792.jpg",
  alt: "Proses pengecekan dan pengangkutan motor"
}];
const MotorGallerySection = () => {
  return <section id="motor-gallery" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
            DIVISI PENJUALAN MOTOR SECOND DAN NEW
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Selain Divisi Kemitraan Toko kami juga menjual motor baru dan bekas dengan kualitas terbaik. Dokumentasi dari unit usaha penjualan motor baru dan bekas kami. Kualitas dan kepercayaan adalah jaminan kami.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {motorImages.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src={item.src} alt={item.alt} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" loading="lazy" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default MotorGallerySection;