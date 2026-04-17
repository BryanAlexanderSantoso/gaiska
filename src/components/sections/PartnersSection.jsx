import React from 'react';
import { motion } from 'framer-motion';

const partnerLogos = [
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/fa1d5ae3c0644067698a1c8d27d0261b.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/40b9080ad96116be6d5e7b3a32da2e23.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/1e035ba5591e193520cd201936941f9a.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/57e3a12a24196490deb6649a95c00685.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/ef889699cd0b2e17cb5010296e1f7a2a.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/20f041f444791300017fb006dd555778.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/a515cb3bea92be27b4b46e7763ccd4ef.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/b4839475574d75a9efdb70546af9ec51.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/8134a4dbc676844bd8ac9ac9bb3b3f0e.jpg",
  "https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/b4327a2eaaac089ee33b97db2e36521a.jpg"
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
            Galeri Toko Mitra
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beberapa toko yang telah sukses menjalin kemitraan dengan Gaiska Motor.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={logo}
                alt={`Toko Mitra Gaiska Motor ${index + 1}`}
                className="w-full h-64 object-cover bg-slate-800"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;