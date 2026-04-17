import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const whatsappLink = "https://wa.me/6282310768188";
  return <section id="home" className="pt-32 pb-16 hero-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          x: -100,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          duration: 1
        }} className="space-y-8">
            <div className="space-y-4">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-black glow-text" initial={{
              scale: 0.8
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                GAISKA
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  MOTOR
                </span>
              </motion.h1>
              
              <motion.h2 className="text-xl lg:text-2xl text-blue-200 font-medium" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.5
            }}>Sparepart Motor Berkualitas & Program Kemitraan Terpercaya sejak 2006</motion.h2>
              
              <motion.p className="text-lg text-gray-300 leading-relaxed" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.7
            }}>bergabunglah dengan jaringan bisnis sparepart motor terbesr di indonesia.Kami menyediakan Paket lengkap untuk membuka toko sparepart motor di daerah anda</motion.p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
            y: 50,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            delay: 0.9
          }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 pulse-glow">
                  Lihat Stok Motor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300">
                  Hubungi Kami
                </Button>
              </a>
            </motion.div>

            <motion.div className="flex items-center space-x-8 pt-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.1
          }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Unit Terjual</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">Terlengkap</div>
                <div className="text-sm text-gray-400">Pilihan Motor</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">10+</div>
                <div className="text-sm text-gray-400">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          x: 100,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 0.3
        }} className="relative">
            <div className="floating-animation">
              <img src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/281636c66a56d0b428a3fc2dc560b163.jpg" alt="Toko sparepart Gaiska Motor yang lengkap" className="w-full h-auto rounded-2xl shadow-2xl card-glow" loading="lazy" />
            </div>
            
            <motion.div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl card-glow" initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 1.5,
            type: "spring"
          }}>
              <div className="flex items-center space-x-3">
                <Trophy className="w-8 h-8 text-yellow-300" />
                <div>
                  <p className="font-bold text-white">Penjual Terpercaya</p>
                  <p className="text-sm text-blue-100">Sejak 2006</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;