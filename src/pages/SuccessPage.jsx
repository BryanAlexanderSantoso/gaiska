import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>Pembayaran Berhasil - Gaiska Motor</title>
        <meta name="description" content="Halaman konfirmasi pembayaran berhasil untuk Gaiska Motor." />
      </Helmet>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl text-center max-w-2xl w-full border border-green-500/30"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
          >
            <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-4xl font-orbitron font-bold text-white mb-4">Pembayaran Berhasil!</h1>
          <p className="text-lg text-gray-300 mb-8">
            Terima kasih atas pesanan Anda. Kami akan segera memprosesnya dan mengirimkan konfirmasi ke email Anda.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 pulse-glow">
            <Link to="/store">
              Lanjutkan Belanja
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessPage;