import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Laptop,
  CheckCircle,
  Users2
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRAINING_MODULES, INDUSTRIES, BLOGS } from '../../data/siteData';

export const ConceptAgency: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white pb-24 space-y-28 selection:bg-sky-400 selection:text-slate-950">
      {/* 1. HERO SECTION: Bold Visual Hierarchy & Dynamic Asymmetry */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Abstract geometric accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-300 text-xs font-semibold">
              <Globe2 className="w-4 h-4 text-sky-400" />
              <span>GLOBAL ENTERPRISE IT & DIGITAL ACCELERATION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
              We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-teal-300">game-changing</span> enterprise platforms.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              ZisanTech partners with forward-thinking enterprises worldwide to turn legacy technical bottlenecks into agile, automated SAP and cloud ecosystems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>Launch Enterprise Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services1/SAP SERVICES/1"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all hover:-translate-y-0.5"
              >
                Explore Global Services
              </Link>
            </div>
          </div>

          {/* Agency Dynamic Metrics Strip */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-400">{COMPANY_INFO.experienceYears}</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Years Enterprise Leadership</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-400">{COMPANY_INFO.clientsCount}</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Global Client Engagements</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">{COMPANY_INFO.studentsTrained}</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Consultants Trained</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Statutory Delivery Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES: Dynamic Asymmetric Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
              Transformational Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-display">
              End-to-End Enterprise Capabilities
            </h2>
          </div>
          <Link to="/services1/SAP SERVICES/1" className="text-xs font-bold text-sky-400 hover:text-sky-300 mt-3 md:mt-0">
            View All Capabilities →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                <Link to={service.url} className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1">
                  <span>Scope Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/contact" className="text-xs text-slate-400 hover:text-white">
                  Schedule Call
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIES: Creative Corporate Presentation */}
      <section className="bg-slate-950 py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
              Sector Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-display">
              We Serve Industries
            </h2>
            <p className="text-slate-400 text-xs mt-2">Solving mission-critical supply chain, tax, and inventory challenges globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.id}`}
                className="p-7 rounded-3xl bg-slate-900 border border-slate-800 hover:border-sky-400 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">{ind.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                  </div>
                  <p className="text-xs text-sky-400 font-medium mb-3">{ind.tagline}</p>
                  <p className="text-xs text-slate-400 line-clamp-3 mb-6">{ind.summary}</p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-semibold">
                  <span>Read Industry Case File</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAINING PROGRAMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
              Talent Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-display">
              Professional SAP Academy
            </h2>
          </div>
          <Link to="/trainingprogrammes/Functional Modules/1" className="text-xs font-bold text-sky-400 hover:underline">
            All Programs [15] →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_MODULES.slice(0, 8).map((mod) => (
            <div key={mod.id} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-sky-400">{mod.code}</span>
                <h3 className="text-base font-bold text-white mt-2 mb-2 line-clamp-1">{mod.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-3 mb-4">{mod.shortDesc}</p>
              </div>
              <Link to={mod.url} className="text-xs font-bold text-sky-400 hover:text-sky-300 pt-3 border-t border-slate-700 flex items-center justify-between">
                <span>View Syllabus</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-sky-900 to-slate-900 p-12 text-center space-y-6 border border-white/20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Accelerate Your Enterprise IT Journey
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Partner with our seasoned SAP consultants and digital engineers today.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-colors shadow-2xl"
            >
              <span>Schedule Strategic Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

