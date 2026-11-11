import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  Workflow,
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { INDUSTRIES, SERVICES, TRAINING_MODULES, COMPANY_INFO } from '../data/siteData';

export const IndustriesPage: React.FC = () => {
  const { industryId } = useParams<{ industryId?: string }>();

  const industryIcons: Record<string, React.ReactNode> = {
    'manufacturing': <Factory className="w-8 h-8 text-blue-600" />,
    'retail-textile': <ShoppingBag className="w-8 h-8 text-teal-600" />,
    'oil-gas': <Fuel className="w-8 h-8 text-amber-600" />,
    'agro-chemical': <Sprout className="w-8 h-8 text-emerald-600" />,
    'steel': <Workflow className="w-8 h-8 text-sky-600" />,
    'pharma': <FlaskConical className="w-8 h-8 text-indigo-600" />
  };

  const selectedIndustry = industryId ? INDUSTRIES.find((i) => i.id === industryId) : null;

  // Single Industry Detail View
  if (selectedIndustry) {
    return (
      <div className="space-y-16 pb-20">
        {/* Industry Hero */}
        <section className="bg-navy-950 text-white py-16 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/industries" className="hover:text-white">We Serve Industries</Link>
              <span>/</span>
              <span className="text-teal-400 font-semibold">{selectedIndustry.name}</span>
            </div>

            <div className="max-w-4xl space-y-4">
              <div className="p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-md border border-white/15">
                {industryIcons[selectedIndustry.id]}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
                Industry Practice
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                {selectedIndustry.name} Industry Solutions
              </h1>
              <p className="text-xl text-teal-300 font-medium">
                {selectedIndustry.tagline}
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                {selectedIndustry.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Industry Challenges & Solutions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Challenges */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <h2 className="text-2xl font-bold text-navy-950">Key Industry Challenges</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedIndustry.challenges.map((c, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-2">
                      <span className="text-xs font-bold font-mono text-amber-700">PAIN POINT 0{idx + 1}</span>
                      <p className="text-xs text-slate-800 leading-relaxed font-medium">{c}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-navy-950">ZisanTech Tailored Architectural Solutions</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedIndustry.solutions.map((s, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-2">
                      <span className="text-xs font-bold font-mono text-blue-700">SOLUTION 0{idx + 1}</span>
                      <p className="text-xs text-slate-800 leading-relaxed font-medium">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <h2 className="text-2xl font-bold text-navy-950">Measurable Proven Outcomes</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedIndustry.outcomes.map((out, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-teal-50/40 border border-teal-200/80 text-center space-y-2">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 mx-auto" />
                      <p className="text-xs text-navy-950 font-bold leading-relaxed">{out}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Case Snippet */}
              <div className="p-7 rounded-2xl bg-slate-900 text-white space-y-3 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Verified Industry Case Snapshot
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  "{selectedIndustry.caseSnippet}"
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Implementation Lead: ZisanTech Enterprise Practice</span>
                  <Link to="/contact" className="text-teal-400 font-semibold hover:underline">
                    Request Full Case Study PDF →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar with related industries & modules */}
            <div className="lg:col-span-4 space-y-6">
              {/* Modules Employed */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 pb-2 border-b border-slate-100">
                  Core Modules & Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.modules.map((m, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-semibold">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other Industries Navigation */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 pb-2 border-b border-slate-100">
                  All 6 Core Verticals
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {INDUSTRIES.map((ind) => (
                    <li key={ind.id}>
                      <Link
                        to={`/industries/${ind.id}`}
                        className={`block p-2.5 rounded-lg transition-colors flex items-center justify-between ${
                          ind.id === selectedIndustry.id
                            ? 'bg-teal-600 text-white font-semibold'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{ind.name}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation CTA */}
              <div className="p-6 rounded-2xl bg-navy-950 text-white border border-white/10 space-y-4">
                <h4 className="text-base font-bold text-white">Consulting for {selectedIndustry.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Discuss your vertical-specific statutory, inventory, or production planning requirements with our dedicated industry leads.
                </p>
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Book Industry Discovery
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // All Industries Landing Page: "Industries We Serve"
  return (
    <div className="space-y-20 pb-20">
      {/* Industries Landing Header */}
      <section className="bg-navy-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Sector Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              Industries We Serve
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every vertical possesses distinctive supply chain rhythms, compliance mandates, and operational complexities. Explore how ZisanTech delivers specialized SAP and IT capabilities across six foundational industries.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Industry Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-teal-50 transition-colors">
                    {industryIcons[ind.id]}
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Vertical
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy-950 mb-2 group-hover:text-teal-700 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs font-semibold text-teal-700 mb-3">{ind.tagline}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {ind.summary}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Deployed Modules:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.modules.map((m, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-[11px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/industries/${ind.id}`}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Explore Industry Architecture</span>
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

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 to-blue-950 text-white p-10 sm:p-14 border border-white/10 shadow-2xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Tailored Industry Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Need a Custom Architecture for Your Industry?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Our enterprise consultants evaluate your specific shop-floor workflows, statutory GST/IRP prerequisites, and warehouse logistics to propose battle-tested ERP designs.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-sm transition-all"
            >
              <span>Schedule Industry Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

