
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
const Header = ({
  setIsCartOpen
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    to: '/',
    text: 'Beranda'
  }, {
    to: '/store',
    text: 'Produk kami'
  }, {
    to: '/#packages',
    text: 'Paket'
  }, {
    to: '/owner',
    text: 'team dan legalitas kami'
  }, {
    to: '/#contact',
    text: 'Kontak'
  }];
  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/GKFdcMAywKvQxDn58', '_blank');
  };
  const handleContactClick = () => {
    window.location.href = 'https://wa.me/082310768188';
  };
  const handleNavClick = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        window.location.href = to;
      } else {
        const id = to.substring(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
    setIsMenuOpen(false);
  };
  const menuVariants = {
    hidden: {
      x: '100%'
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };
  return <>
      <motion.header initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.8
    }} className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/5586e55e19bccc6290055edba7da67ec.png" alt="Gaiska Motor Logo" className="w-12 h-12" />
              <div>
                <h1 className="font-orbitron font-bold text-xl glow-text">GAISKA MOTOR</h1>
                <p className="text-xs text-blue-300">Sparepart & Partnership</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navLinks.map(link => <Link key={link.to} to={link.to} onClick={e => handleNavClick(e, link.to)} className="text-white hover:text-blue-400 transition-colors">
                  {link.text}
                </Link>)}
            </nav>

            <Button onClick={handleLocationClick} className="hidden md:flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 pulse-glow">our location</Button>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="hidden" className="fixed inset-0 z-50 bg-slate-900/95 p-8 md:hidden">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map(link => <Link key={link.to} to={link.to} className="text-white text-2xl hover:text-blue-400 transition-colors" onClick={e => handleNavClick(e, link.to)}>
                  {link.text}
                </Link>)}
              <Button onClick={() => {
            handleContactClick();
            setIsMenuOpen(false);
          }} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg text-lg mt-8">
                Hubungi Kami
              </Button>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default Header;
