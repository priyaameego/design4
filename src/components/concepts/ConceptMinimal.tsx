import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Shield, Award, Terminal } from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRAINING_MODULES, INDUSTRIES, BLOGS } from '../../data/siteData';

export const ConceptMinimal: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 pb-24 space-y-28">
      {/* 1. HERO SECTION: Light, Crisp, High-Contrast Typography */}
      <section className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-slate-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span>Concept 02 // Modern Minimal Architectural Design</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.08] font-display">
            Precision engineering for <span className="font-semibold underline decoration-slate-300 decoration-4">enterprise ERP</span> systems.
          </h1>

          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
            We strip away enterprise software bloat. Delivering uncluttered SAP rollouts, clean cloud integrations, and verifiable operational efficiency.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-none transition-all flex items-center gap-2"
            >
              <span>Initiate Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services1/SAP SERVICES/1"
              className="px-8 py-4 bg-white border border-slate-900 text-slate-900 hover:bg-slate-50 font-medium text-sm transition-all"
            >
              System Capabilities
            </Link>
          </div>
        </div>

        {/* Minimalist Metrics Strip */}
        <div className="mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-light text-slate-900 font-mono">{COMPANY_INFO.experienceYears}</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-mono">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-slate-900 font-mono">{COMPANY_INFO.clientsCount}</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-mono">Enterprise Deployments</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-slate-900 font-mono">{COMPANY_INFO.studentsTrained}</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-mono">Certified Alumni</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-slate-900 font-mono">99.98%</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-mono">Operational Uptime</p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES: Clean Table / Modular Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-slate-900">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-slate-500">Directory 01</p>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mt-1">Enterprise Services</h2>
          </div>
          <Link to="/services1/SAP SERVICES/1" className="text-xs font-mono uppercase tracking-wider hover:underline">
            Index [12] →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <div key={service.id} className="p-8 border border-slate-200 hover:border-slate-900 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400">0{idx + 1} // {service.category}</span>
                <h3 className="text-xl font-medium text-slate-900 mt-3 mb-3">{service.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">{service.shortDesc}</p>
              </div>
              <Link
                to={service.url}
                className="text-xs font-mono uppercase tracking-wider text-slate-900 flex items-center justify-between pt-4 border-t border-slate-100 group"
              >
                <span>View Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIES: Monochromatic Typography List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-slate-900">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-slate-500">Directory 02</p>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mt-1">We Serve Industries</h2>
          </div>
          <Link to="/industries" className="text-xs font-mono uppercase tracking-wider hover:underline">
            All Sectors [06] →
          </Link>
        </div>

        <div className="divide-y divide-slate-200">
          {INDUSTRIES.map((ind, idx) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.id}`}
              className="py-6 flex flex-col sm:flex-row sm:items-center justify-between group hover:bg-slate-50 transition-colors px-4"
            >
              <div className="flex items-start sm:items-center gap-6">
                <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                <div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-blue-700 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-light mt-0.5">{ind.tagline}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 sm:mt-0">
                <div className="hidden md:flex gap-1">
                  {ind.modules.slice(0, 3).map((m, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600">
                      {m}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. TRAINING: Elegant Modular Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-slate-300">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-slate-500">Directory 03</p>
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mt-1">SAP Skill Programs</h2>
            </div>
            <Link to="/trainingprogrammes/Functional Modules/1" className="text-xs font-mono uppercase tracking-wider hover:underline">
              All Modules [15] →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINING_MODULES.slice(0, 8).map((mod) => (
              <div key={mod.id} className="bg-white p-6 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="text-slate-900 font-semibold">{mod.code}</span>
                    <span>{mod.duration}</span>
                  </div>
                  <h3 className="text-base font-medium text-slate-900 mb-2">{mod.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3 mb-6">
                    {mod.shortDesc}
                  </p>
                </div>
                <Link
                  to={mod.url}
                  className="text-xs font-mono uppercase tracking-wider text-slate-900 pt-3 border-t border-slate-100 flex items-center justify-between hover:text-blue-700"
                >
                  <span>Syllabus</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MINIMAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500">Ready to consult</p>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900">
            Let's evaluate your enterprise ERP requirements.
          </h2>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              <span>Get in Touch With ZisanTech</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

