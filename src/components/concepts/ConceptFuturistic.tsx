import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Zap,
  Activity,
  Cpu,
  ShieldAlert,
  ArrowRight,
  Database,
  Cloud,
  Network,
  Binary
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRAINING_MODULES, INDUSTRIES, BLOGS } from '../../data/siteData';

export const ConceptFuturistic: React.FC = () => {
  return (
    <div className="bg-[#050B14] text-slate-100 pb-24 space-y-28 selection:bg-teal-500 selection:text-black">
      {/* 1. HERO SECTION: Cybernetic / High-Tech Ambient */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-teal-500/20">
        {/* Glow Gradients & Circuit Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-500/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span>NEXT-GEN ENTERPRISE SYSTEM ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] font-display">
            Autonomous ERP & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-400 to-blue-500">Intelligent Tech</span> Orchestration
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Harness real-time data streaming, AI-infused SAP S/4HANA workflows, and zero-latency cloud middleware designed for the hyper-connected enterprise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-black font-bold text-sm shadow-xl shadow-teal-500/20 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Zap className="w-4 h-4 text-black fill-current" />
              <span>Deploy Intelligent ERP</span>
            </Link>

            <Link
              to="/services1/SAP SERVICES/7"
              className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-teal-300 border border-teal-500/30 text-sm font-semibold transition-all hover:border-teal-400"
            >
              Explore SAP AI Engine
            </Link>
          </div>

          {/* Futuristic Live Terminal Mock */}
          <div className="pt-12 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-black/60 border border-teal-500/30 p-5 backdrop-blur-xl shadow-2xl text-left font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-teal-400">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>ZISANTECH_KERNEL_STATUS // TELEMETRY_ACTIVE</span>
                </div>
                <span className="text-emerald-400 font-semibold">[ONLINE: SUB-SECOND LATENCY]</span>
              </div>
              <p className="text-slate-400">&gt; Initializing S/4HANA Clean-Core RAP Handshake... [SUCCESS]</p>
              <p className="text-slate-400">&gt; Connecting GSTN E-Invoice Statutory Bridge: 500,000+ IRNs Streamed [ZERO ERRORS]</p>
              <p className="text-teal-300">&gt; SAP Integration Suite CPI: Asynchronous Microservice Queues Synced</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES: Neon Glass Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400">Modules // 01</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Next-Gen SAP Services</h2>
          </div>
          <Link to="/services1/SAP SERVICES/1" className="text-xs font-mono text-teal-400 hover:text-teal-300">
            VIEW_FULL_MATRIX →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/60 p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {service.type === 'sap' ? 'SAP Core' : 'Digital Platform'}
                  </span>
                  <span className="text-xs font-mono text-slate-500">ID://0{service.id}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  to={service.url}
                  className="text-xs font-mono text-teal-400 hover:text-teal-300 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/contact" className="text-xs font-mono text-slate-500 hover:text-slate-300">
                  REQUEST_PO
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIES: Cybernetic Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400">Target Ecosystems // 02</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">We Serve Industries</h2>
          <p className="text-slate-400 text-xs mt-2">Specialized sector blueprints optimized for enterprise data throughput.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.id}`}
              className="rounded-2xl bg-gradient-to-b from-slate-900/60 to-black border border-slate-800 hover:border-teal-400/80 p-6 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {ind.name}
                </h3>
                <span className="text-xs font-mono text-teal-400">→</span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 mb-4">{ind.tagline}</p>
              <div className="flex flex-wrap gap-1">
                {ind.modules.slice(0, 3).map((m, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950/60 text-teal-300 border border-teal-500/20">
                    {m}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. TRAINING: Academy Terminal */}
      <section className="bg-slate-950 py-20 border-y border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-teal-400">Skill Vectors // 03</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">SAP Professional Incubation</h2>
            </div>
            <Link to="/trainingprogrammes/Functional Modules/1" className="text-xs font-mono text-teal-400 hover:text-teal-300">
              EXPLORE_CURRICULA [15] →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINING_MODULES.slice(0, 8).map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 flex flex-col justify-between hover:border-teal-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-teal-300 mb-2">
                    <span className="font-bold">{mod.code}</span>
                    <span className="text-slate-500">{mod.duration}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">{mod.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-3 mb-4">{mod.shortDesc}</p>
                </div>
                <Link
                  to={mod.url}
                  className="text-xs font-mono text-teal-400 hover:underline pt-3 border-t border-slate-800 flex items-center justify-between"
                >
                  <span>VIEW_SYLLABUS</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-teal-950/80 via-slate-900 to-black border border-teal-500/40 p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Step Into Next-Gen Enterprise Performance
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Upgrade your operational infrastructure to autonomous, high-throughput standards.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-black font-bold text-sm shadow-xl shadow-teal-500/20 transition-all"
            >
              <span>Connect with Solution Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

