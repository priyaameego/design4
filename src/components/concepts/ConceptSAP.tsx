import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Workflow,
  CheckCircle2,
  Server,
  Layers,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRAINING_MODULES, INDUSTRIES, BLOGS } from '../../data/siteData';

export const ConceptSAP: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900 pb-24 space-y-24">
      {/* 1. HERO SECTION: Enterprise Blueprinting & ERP Focus */}
      <section className="bg-gradient-to-b from-navy-950 via-slate-900 to-navy-900 text-white pt-20 pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/60 border border-blue-500/30 text-blue-200 text-xs font-semibold">
                <Workflow className="w-3.5 h-3.5 text-blue-400" />
                <span>SAP S/4HANA Implementation & Optimization Practice</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
                Certified Enterprise <span className="text-blue-400">SAP Solutions</span> & Modern Integration
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                ZisanTech specializes in high-stakes SAP Rollouts, custom Clean-Core ABAP/RAP development, automated GST E-Invoicing, and SLA-governed 24/7 technical support.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-900/50 transition-all flex items-center gap-2"
                >
                  <span>Request SAP System Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services1/SAP SERVICES/1"
                  className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all"
                >
                  View SAP Service Catalog
                </Link>
              </div>

              {/* SAP Module pill list */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Core Functional Modules Supported:</p>
                <div className="flex flex-wrap gap-2">
                  {['SD', 'MM', 'PP', 'QM', 'FICO', 'HCM', 'EWM', 'TM', 'Ariba', 'ABAP', 'CPI'].map((mod, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-blue-300">
                      SAP {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architecture Blueprint Mock */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-navy-900/90 border border-blue-500/30 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Enterprise SAP Stack Blueprint</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Verified SLA</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-blue-300">Front Office & E-Commerce Layer</p>
                    <p className="text-[11px] text-slate-400">Custom B2B Portals, POS Sync, CRM Leads</p>
                  </div>
                  <div className="text-center text-xs text-blue-400 font-mono">↕ SAP Integration Suite (CPI / PO) ↕</div>
                  <div className="p-3 rounded-lg bg-blue-950/80 border border-blue-500/40">
                    <p className="text-xs font-bold text-white">Central S/4HANA Clean Core</p>
                    <p className="text-[11px] text-slate-300">SD / MM / PP / QM / FICO / Asset Accounting</p>
                  </div>
                  <div className="text-center text-xs text-blue-400 font-mono">↕ Government Statutory Connectors ↕</div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-teal-300">GSTN / IRP Statutory Compliance</p>
                    <p className="text-[11px] text-slate-400">Real-Time E-Invoicing & E-Way Bill Auto-Generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SAP SERVICES CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded">
            Enterprise Solutions
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 font-display">Specialized SAP Services</h2>
          <p className="text-slate-600 text-sm mt-1">Robust methodologies tailored for multi-plant manufacturing and corporate rollouts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.filter(s => s.category === 'SAP SERVICES').map((s) => (
            <div key={s.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-blue-600 font-semibold">SAP SERVICE // 0{s.id}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.shortDesc}</p>
                <div className="space-y-1.5 mb-4">
                  {s.keyFeatures.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to={s.url} className="text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span>View Full Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIES BLUEPRINTS */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded">
              Industry Verticals
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 font-display">We Serve Industries</h2>
            <p className="text-slate-600 text-sm mt-1">Configured SAP templates for discrete manufacturing, retail, pharma, and energy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.id}`}
                className="p-6 rounded-xl border border-slate-200 hover:border-blue-600 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{ind.name}</h3>
                  <p className="text-xs text-blue-600 font-medium mt-1 mb-3">{ind.tagline}</p>
                  <p className="text-xs text-slate-600 line-clamp-3 mb-4">{ind.summary}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span>SAP Architecture & Case Study</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded">
              Career Incubation
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 font-display">Corporate SAP Training Modules</h2>
          </div>
          <Link to="/trainingprogrammes/Functional Modules/1" className="text-xs font-bold text-blue-700 hover:underline">
            View All 15 Modules →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_MODULES.slice(0, 8).map((mod) => (
            <div key={mod.id} className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{mod.code}</span>
                <h3 className="text-sm font-bold text-slate-900 mt-2 mb-1">{mod.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-3 mb-4">{mod.shortDesc}</p>
              </div>
              <Link to={mod.url} className="text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span>Curriculum Details</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

