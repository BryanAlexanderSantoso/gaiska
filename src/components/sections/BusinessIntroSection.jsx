import React from 'react';
import { motion } from 'framer-motion';
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};
const BusinessIntroSection = () => {
  return <section id="business-intro" className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.3
      }} variants={sectionVariants}>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 glow-text-blue">
            Peluang Bisnis Bersama GAISKA MOTOR
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Mari selami potensi tak terbatas di industri otomotif roda dua bersama kami.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* PRAKATA */}
          <motion.div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-blue-500/20 card-glow-light" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={sectionVariants}>
            <h3 className="text-3xl font-bold font-orbitron mb-4 text-blue-300">PRAKATA</h3>
            <motion.p className="text-lg leading-relaxed text-gray-200" variants={textVariants}>
              Memperhatikan pertumbuhan kendaraan roda dua yang amat pesat di Indonesia dan sebagai pengguna kendaraan roda dua dalam urutan 3 besar dunia, maka sangat besar kesempatan yang terbuka untuk memanfaatkan peluang BESAR di usaha dan bisnis yang berhubungan dengan kendaraan roda dua.
            </motion.p>
          </motion.div>

          {/* DATA STATISTIK */}
          <motion.div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-purple-500/20 card-glow-light" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={sectionVariants}>
            <h3 className="text-3xl font-bold font-orbitron mb-4 text-purple-300">DATA STATISTIK</h3>
            <motion.p className="text-lg leading-relaxed text-gray-200 mb-4" variants={textVariants}>
              Hingga saat ini, perkembangan roda dua menurut data ASOSIASI SEPEDA MOTOR INDONESIA (AISI) telah beredar kendaraan roda dua di Indonesia sebanyak 85.000.000 kendaraan, terdiri dari berbagai merek dan tipe kendaraan.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-gray-200" variants={textVariants}>
              Hal ini tentunya sangat membuka peluang besar untuk penyediaan alat sparepart kendaraan bermotor seperti: <span className="font-semibold text-blue-100">OLI, DISCPAD, KAMPAS REM, BAN LUAR, BAN DALAM, dan juga VARIASI MOTOR</span> yang bisa mempercantik kendaraan tersebut.
            </motion.p>
          </motion.div>

          {/* PELUANG PASAR */}
          <motion.div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-green-500/20 card-glow-light" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={sectionVariants}>
            <h3 className="text-3xl font-bold font-orbitron mb-4 text-green-300">PELUANG PASAR</h3>
            <motion.p className="text-lg leading-relaxed text-gray-200 mb-4" variants={textVariants}>
              Perhatikan sekeliling kita bermukim, ada berapa banyak motor beredar khusus di lingkungan kita sendiri, dari motor rekan kerja, kerabat, tetangga dan orang sekeliling yang melintas di area kita, dan itu adalah pangsa pasar bagi kita yang jeli menangkap peluang tersebut.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-gray-200" variants={textVariants}>
              Karenanya <span className="font-bold text-blue-100">GAISKA MOTOR</span> mengajak kita untuk memanfaatkan peluang tersebut secara optimal melalui <span className="font-bold text-purple-100">PROGRAM BIMBINGAN DAN ANALISA PELUANG USAHA PENJUALAN SPAREPART DAN BENGKEL</span>.
            </motion.p>
          </motion.div>

          {/* TENTANG KAMI */}
          <motion.div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-red-500/20 card-glow-light" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={sectionVariants}>
            <h3 className="text-3xl font-bold font-orbitron mb-4 text-red-300">TENTANG KAMI</h3>
            <motion.p className="text-lg leading-relaxed text-gray-200 mb-4" variants={textVariants}>
              <span className="font-bold text-blue-100">GAISKA MOTOR</span> adalah sebuah unit usaha dari PT.GAISKA PUTRA MANDIRI GROUP yang telah berdiri semenjak tahun 2006.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-gray-200 mb-4" variants={textVariants}>
              GAISKA MOTOR mempunyai unit usaha yang berhubungan dengan kendaraan roda dua dari unit usaha showroom motor baru dan unit usaha showroom motor second juga unit usaha penyediaan sparepart kendaraan bermotor roda dua.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-gray-200 mb-4" variants={textVariants}>
              Khusus di unit usaha pengadaan alat sparepart dan aksesoris kendaraan bermotor, PT.Gaiska Putra Mandiri GROUP hanya berhubungan dengan DEALER dan MENJADI DISTRIBUTOR utama pemegang beberapa merk sehingga <span className="font-bold text-yellow-100">VARIAN BARANG dan HARGA yang Gaiska Motor keluarkan DIJAMIN lebih BERVARIASI dan HARGA LEBIH RENDAH dari Harga GROSIR SEJENIS</span>.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-gray-200 mb-4" variants={textVariants}>
              GAISKA Motor melayani pembelian sparepart motor dan aksesoris motor secara GROSIR dan eceran dengan harga TERMURAH yang bisa di jual kembali ke bengkel atau toko sparepart di sekitar Anda atau di canvasser kan dan bisa meraih laba minimal <span className="font-bold text-green-300">5% sampai dengan 400%</span>.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-gray-200 mb-4" variants={textVariants}>
              Sebagai distributor beberapa merk, PT.Gaiska Motor sanggup mensuplai lebih dari <span className="font-bold text-green-300">900 item barang segala jenis</span> yang menyangkut RODA DUA.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-gray-200" variants={textVariants}>
              Bila menjadi mitra kerja di GAISKA MOTOR juga mendapatkan pelatihan untuk membuka usaha baru di bidang <span className="font-bold text-red-300">BENGKEL, TOKO SPAREPART DAN AKSESORIS MOTOR SECARA GRATISSS !!!!</span> dari persiapan dan perencanaan tempat yang strategis berdasarkan pengalaman tim kami, sampai penataan barang plus instalasi bengkel dan bimbingan manajemen pengelolaan toko sampai toko Anda berdiri dan mulai beroperasi, yang ditangani oleh SDM handal lulusan tinggi eks dealer resmi bersertifikat NASIONAL.
            </motion.p>
          </motion.div>

          {/* AKHIR KATA */}
          <motion.div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-blue-500/20 card-glow-light" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={sectionVariants}>
            <h3 className="text-3xl font-bold font-orbitron mb-4 text-blue-300">AKHIR KATA</h3>
            <motion.p className="text-lg leading-relaxed text-gray-200" variants={textVariants}>
              GAISKA MOTOR menyediakan segala kebutuhan di bidang otomotif roda dua dari persiapan membuka usaha bengkel dan spare part motor sampai <span className="font-bold text-purple-300">PROGRAM MANAJEMEN TOKO GRATISSS!!!</span> yang dapat dipergunakan agar usaha bengkel dan toko sparepart Anda menjadi cepat berkembang.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default BusinessIntroSection;