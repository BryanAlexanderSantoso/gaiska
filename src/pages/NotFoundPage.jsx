import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta name="description" content="Halaman yang Anda cari tidak dapat ditemukan." />
      </Helmet>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl text-center max-w-2xl w-full border border-yellow-500/30"
        >
          <AlertTriangle className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-6xl font-orbitron font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-lg text-gray-300 mb-8">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300">
            <Link to="/">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Kembali ke Beranda
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;