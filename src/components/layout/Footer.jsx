import React from 'react';
import { Zap } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-900 py-12 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img src="https://horizons-cdn.hostinger.com/ad056630-8f51-4a15-82fa-630e5e89abd9/c4de95127f81c3699242aceb98561b04.png" alt="Gaiska Motor Logo" className="w-12 h-12" />
              <div>
                <span className="font-orbitron font-bold text-xl glow-text">GAISKA MOTOR</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Mitra terpercaya untuk bisnis sparepart motor Anda. Bergabunglah dengan jaringan bisnis terbesar di Indonesia.
            </p>
          </div>

          <div>
            <span className="font-bold text-white text-lg mb-4 block">Layanan</span>
            <div className="space-y-2">
              <p className="text-gray-300">Sparepart Motor grosir</p>
              <p className="text-gray-300">Aksesoris Motor grosir</p>
              <p className="text-gray-300">Program Kemitraan Toko</p>
              <p className="text-gray-300">Penjualan Unit Motor</p>
            </div>
          </div>

          <div>
            <span className="font-bold text-white text-lg mb-4 block">Pusat</span>
            <div className="space-y-2">
              <p className="text-gray-300">(0263) 56834675 - 082310768188</p>
              <p className="text-gray-300">cs_pusat
@gaiskamotor.com</p>
              <p className="text-gray-300">Komplek Pergudangan Cianjur Raya Kav.18 Ciranjang Cianjur Jawa Barat</p>
            </div>
          </div>

          <div>
            <span className="font-bold text-white text-lg mb-4 block">Cabang Lombok</span>
            <div className="space-y-2">
              <p className="text-gray-300">Jl. jalan udayana</p>
              <p className="text-gray-300">Kota Mataram, NTB</p>
              <p className="text-gray-300">Telepon: 081805705339</p>
            </div>
          </div>

          <div>
            <span className="font-bold text-white text-lg mb-4 block">Cabang Palembang</span>
            <div className="space-y-2">
              <p className="text-gray-300">Jl. Kolonel H. Barlian No. 456</p>
              <p className="text-gray-300">Kota Palembang, Sumsel</p>
              <p className="text-gray-300">Telepon: 085778228624</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2014 Gaiska Motor. Semua hak dilindungi. | Powered by Gaiska Putra Mandiri Group</p>
        </div>
      </div>
    </footer>;
};
export default Footer;