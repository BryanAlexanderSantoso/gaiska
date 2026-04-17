import React, { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShoppingCart from '@/components/ShoppingCart';
import FraudWarning from '@/components/FraudWarning';

const HomePage = lazy(() => import('@/pages/HomePage'));
const StorePage = lazy(() => import('@/pages/StorePage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const SuccessPage = lazy(() => import('@/pages/SuccessPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const OwnerPage = lazy(() => import('@/pages/OwnerPage'));

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();
  const [showWarning, setShowWarning] = useState(true);

  const handleCloseWarning = useCallback(() => {
    setShowWarning(false);
  }, []);

  useEffect(() => {
    if (showWarning) {
      const timer = setTimeout(() => {
        handleCloseWarning();
      }, 9000);

      return () => clearTimeout(timer);
    }
  }, [showWarning, handleCloseWarning]);

  return (
    <HelmetProvider>
      <FraudWarning isVisible={showWarning} onClose={handleCloseWarning} />
      <div className="min-h-screen motor-pattern flex flex-col">
        <Header setIsCartOpen={setIsCartOpen} />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/owner" element={<OwnerPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;