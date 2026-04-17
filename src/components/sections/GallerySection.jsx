import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1686561872595-6b5f0cc024f2",
    alt: "Koleksi oli motor berbagai merk premium",
    title: "Oli Motor Premium",
    description: "Koleksi lengkap oli motor dari berbagai merk ternama",
  },
  {
    src: "https://images.unsplash.com/photo-1699522785139-4745e9411756",
    alt: "Sparepart motor original berkualitas tinggi",
    title: "Sparepart Original",
    description: "Sparepart motor original dengan garansi kualitas",
  },
  {
    src: "https://images.unsplash.com/photo-1689910506210-3999659467ae",
    alt: "Aksesoris motor racing dan modifikasi",
    title: "Aksesoris Racing",
    description: "Aksesoris motor racing untuk performa maksimal",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
            Galeri Produk
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lihat koleksi lengkap sparepart dan aksesoris motor berkualitas tinggi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gradient-border rounded-xl overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="gradient-border-inner p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;