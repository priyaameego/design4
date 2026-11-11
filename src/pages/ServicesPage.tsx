import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileCheck,
  Workflow,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/siteData';

export const ServicesPage: React.FC = () => {
  const { category, id } = useParams<{ category?: string; id?: string }>();
  const [activeTab, setActiveTab] = useState<'all' | 'sap' | 'other'>('all');

  // If specific service is selected via URL: /services1/:category/:id
  const selectedService = id
    ? SERVICES.find(
        (s) =>
          s.id === parseInt(id) &&
          (category ? s.category.toLowerCase() === decodeURIComponent(category).toLowerCase() : true)
      )
    : null;

  if (selectedService) {
    return (
      <div className="space-y-16 pb-20">
        {/* Service Header Banner */}
        <section className="bg-navy-950 text-white py-16 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/services1/SAP SERVICES/1" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-teal-400 font-semibold">{selectedService.title}</span>
            </div>

            <div className="max-w-4xl space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/30">
                {selectedService.category} // Service 0{selectedService.id}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                {selectedService.title}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                {selectedService.shortDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Service Details Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Detailed Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-navy-950">Overview & Enterprise Scope</h2>
                {selectedService.fullDesc.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed text-sm">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-950">Core Technical & Functional Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.keyFeatures.map((f, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-800 font-medium leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Deliverables */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-950">Client Deliverables & Governance</h3>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200">
                      <FileCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-xs text-slate-800">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Value */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-950">Measurable Business Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedService.businessValue.map((bv, i) => (
                    <div key={i} className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-navy-950 font-medium leading-relaxed">
                      {bv}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with all services navigation */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 pb-2 border-b border-slate-100">
                  All Enterprise Services
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {SERVICES.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={s.url}
                        className={`block p-2.5 rounded-lg transition-colors flex items-center justify-between ${
                          s.id === selectedService.id && s.category === selectedService.category
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate">{s.title}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-950 to-blue-950 text-white border border-white/10 space-y-4">
                <h4 className="text-base font-bold text-white">Need an Expert Assessment?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our solutions architects are available to review your current SAP landscape, conduct gap analysis, and provide tailored blueprints.
                </p>
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Schedule Solution Discovery
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Listing View
  const filteredServices = SERVICES.filter((s) => {
    if (activeTab === 'sap') return s.type === 'sap';
    if (activeTab === 'other') return s.type === 'other';
    return true;
  });

  return (
    <div className="space-y-20 pb-20">
      <section className="bg-navy-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Enterprise Technology Practice
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              Enterprise Services & Solutions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our full catalog of 12 verified SAP and modern IT capabilities, delivered with SLA accountability and clean-core engineering.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 pt-4">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                All Services (12)
              </button>
              <button
                onClick={() => setActiveTab('sap')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'sap' ? 'bg-blue-600 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                SAP Enterprise Services (7)
              </button>
              <button
                onClick={() => setActiveTab('other')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'other' ? 'bg-blue-600 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                Other IT Services (5)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">0{service.id}</span>
                </div>

                <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {service.keyFeatures.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={service.url}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/contact" className="text-xs text-slate-400 hover:text-slate-700">
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

