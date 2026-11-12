import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

const CURRENT_YEAR = new Date().getFullYear();

export const LuxuryFooter: React.FC = () => {

  const scrollTo = (id: string) => {
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
    <footer className="bg-[#051329] text-slate-300 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Lighting in Cyber Teal */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00A896]/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 1. TOP STRIP: EXECUTIVE CONTACT DIALOGUE */}
      <div className="bg-[#051329] border-b border-white/10 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A896]/20 border border-[#00A896]/40 text-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00A896]" />
              </div>
              <div>
                <h4 className="text-white font-heading font-semibold text-base">
                  Looking to Transform Your Enterprise Systems?
                </h4>
                <p className="text-slate-400 text-xs">
                  Speak directly with a senior ZisanTech SAP Enterprise Solution Architect.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:border-[#00A896]/60 hover:bg-white/10 transition-all text-xs font-semibold text-white"
              >
                <Phone className="w-4 h-4 text-[#00A896]" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${COMPANY_INFO.primaryEmail}`}
                className="btn-scorelabs-primary flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all text-xs font-bold shadow-lg shadow-[#00A896]/30 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate RFP Enquiry</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/zisantech-logo.jpg"
                alt="ZisanTech Logo"
                className="h-10 sm:h-11 w-auto object-contain rounded-md bg-white/90 p-1 border border-white/20"
              />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              ZisanTech delivers intelligent SAP enterprise solutions and strategic technology consulting to help organizations modernize workflows, connect systems and scale operations with precision.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-[#2DD4BF] border border-white/10 font-mono">
                Enterprise SAP Consulting
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-slate-300 border border-white/10 font-mono">
                Clean Core Architecture
              </span>
            </div>

            {/* Official Coordinates */}
            <div className="pt-3 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A896] flex-shrink-0 mt-0.5" />
                <span>Commercial Business District, Delhi, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A896] flex-shrink-0" />
                <span>+91 87978 18499</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A896] flex-shrink-0" />
                <span>info@zisantech.com</span>
              </div>
            </div>
          </div>

          {/* Core Services (Visual Navigation) (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-[#00A896] pl-2.5 font-mono">
              Verified Capabilities
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { name: 'SAP Rollout', target: 'services' },
                { name: 'SAP Custom Solutions', target: 'services' },
                { name: 'SAP Support (24/7 SLA)', target: 'services' },
                { name: 'SAP Implementation', target: 'services' },
                { name: 'SAP Integration (CPI/PO)', target: 'services' },
                { name: 'Enterprise Technology Solutions', target: 'services' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#00A896] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Focus (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-[#00A896] pl-2.5 font-mono">
              Industries
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                'Manufacturing',
                'Retail & Textile',
                'Oil & Gas',
                'Agro Chemical',
                'Steel',
                'Pharma',
              ].map((ind, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo('industries')}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#00A896] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{ind}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Preview & Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-[#00A896] pl-2.5 font-mono">
              Headquarters Location
            </h5>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-1.5">
              <div className="relative h-28 w-full rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                  alt="New Delhi Commercial Center"
                  className="w-full h-full object-cover filter brightness-75 contrast-125 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded bg-[#051329]/90 text-[10px] text-white backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] animate-ping"></span>
                  <span>New Delhi Hub</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Serving global enterprise clients with resilient architecture, offshore development centers and localized deployment teams.
            </p>
          </div>
        </div>

        {/* 3. BOTTOM LEGAL BAR */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© {CURRENT_YEAR} ZisanTech Solutions. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline text-slate-400">Enterprise SAP Consulting & Digital Transformation</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => scrollTo('top')} className="hover:text-white transition-colors cursor-pointer">
              Back to Top
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Consulting Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
