import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu,
  Network,
  Briefcase,
  Workflow
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const LuxuryNavbar: React.FC<{ onConsultationClick?: () => void }> = ({ onConsultationClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 280);
  };

  const scrollToSection = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Announcement Ribbon */}
      <div className="bg-[#051329] text-slate-300 text-xs border-b border-white/10 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-white/90 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00A896] inline-block mr-2 animate-pulse"></span>
              Global Enterprise SAP Consulting & Technology Advisory
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00A896]" />
              New Delhi • International Delivery Capability
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-[#00A896] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A896]" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="flex items-center gap-1.5 hover:text-[#00A896] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00A896]" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <nav
          className={`rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-[#051329]/5 border border-slate-200 py-3 px-6'
              : 'bg-white/90 backdrop-blur-md shadow-lg shadow-[#051329]/5 border border-slate-200 py-3.5 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* ZT Brand Logo */}
            <button
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#051329] to-[#00A896] flex items-center justify-center shadow-md shadow-[#00A896]/20 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 9H17L10 19H20"
                    stroke="#E6FAF6"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 13H25"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 13V23"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle cx="21" cy="9" r="1.5" fill="#00A896" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-[#0B1D3A]">
                    Zisan<span className="text-[#00A896]">Tech</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#E6FAF6] text-[#00A896] px-1.5 py-0.5 rounded border border-[#00A896]/20">
                    ENTERPRISE
                  </span>
                </div>
                <p className="text-[10px] tracking-wider text-slate-400 font-medium uppercase font-mono">
                  Global SAP & IT Consulting
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('top')}
                className="px-3.5 py-2 text-sm font-semibold text-[#0B1D3A] hover:text-[#00A896] transition-colors rounded-lg hover:bg-[#E6FAF6]/50 cursor-pointer"
              >
                Home
              </button>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => scrollToSection('about')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeDropdown === 'about'
                      ? 'text-[#00A896] bg-[#E6FAF6]'
                      : 'text-[#0B1D3A] hover:text-[#00A896] hover:bg-[#E6FAF6]/40'
                  }`}
                >
                  About Us
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'about' ? 'rotate-180 text-[#00A896]' : 'text-slate-400'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200"
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-2 font-mono">
                        Corporate Overview (Visual Only)
                      </div>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 cursor-default">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center font-bold text-xs">
                              ZT
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0B1D3A]">
                                Enterprise Consulting Practice
                              </div>
                              <div className="text-[11px] text-slate-500">
                                High-touch strategic advisory & implementation
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 cursor-default">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0B1D3A]">
                                Verified Track Record
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Over a decade of enterprise reliability
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 cursor-default">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center">
                              <Workflow className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0B1D3A]">
                                Proven 4-Stage Methodology
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Discover, Strategize, Implement, Optimize
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => scrollToSection('services')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeDropdown === 'services'
                      ? 'text-[#00A896] bg-[#E6FAF6]'
                      : 'text-[#0B1D3A] hover:text-[#00A896] hover:bg-[#E6FAF6]/40'
                  }`}
                >
                  Our Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180 text-[#00A896]' : 'text-slate-400'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white rounded-2xl p-5 shadow-2xl border border-slate-200"
                    >
                      <div className="flex justify-between items-center mb-3 px-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                          Complete Service Portfolio (Visual Only)
                        </span>
                        <span className="text-[10px] text-[#00A896] font-semibold bg-[#E6FAF6] px-2 py-0.5 rounded-full font-mono">
                          12 Core Practices
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          { title: 'SAP Rollout', desc: 'Global template scale & localized rollout', icon: <Layers className="w-4 h-4" /> },
                          { title: 'SAP Custom Solutions', desc: 'Bespoke ABAP, Fiori & clean-core apps', icon: <Cpu className="w-4 h-4" /> },
                          { title: 'SAP Support', desc: 'L1–L3 SLA-governed 24/7 hyper-care', icon: <ShieldCheck className="w-4 h-4" /> },
                          { title: 'SAP Implementation', desc: 'Full-cycle Greenfield & Brownfield S/4HANA', icon: <Briefcase className="w-4 h-4" /> },
                          { title: 'SAP Integration', desc: 'Decoupled CPI/PO, APIs, Banks & IoT', icon: <Network className="w-4 h-4" /> },
                          { title: 'Enterprise Technology', desc: 'Custom cloud portals & digital engineering', icon: <Workflow className="w-4 h-4" /> },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 cursor-default"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-[#00A896]">{item.icon}</span>
                              <span className="text-xs font-bold text-[#0B1D3A]">{item.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => scrollToSection('industries')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeDropdown === 'industries'
                      ? 'text-[#00A896] bg-[#E6FAF6]'
                      : 'text-[#0B1D3A] hover:text-[#00A896] hover:bg-[#E6FAF6]/40'
                  }`}
                >
                  Industries
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'industries' ? 'rotate-180 text-[#00A896]' : 'text-slate-400'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200"
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-2 font-mono">
                        6 Key Industry Verticals (Visual Only)
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'Manufacturing',
                          'Retail & Textile',
                          'Oil & Gas',
                          'Agro Chemical',
                          'Steel',
                          'Pharma',
                        ].map((ind, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 cursor-default text-xs font-semibold text-[#0B1D3A]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]"></span>
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SAP Training Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('training')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => scrollToSection('training')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeDropdown === 'training'
                      ? 'text-[#00A896] bg-[#E6FAF6]'
                      : 'text-[#0B1D3A] hover:text-[#00A896] hover:bg-[#E6FAF6]/40'
                  }`}
                >
                  SAP Training
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'training' ? 'rotate-180 text-[#00A896]' : 'text-slate-400'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'training' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200"
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2 font-mono">
                        Enterprise Talent Incubation (Visual Only)
                      </div>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 cursor-default">
                          <div className="text-xs font-bold text-[#0B1D3A] flex items-center justify-between">
                            <span>Functional Modules</span>
                            <span className="text-[10px] bg-[#E6FAF6] text-[#00A896] px-1.5 py-0.5 rounded font-mono font-bold">
                              10 Modules
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">
                            SD, MM, PP, QM, FICO, HCM, LE, TM, EWM, ARIBA
                          </p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 cursor-default">
                          <div className="text-xs font-bold text-[#0B1D3A] flex items-center justify-between">
                            <span>Technical Specializations</span>
                            <span className="text-[10px] bg-[#E6FAF6] text-[#00A896] px-1.5 py-0.5 rounded font-mono font-bold">
                              5 Modules
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">
                            ABAP, BASIS, PI/PO, CPI, CIDS with sandbox labs.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us link */}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3.5 py-2 text-sm font-semibold text-[#0B1D3A] hover:text-[#00A896] transition-colors rounded-lg hover:bg-[#E6FAF6]/50 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            {/* Right Action: Get Consultation CTA (ScoreLabs Gradient Style) */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (onConsultationClick) onConsultationClick();
                  else scrollToSection('contact');
                }}
                className="btn-scorelabs-primary px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 group cursor-pointer"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#0B1D3A] hover:bg-[#E6FAF6] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 space-y-3 pb-2 animate-fade-in">
              <button
                onClick={() => scrollToSection('top')}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-[#0B1D3A] hover:bg-[#E6FAF6] rounded-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-[#0B1D3A] hover:bg-[#E6FAF6] rounded-lg"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-[#0B1D3A] hover:bg-[#E6FAF6] rounded-lg"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('industries')}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-[#0B1D3A] hover:bg-[#E6FAF6] rounded-lg"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-[#0B1D3A] hover:bg-[#E6FAF6] rounded-lg"
              >
                SAP Training
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-[#0B1D3A] hover:bg-[#E6FAF6] rounded-lg"
              >
                Contact Us
              </button>

              <div className="pt-2">
                <button
                  onClick={() => {
                    if (onConsultationClick) onConsultationClick();
                    else scrollToSection('contact');
                  }}
                  className="w-full btn-scorelabs-primary py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                >
                  <span>Get Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
