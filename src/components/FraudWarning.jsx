import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
const FraudWarning = ({
  isVisible,
  onClose
}) => {
  return <AnimatePresence>
      {isVisible && <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} transition={{
      duration: 0.5
    }} onClick={onClose}>
          <motion.div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-yellow-500/50 max-w-lg w-11/12 text-center cursor-default" initial={{
        scale: 0.5,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.5,
        opacity: 0
      }} transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-center mb-4">
              <ShieldAlert className="h-16 w-16 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold font-orbitron text-yellow-300 mb-3">
              PERHATIAN PENTING!
            </h2>
            <p className="text-lg text-slate-200 mb-4">
              Waspada penipuan yang mengatasnamakan Gaiska Motor. Pastikan Anda hanya menghubungi nomor resmi kami untuk segala transaksi.
            </p>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-base text-slate-300">Nomor Telepon Resmi:082310768188</p>
              <p className="text-2xl font-bold text-white tracking-wider">
                
              </p>
            </div>
            <p className="text-sm text-slate-400 mt-6">
              Keamanan dan kepercayaan Anda adalah prioritas kami.
            </p>
             <p className="text-xs text-slate-500 mt-4 animate-pulse">(Klik di mana saja untuk menutup)</p>
          </motion.div>
        </motion.div>}
    </AnimatePresence>;
};
export default FraudWarning;