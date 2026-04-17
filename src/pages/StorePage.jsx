import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';

const StorePage = () => {
  return (
    <>
      <Helmet>
        <title>Toko - Gaiska Motor</title>
        <meta name="description" content="Jelajahi katalog lengkap sparepart dan aksesoris motor berkualitas dari Gaiska Motor." />
      </Helmet>
      <div className="container mx-auto px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-orbitron font-black glow-text">
            Toko Online
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Gaiska Motor
            </span>
          </h1>
          <p className="mt-4 text-xl text-blue-200">Temukan semua kebutuhan sparepart dan aksesoris motor Anda di sini.</p>
        </motion.div>
        <ProductsList />
      </div>
    </>
  );
};

export default StorePage;