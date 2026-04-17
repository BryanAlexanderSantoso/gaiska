import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: "Paket Starter",
    price: "Rp 15.000.000",
    description: "Cocok untuk memulai bisnis sparepart motor di daerah kecil",
    features: [
      "50 jenis sparepart dasar",
      "Oli motor berbagai merk",
      "Aksesoris motor standar",
      "Training bisnis 1 hari",
      "Support online 3 bulan"
    ],
    popular: false
  },
  {
    name: "Paket Professional",
    price: "Rp 35.000.000",
    description: "Solusi lengkap untuk toko sparepart motor menengah",
    features: [
      "150 jenis sparepart lengkap",
      "Oli motor premium & standar",
      "Aksesoris motor lengkap",
      "Spare part racing",
      "Training bisnis 3 hari",
      "Support online 6 bulan",
      "Sistem kasir digital"
    ],
    popular: true
  },
  {
    name: "Paket Master",
    price: "Rp 75.000.000",
    description: "Paket premium untuk toko sparepart motor besar",
    features: [
      "300+ jenis sparepart premium",
      "Oli motor semua kategori",
      "Aksesoris motor premium",
      "Spare part racing lengkap",
      "Peralatan bengkel dasar",
      "Training bisnis 7 hari",
      "Support online 1 tahun",
      "Sistem kasir & inventory",
      "Marketing support"
    ],
    popular: false
  }
];

const PackagesSection = () => {
  const whatsappLink = "https://wa.me/6282310768188";

  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
            Paket Kemitraan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda untuk memulai bisnis sparepart motor
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col ${pkg.popular ? 'gradient-border' : 'border border-slate-600'} rounded-xl`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    TERPOPULER
                  </div>
                </div>
              )}
              
              <div className={`flex flex-col flex-grow ${pkg.popular ? 'gradient-border-inner' : 'bg-slate-800/50'} p-8 rounded-xl`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-gray-300">{pkg.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className={`w-full mt-auto ${pkg.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                      : 'bg-slate-700 hover:bg-slate-600'
                    } text-white font-bold py-3 rounded-lg transition-all duration-300`}
                  >
                    Pilih Paket Ini
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;