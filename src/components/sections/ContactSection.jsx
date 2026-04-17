import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ContactSection = () => {
  const whatsappLink = "https://wa.me/6282310768188";
  return <section id="contact" className="py-20">
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
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siap memulai bisnis sparepart motor? Hubungi kami sekarang untuk konsultasi gratis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div className="gradient-border rounded-xl">
              <div className="gradient-border-inner p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Telepon</h3>
                    <p className="text-gray-300">(0263) 56834675 - 082310768188</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Email</h3>
                    <p className="text-gray-300">cs_pusat @gaiskamotor.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Alamat</h3>
                    <p className="text-gray-300">Komplek Pergudangan Cianjur Raya Kav.18 Cianjur Jawa Barat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-xl text-lg transition-all duration-300 pulse-glow">
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <img src="https://images.unsplash.com/photo-1694274855681-1b12cd585066" alt="Tim profesional Gaiska Motor siap membantu" className="w-full h-full object-cover rounded-xl card-glow" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;