import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
const OwnerPage = () => {
  return <HelmetProvider>
      <Helmet>
        <title>Owner & Tim Gaiska Motor</title>
        <meta name="description" content="Profil Owner dan Tim Gaiska Motor. Komitmen kami adalah memberikan yang terbaik untuk Anda." />
      </Helmet>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center pt-32 pb-16 hero-bg">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="max-w-4xl mx-auto bg-slate-800/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-500/20 card-glow">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
              <motion.div className="relative" initial={{
              x: -50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.7,
              delay: 0.2
            }}>
                <img src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/whatsapp-image-2025-09-12-at-18.06.11_40ca296c-4UYEt.jpg" alt="Owner Gaiska Motor" className="rounded-2xl w-full h-auto shadow-lg" style={{
                aspectRatio: '1 / 1',
                objectFit: 'cover'
              }} />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shadow-lg flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-300" />
                  <span className="font-bold text-white text-sm">(Owner) Irpan Cahyadi</span>
                </div>
              </motion.div>

              <motion.div className="text-center md:text-left" initial={{
              x: 50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.7,
              delay: 0.4
            }}>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-4">
                  Owner Bisnis
                </h1>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Dengan pengalaman dan dedikasi, kami berkomitmen untuk menyediakan produk dan layanan terbaik bagi seluruh mitra dan pelanggan Gaiska Motor. Kepercayaan Anda adalah prioritas utama kami.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-16">
              <motion.div className="relative md:order-2"
            initial={{
              x: 50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.7,
              delay: 0.6
            }}>
                
              </motion.div>

              <motion.div className="text-center md:text-left md:order-1"
            initial={{
              x: -50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.7,
              delay: 0.8
            }}>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-16">
              <motion.div className="relative" initial={{
              x: -50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.7,
              delay: 1.0
            }}>
              </motion.div>

              <motion.div className="text-center md:text-left" initial={{
              x: 50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.7,
              delay: 1.2
            }}>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-8">
                Legalitas Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.4 }}
                >
                  <img alt="Dokumen Legalitas Perusahaan Gaiska Motor - NPWP CV Gaiska Putra Mandiri dan NPWP Irpan Cahyadi" class="rounded-lg w-full h-auto shadow-lg object-cover" src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/ed1fb25ccf761e8684f8d4792c6de9d1.jpg" />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.6 }}
                >
                  <img alt="Dokumen Legalitas Perusahaan Gaiska Motor - Surat Izin Usaha Perdagangan (SIUP) Kecil" class="rounded-lg w-full h-auto shadow-lg object-cover" src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/ecd6f9affc28cc88e0731dba51e31146.jpg" />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.8 }}
                >
                  <img alt="Dokumen Legalitas Perusahaan Gaiska Motor - Surat Keterangan Terdaftar Direktorat Jenderal Pajak" class="rounded-lg w-full h-auto shadow-lg object-cover" src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/4fb28b6e042d164f88959c5bed4e0faa.jpg" />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 2.0 }}
                >
                  <img alt="Dokumen Legalitas Perusahaan Gaiska Motor - Tanda Daftar Perusahaan Perorangan (PO)" class="rounded-lg w-full h-auto shadow-lg object-cover" src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/9dcedb700ffbb0979cf7225799274f86.jpg" />
                </motion.div>
              </div>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 2.2
          }} className="text-center mt-16">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 pulse-glow">
                <Link to="/">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </HelmetProvider>;
};
export default OwnerPage;