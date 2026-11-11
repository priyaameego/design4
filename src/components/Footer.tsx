import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Award,
  Globe2,
  Lock
} from 'lucide-react';
import { COMPANY_INFO, INDUSTRIES } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#071B49] via-[#05143A] to-[#020A1E] text-slate-300 font-sans border-t border-slate-700/80 relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#087FE5]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#08B9E8]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* 1. TOP FOOTER CONTACT & ASSURANCE STRIP */}
      <div className="bg-[#030E26]/90 py-6 border-b border-slate-800/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Talk to an Enterprise Architect</p>
              <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-sm font-bold text-white hover:text-[#08B9E8] transition-colors">
                {COMPANY_INFO.primaryPhone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Official Consulting Enquiry</p>
              <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-sm font-bold text-white hover:text-[#08B9E8] transition-colors">
                {COMPANY_INFO.primaryEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Headquarters & Delivery Hub</p>
              <p className="text-xs text-white font-medium">{COMPANY_INFO.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN 4-COLUMN FOOTER: High-end layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: About ZisanTech with Official Brand Logo & Clean Uncut SAP Gold Partner Badge (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="/" className="inline-block p-3 bg-white rounded-xl shadow-lg border border-slate-200 hover:scale-[1.02] transition-transform">
              <img
                src="/zisantech_official_logo.png"
                alt="ZisanTech - INNOVATE • DEVELOP • GROW"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/zisantech_logo_transparent.png';
                }}
              />
            </a>

            <p className="text-xs text-slate-300 leading-relaxed pr-4">
              ZisanTech Solutions is an enterprise SAP Consulting and Technology Practice. We drive full-lifecycle SAP S/4HANA Cloud implementations, legacy migrations, custom ERP automation, and career-oriented workforce training programs.
            </p>

            {/* Official SAP Gold Partner Showcase Badge */}
            <div className="pt-2">
              <div className="p-3 bg-white rounded-xl shadow-md border border-slate-200 inline-flex items-center gap-3">
                <img
                  src="/sap_gold_partner_perfect.svg"
                  alt="Official SAP Gold Partner"
                  className="h-10 sm:h-11 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/sap_gold_partner.png';
                  }}
                />
                <div className="border-l border-slate-200 pl-3">
                  <p className="text-[11px] font-extrabold text-[#071B49] leading-tight">Certified Partner</p>
                  <p className="text-[10px] text-slate-500 font-medium">Enterprise SAP Delivery</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#08B9E8]" />
              <span>ISO 9001:2015 & SAP Global Delivery Standards</span>
            </div>
          </div>

          {/* Col 2: Quick Links (Span 3 - Prominently Featuring Blogs & Insights as requested) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#087FE5] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/#blogs"
                  className="text-[#08B9E8] font-bold hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#08B9E8]" />
                    <span>Blogs & Tech Insights</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-[#087FE5]/20 text-[#08B9E8] text-[9px] font-bold group-hover:bg-[#087FE5] group-hover:text-white transition-colors">
                    Articles
                  </span>
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-500">›</span> About ZisanTech
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-500">›</span> SAP S/4HANA Implementations
                </a>
              </li>
              <li>
                <a href="/#training" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-500">›</span> SAP Professional Training
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-500">›</span> Industries We Serve
                </a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-500">›</span> Why Choose ZisanTech
                </a>
              </li>
              <li>
                <a href="/#contact-cta" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-500">›</span> Contact Support & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries We Serve (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#087FE5] pb-2 inline-block">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <a
                    href="/#industries"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-500">›</span> {ind.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Hub & Architecture Consultation (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#087FE5] pb-2 inline-block">
              Corporate Office
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">{COMPANY_INFO.address}</p>

            <div className="rounded-xl bg-gradient-to-br from-[#063B83]/90 to-[#031842] border border-slate-700/80 p-4 space-y-2.5 shadow-xl">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#08B9E8]" />
                <p className="text-xs font-bold text-white">Global Delivery Capabilities</p>
              </div>
              <p className="text-[11px] text-slate-300">
                Delivering verified SAP consulting for India, Middle East, and worldwide clients.
              </p>
              <a
                href="#contact-cta"
                className="mt-2 w-full py-2 bg-gradient-to-r from-[#087FE5] to-[#08B9E8] hover:from-[#063B83] hover:to-[#087FE5] text-white text-[11px] font-bold uppercase tracking-wider rounded text-center block transition-all shadow-md"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT & COMPLIANCE BAR */}
      <div className="bg-[#010614] py-5 border-t border-slate-800 text-xs text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px]">
            © {new Date().getFullYear()} ZisanTech Solutions. All Rights Reserved. SAP, SAP S/4HANA, and RISE with SAP are registered trademarks of SAP SE.
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact-cta" className="hover:text-white transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#08B9E8]" /> Client Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
