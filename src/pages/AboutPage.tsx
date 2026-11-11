import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Compass, Award, CheckCircle2, ArrowRight, Users, Building2, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              About ZisanTech Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              Enterprise SAP & IT Services Built On Integrity
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We align intelligent enterprise software with real-world corporate objectives to drive operational visibility, statutory compliance, and sustainable scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Ethos & Mission / Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-navy-950 font-display">Our Commitment to Client Success</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              At ZisanTech Solutions, we believe that implementing ERP or modernizing IT infrastructure is never merely a technical task—it is an organizational evolution.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our seasoned consultants bring over a decade of deep industry expertise, having guided manufacturing giants, fast-growing retail networks, pharmaceutical formulators, and oil & gas enterprises through complex digital journeys.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>100% On-Time Delivery Guarantee with transparent milestone tracking</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Clean-Core SAP architectural compliance for future cloud upgradeability</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Comprehensive workforce training programs for sustainable talent incubation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950">🚀 Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To empower enterprises with scalable, clean-core SAP solutions and robust IT architectures that eliminate operational friction and unleash competitive agility.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950">🌍 Our Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To stand as the most trusted enterprise technology advisory and specialized ERP talent incubator across global manufacturing, supply chain, and commerce verticals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Foundation
            </span>
            <h2 className="text-3xl font-bold text-navy-950 mt-2 font-display">Our Core Values</h2>
            <p className="text-slate-600 text-sm mt-1">The foundational principles that guide every client engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-bold text-navy-950">Ethical Integrity</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent communication, honest scope evaluations, and strict adherence to statutory compliance.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-bold text-navy-950">Client-First Success</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure our consulting achievement solely by the measurable operational improvements our clients enjoy.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-bold text-navy-950">Continuous Innovation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Embracing SAP BTP, modern cloud integration adapters, and intelligent automation for ongoing value.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-bold text-navy-950">Delivery Excellence</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict testing protocols, comprehensive user training, and dependable 24/7 hyper-care support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Stats Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-navy-900 text-white p-8 sm:p-12 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold text-blue-400">{COMPANY_INFO.experienceYears}</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Years Industry Practice</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-teal-400">{COMPANY_INFO.clientsCount}</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Enterprise Clients Served</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-sky-400">{COMPANY_INFO.studentsTrained}</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Professionals Upskilled</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-400">24/7</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">SLA Support Coverage</p>
          </div>
        </div>
      </section>

      {/* Verified Location Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded">
              Verified Business Location
            </span>
            <h3 className="text-2xl font-bold text-navy-950">{COMPANY_INFO.name}</h3>
            <p className="text-sm text-slate-600 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </p>
            <p className="text-xs text-slate-500">
              Operations & Consulting center supporting clients across India and international timezones.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>Visit or Connect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

