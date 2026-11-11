import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Users2,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const CareerPage: React.FC = () => {
  const openings = [
    {
      title: 'Senior SAP S/4HANA FICO Consultant',
      department: 'Enterprise Consulting',
      location: 'New Delhi / Hybrid',
      type: 'Full-time',
      experience: '5+ Years',
      desc: 'Lead end-to-end financial accounting and controlling implementations, statutory tax configurations, and client hyper-care transitions.'
    },
    {
      title: 'Lead SAP CPI / Integration Architect',
      department: 'Cloud Solutions',
      location: 'New Delhi / Remote',
      type: 'Full-time',
      experience: '6+ Years',
      desc: 'Architect resilient iFlows, B2B adapters, and government E-Invoice APIs bridging SAP ERP with external platforms.'
    },
    {
      title: 'SAP SD/MM Functional Consultant',
      department: 'Supply Chain Practice',
      location: 'New Delhi / Hybrid',
      type: 'Full-time',
      experience: '3+ Years',
      desc: 'Design and deploy order-to-cash and procure-to-pay processes for manufacturing and retail clients.'
    },
    {
      title: 'ABAP on HANA & Fiori Developer',
      department: 'Technical Development',
      location: 'New Delhi / Hybrid',
      type: 'Full-time',
      experience: '3-5 Years',
      desc: 'Build clean-core RAP services, Core Data Services (CDS) views, and modern Fiori responsive web interfaces.'
    },
    {
      title: 'Corporate SAP Trainer (SD / FICO / ABAP)',
      department: 'Training & Skill Development',
      location: 'New Delhi / Hybrid',
      type: 'Full-time / Adjunct',
      experience: '4+ Years Teaching or Consulting',
      desc: 'Deliver live scenario-based training cohorts to aspiring enterprise consultants with hands-on lab guidance.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Career Banner */}
      <section className="bg-navy-950 text-white py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Work With ZisanTech
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              Build Your Career with Enterprise Leaders
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Join a high-performance team of certified SAP consultants, solution architects, and engineering mentors delivering mission-critical transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join ZisanTech */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-navy-950 font-display">Why Grow Your Career at ZisanTech</h2>
          <p className="text-slate-600 text-sm mt-1">We invest deeply in our people with continuous certification support and high-impact client engagements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy-950">High-Impact Projects</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work directly with enterprise manufacturing, energy, and retail leaders solving mission-critical supply chain and financial challenges.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy-950">Continuous Upskilling</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full sponsorship for advanced SAP certifications, BTP cloud sandbox environments, and ongoing architectural workshops.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy-950">Collaborative Culture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent leadership, flexible hybrid arrangements, meritocratic appraisals, and comprehensive health benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl font-bold text-navy-950 font-display">Active Openings</h2>
            <p className="text-xs text-slate-500 mt-0.5">Explore positions across our consulting, cloud, and training practices.</p>
          </div>
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            {openings.length} Positions Available
          </span>
        </div>

        <div className="space-y-4">
          {openings.map((job, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-bold text-navy-950">{job.title}</h3>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                    {job.department}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{job.desc}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                  <span>Exp: {job.experience}</span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

