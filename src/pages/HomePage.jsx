import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const HeroSection = lazy(() => import('@/components/sections/HeroSection'));
const BusinessIntroSection = lazy(() => import('@/components/sections/BusinessIntroSection'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const PackagesSection = lazy(() => import('@/components/sections/PackagesSection'));
const GallerySection = lazy(() => import('@/components/sections/GallerySection'));
const MotorGallerySection = lazy(() => import('@/components/sections/MotorGallerySection'));
const PartnersSection = lazy(() => import('@/components/sections/PartnersSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}

const HomePage = ({ handleContactClick }) => {
  return (
    <>
      <Helmet>
        <title>Gaiska Motor - Sparepart Motor & Kemitraan Toko</title>
        <meta name="description" content="Gaiska Motor menyediakan sparepart motor berkualitas dan program kemitraan toko sparepart. Bergabunglah dengan jaringan bisnis sparepart motor terpercaya di Indonesia." />
        <meta name="keywords" content="gaiska motor, sparepart motor, toko sparepart, kemitraan bengkel, distributor sparepart, suku cadang motor" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection handleContactClick={handleContactClick} />
        <BusinessIntroSection />
        <ServicesSection />
        <PackagesSection handleContactClick={handleContactClick} />
        <GallerySection />
        <PartnersSection />
        <MotorGallerySection />
        <ContactSection handleContactClick={handleContactClick} />
      </Suspense>
    </>
  );
};

export default HomePage;