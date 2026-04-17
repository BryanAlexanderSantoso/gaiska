import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Package, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: "Sparepart Original",
    description: "Menyediakan sparepart motor original dari berbagai merk ternama"
  },
  {
    icon: Wrench,
    title: "Aksesoris Motor",
    description: "Koleksi lengkap aksesoris motor untuk semua jenis dan model"
  },
  {
    icon: Users,
    title: "Sistem Kemitraan",
    description: "Program kemitraan toko sparepart dengan dukungan penuh"
  },
  {
    icon: Shield,
    title: "Garansi Kualitas",
    description: "Semua produk bergaransi dengan kualitas terjamin"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solusi lengkap untuk kebutuhan sparepart motor dan pengembangan bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gradient-border"
            >
              <div className="gradient-border-inner p-8 text-center space-y-4 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;