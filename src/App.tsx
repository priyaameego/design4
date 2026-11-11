import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ConceptProvider } from './context/ConceptContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { TrainingPage } from './pages/TrainingPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { CareerPage } from './pages/CareerPage';
import { PaymentPage } from './pages/PaymentPage';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col font-sans ${isHomePage ? 'bg-[#F8F9FC] text-[#242630]' : 'bg-white text-slate-800'}`}>
      {/* On homepage, the dedicated LuxuryNavbar is rendered by HomePage */}
      {!isHomePage && <Navbar />}

      {/* Page Routing */}
      <main className="flex-grow">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Core Information Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Services: Listing & Detail routes preserving original URL structure */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services1/:category/:id" element={<ServicesPage />} />

          {/* Industries: "We Serve Industries" Landing & 6 Dedicated Sub-Pages */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:industryId" element={<IndustriesPage />} />

          {/* Training: 10 Functional + 5 Technical Modules */}
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/trainingprogrammes/:category/:id" element={<TrainingPage />} />

          {/* Blogs: Listing & Individual Detail Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />

          {/* Payment UI Workflow (Checkout, Success, Failure) */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment/checkout" element={<PaymentPage />} />
          <Route path="/payment/success" element={<PaymentPage />} />
          <Route path="/payment/failure" element={<PaymentPage />} />

          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* On homepage, the dedicated LuxuryFooter is rendered by HomePage */}
      {!isHomePage && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ConceptProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </ConceptProvider>
  );
};

export default App;
