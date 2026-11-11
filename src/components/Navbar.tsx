import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  Workflow,
  FlaskConical,
  Award,
  Sparkles,
  GraduationCap,
  Cpu,
  Layers,
  BookOpen,
  Briefcase,
  Users
} from 'lucide-react';
import { SERVICES, TRAINING_MODULES, INDUSTRIES, COMPANY_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth scroll handler to stay on the Homepage
  const scrollToSection = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Robust hover bridge: generous 450ms timeout ensures dropdown never vanishes unexpectedly
  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 450);
  };

  const handleDropdownClick = (menuName: string, sectionId: string) => {
    if (activeDropdown === menuName) {
      scrollToSection(sectionId);
    } else {
      setActiveDropdown(menuName);
    }
  };

  const industryIcons: Record<string, React.ReactNode> = {
    'manufacturing': <Factory className="w-4 h-4 text-[#063B83]" />,
    'retail-textile': <ShoppingBag className="w-4 h-4 text-[#087FE5]" />,
    'oil-gas': <Fuel className="w-4 h-4 text-[#063B83]" />,
    'agro-chemical': <Sprout className="w-4 h-4 text-[#087FE5]" />,
    'steel': <Workflow className="w-4 h-4 text-[#063B83]" />,
    'pharma': <FlaskConical className="w-4 h-4 text-[#087FE5]" />
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* 1. TOP MICRO-BAR: Professional Top Bar with Direct Quick Links */}
      <div className="bg-[#f5f8fc] border-b border-slate-200 text-xs text-slate-600 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#063B83] transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </a>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#063B83] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>

          {/* Quick links & Consultation button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-[11px] font-semibold text-slate-600">
              <span className="text-slate-400 font-normal">Quick:</span>
              <button
                onClick={() => scrollToSection('blogs')}
                className="hover:text-[#087FE5] transition-colors flex items-center gap-1 text-[#063B83] font-bold"
              >
                <BookOpen className="w-3 h-3 text-[#087FE5]" />
                <span>Blogs</span>
              </button>
              <span className="text-slate-300">·</span>
              <button
                onClick={() => scrollToSection('training')}
                className="hover:text-[#087FE5] transition-colors"
              >
                Careers
              </button>
            </div>
            <span className="text-slate-300">|</span>
            <a
              href={COMPANY_INFO.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-white border border-slate-200 hover:bg-[#087FE5] hover:text-white hover:border-[#087FE5] flex items-center justify-center text-slate-600 font-bold text-[10px] transition-all"
              aria-label="LinkedIn"
            >
              in
            </a>
            <button
              onClick={() => scrollToSection('contact-cta')}
              className="px-3.5 py-1.5 bg-[#063B83] hover:bg-[#087FE5] text-white text-[11px] font-semibold rounded shadow-sm transition-colors cursor-pointer"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER: Brand Logo (Left), Navigation (Center), Authentic SAP Gold Partner (Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative">
        {/* Left: Official ZisanTech Brand Logo (Restored original clean vector logo) */}
        <button
          onClick={() => scrollToSection('top')}
          className="flex items-center gap-2 group flex-shrink-0 cursor-pointer text-left"
          aria-label="ZisanTech Home"
        >
          <img
            src="/zisantech_official_logo.png"
            alt="ZisanTech - INNOVATE • DEVELOP • GROW"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/zisantech_logo_transparent.png';
            }}
          />
        </button>

        {/* Center: Desktop Navigation Bar with Rich Interactive Preview Mega-Menus */}
        <nav className="hidden lg:flex items-center space-x-1 font-sans">
          <button
            onClick={() => scrollToSection('top')}
            className="px-3.5 py-2.5 text-sm font-bold tracking-wide text-[#063B83] border-b-2 border-[#063B83] transition-colors cursor-pointer"
          >
            Home
          </button>

          {/* 1. Services Dropdown (Preview Catalog - Stays on Homepage) */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleDropdownClick('services', 'services')}
              className="px-3.5 py-1 text-sm font-semibold tracking-wide flex items-center gap-1 text-slate-700 hover:text-[#063B83] transition-colors cursor-pointer"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'services' && (
              <div
                className="absolute left-0 top-full pt-2 z-50 animate-fade-in"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[660px] max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                      <Cpu className="w-4 h-4 text-[#063B83]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B83]">SAP Services Preview</h4>
                    </div>
                    <ul className="space-y-1">
                      {SERVICES.filter(s => s.category.includes('SAP')).map((s) => (
                        <li key={s.id}>
                          <button
                            onClick={() => scrollToSection('services')}
                            className="w-full text-left p-2 rounded hover:bg-[#f5f8fc] text-xs text-slate-700 hover:text-[#063B83] transition-colors group cursor-pointer block"
                          >
                            <span className="font-semibold block">{s.title}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{s.shortDesc}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                      <Layers className="w-4 h-4 text-[#087FE5]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#087FE5]">Enterprise & Cloud</h4>
                    </div>
                    <ul className="space-y-1">
                      {SERVICES.filter(s => !s.category.includes('SAP')).map((s) => (
                        <li key={s.id}>
                          <button
                            onClick={() => scrollToSection('services')}
                            className="w-full text-left p-2 rounded hover:bg-[#f5f8fc] text-xs text-slate-700 hover:text-[#087FE5] transition-colors group cursor-pointer block"
                          >
                            <span className="font-semibold block">{s.title}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{s.shortDesc}</span>
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => scrollToSection('services')}
                        className="text-xs font-bold text-[#063B83] hover:text-[#087FE5] flex items-center gap-1 cursor-pointer"
                      >
                        Explore All Services On Homepage <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Training Dropdown (Preview Catalog - Stays on Homepage) */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('training')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleDropdownClick('training', 'training')}
              className="px-3.5 py-1 text-sm font-semibold tracking-wide flex items-center gap-1 text-slate-700 hover:text-[#063B83] transition-colors cursor-pointer"
            >
              Training
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'training' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'training' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 animate-fade-in"
                onMouseEnter={() => handleMouseEnter('training')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[700px] max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                      <GraduationCap className="w-4 h-4 text-[#063B83]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B83]">Functional Modules Preview</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-1 max-h-[280px] overflow-y-auto pr-1">
                      {TRAINING_MODULES.filter(t => t.type === 'functional').map((t) => (
                        <button
                          key={t.id}
                          onClick={() => scrollToSection('training')}
                          className="w-full text-left p-1.5 rounded hover:bg-[#f5f8fc] text-xs group block cursor-pointer"
                        >
                          <span className="font-bold text-[#087FE5] block text-[10px]">{t.code}</span>
                          <span className="text-slate-700 group-hover:text-[#063B83] font-medium truncate block">{t.title.split(' (')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                      <Cpu className="w-4 h-4 text-[#087FE5]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#087FE5]">Technical Modules Preview</h4>
                    </div>
                    <ul className="space-y-1">
                      {TRAINING_MODULES.filter(t => t.type === 'technical').map((t) => (
                        <li key={t.id}>
                          <button
                            onClick={() => scrollToSection('training')}
                            className="w-full text-left block p-1.5 rounded hover:bg-[#f5f8fc] text-xs group cursor-pointer"
                          >
                            <span className="font-bold text-[#063B83] mr-1.5 text-[10px]">{t.code}</span>
                            <span className="text-slate-700 group-hover:text-[#087FE5] font-medium">{t.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 rounded-lg bg-[#f5f8fc] border border-slate-200">
                      <p className="text-xs font-bold text-[#063B83]">100% Placement & Live Sandbox</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Hands-on real enterprise scenarios</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Industries Dropdown (Preview Catalog - Stays on Homepage) */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleDropdownClick('industries', 'industries')}
              className="px-3.5 py-1 text-sm font-semibold tracking-wide flex items-center gap-1 text-slate-700 hover:text-[#063B83] transition-colors cursor-pointer"
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 animate-fade-in"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[620px] max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-xl shadow-2xl p-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B83]">
                      We Serve Industries
                    </h4>
                    <button
                      onClick={() => scrollToSection('industries')}
                      className="text-xs text-[#087FE5] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      View All 6 Industries <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind.id}
                        onClick={() => scrollToSection('industries')}
                        className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#f5f8fc] border border-transparent hover:border-slate-200 transition-all group cursor-pointer"
                      >
                        <div className="p-2 rounded-md bg-slate-100 group-hover:bg-[#063B83] group-hover:text-white transition-colors flex-shrink-0">
                          {industryIcons[ind.id] || <Sparkles className="w-4 h-4 text-[#063B83]" />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover:text-[#063B83] transition-colors">
                            {ind.name}
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {ind.tagline}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Company Dropdown (Preview & Scroll to Homepage Sections) */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleDropdownClick('company', 'about')}
              className="px-3.5 py-1 text-sm font-semibold tracking-wide flex items-center gap-1 text-slate-700 hover:text-[#063B83] transition-colors cursor-pointer"
            >
              Company
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'company' && (
              <div
                className="absolute right-0 top-full pt-2 z-50 animate-fade-in"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[380px] bg-white border border-slate-200 rounded-xl shadow-2xl p-4 space-y-2">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#f5f8fc] transition-colors group cursor-pointer"
                  >
                    <div className="p-2 rounded bg-blue-50 text-[#063B83] group-hover:bg-[#063B83] group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover:text-[#063B83]">About ZisanTech</p>
                      <p className="text-[11px] text-slate-500">Global enterprise technology & SAP practice</p>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('blogs')}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#f5f8fc] transition-colors group cursor-pointer"
                  >
                    <div className="p-2 rounded bg-sky-50 text-[#087FE5] group-hover:bg-[#087FE5] group-hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-bold text-slate-800 group-hover:text-[#087FE5]">Blogs & Insights</p>
                        <span className="px-1.5 py-0.5 rounded bg-sky-100 text-[#087FE5] text-[9px] font-bold">New</span>
                      </div>
                      <p className="text-[11px] text-slate-500">SAP S/4HANA migration & tech articles</p>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('why-us')}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#f5f8fc] transition-colors group cursor-pointer"
                  >
                    <div className="p-2 rounded bg-blue-50 text-[#063B83] group-hover:bg-[#063B83] group-hover:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover:text-[#063B83]">Why Choose Us</p>
                      <p className="text-[11px] text-slate-500">Certified consultants & 24/7 delivery</p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('contact-cta')}
            className="px-3.5 py-2.5 text-sm font-semibold tracking-wide text-slate-700 hover:text-[#063B83] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Authentic SAP Gold Partner Logo in Clean Subtle Card (Matches Original) */}
        <div className="hidden lg:flex items-center space-x-2 flex-shrink-0 pl-3">
          <div className="flex items-center p-1.5 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow transition-all">
            <img
              src="/sap_gold_partner_perfect.svg"
              alt="Official SAP Gold Partner"
              className="h-9 sm:h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/sap_gold_partner.png';
              }}
            />
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded text-slate-700 hover:text-[#063B83] hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="p-1 bg-white border border-slate-200 rounded-lg shadow-sm">
              <img
                src="/sap_gold_partner_perfect.svg"
                alt="Official SAP Gold Partner"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/sap_gold_partner.png';
                }}
              />
            </div>
            <button
              onClick={() => scrollToSection('contact-cta')}
              className="px-3.5 py-1.5 bg-[#063B83] text-white text-xs font-bold rounded shadow-sm"
            >
              Consult Now
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => scrollToSection('top')}
              className="w-full text-left block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#f5f8fc] rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-left block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#f5f8fc] rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="w-full text-left block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#f5f8fc] rounded"
            >
              SAP Training
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              className="w-full text-left block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#f5f8fc] rounded"
            >
              Industries We Serve
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#f5f8fc] rounded"
            >
              About ZisanTech
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="w-full text-left block px-3 py-2 text-sm font-semibold text-[#087FE5] hover:bg-[#f5f8fc] rounded font-bold"
            >
              Blogs & Insights
            </button>
            <button
              onClick={() => scrollToSection('contact-cta')}
              className="w-full text-left block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#f5f8fc] rounded"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
