import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    interestType: 'sap-consulting',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F9FC] text-[#191A24] font-sans pt-28">
      {/* Transformation Strip (Reference Inspired) */}
      <div className="bg-[#6941C6] py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#EDE8FA] font-bold">
              PARTNER WITH ENTERPRISE ARCHITECTS
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Start Your Transformation Journey Today
            </h1>
            <p className="text-sm text-white/80 max-w-xl">
              Connect directly with our senior SAP S/4HANA architects and global enterprise consulting team.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#191A24] hover:bg-[#252633] text-white px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl transition-all cursor-pointer border border-white/20"
          >
            Request Consultation Brief
          </button>
        </div>
      </div>

      {/* Embedded High-Resolution Map with Floating HQ Pin Card */}
      <div className="relative w-full h-[480px] sm:h-[520px] overflow-hidden">
        <iframe
          title="ZisanTech Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52728034389645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71dbff28f5!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 filter contrast-[1.05] opacity-90"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Floating Pin Card (Mawai Reference UI) */}
        <div className="absolute top-6 left-4 sm:left-12 z-20 bg-white text-[#191A24] p-5 rounded-2xl shadow-2xl border border-[#191A24]/10 max-w-xs animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center font-bold text-sm flex-shrink-0">
              ZT
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-extrabold text-sm text-[#191A24] leading-tight">
                ZisanTech Solutions
              </h4>
              <p className="text-xs text-[#191A24]/70 leading-relaxed">
                Commercial Business District, Delhi, 110001, India
              </p>
              <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#6941C6] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#6941C6] animate-pulse"></span>
                <span>Corporate Headquarters</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#191A24]/10 flex items-center justify-between">
            <a
              href="https://maps.google.com/?q=Delhi,India"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#6941C6] hover:bg-[#7E56D9] text-white text-[11px] font-bold rounded-lg transition-colors"
            >
              <span>Open in Maps</span>
              <ArrowRight className="w-3 h-3" />
            </a>
            <span className="text-[10px] text-[#191A24]/50 font-mono">24/7 Global Hub</span>
          </div>
        </div>
      </div>

      {/* 3 Overlay Multi-Location Cards (Exact Reference Style) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Delhi / India */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white text-[#191A24] rounded-2xl p-7 shadow-2xl border border-[#191A24]/10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-[#191A24]/10 pb-3">
              <h3 className="font-heading font-extrabold text-lg text-[#191A24]">
                Delhi / India
              </h3>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EDE8FA] text-[#6941C6] px-2 py-0.5 rounded">
                Headquarters
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#191A24]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">Direct Telephone</span>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-[#191A24] hover:text-[#6941C6]">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">Consulting RFP</span>
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="font-bold text-[#191A24] hover:text-[#6941C6]">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">Registered Office</span>
                  <span className="font-medium text-[#191A24]">Commercial Business District, Delhi, 110001</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: USA / Americas */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white text-[#191A24] rounded-2xl p-7 shadow-2xl border border-[#191A24]/10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-[#191A24]/10 pb-3">
              <h3 className="font-heading font-extrabold text-lg text-[#191A24]">
                USA / Americas
              </h3>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EDE8FA] text-[#6941C6] px-2 py-0.5 rounded">
                Enterprise Advisory
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#191A24]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">International Line</span>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-[#191A24] hover:text-[#6941C6]">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">North America Advisory</span>
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="font-bold text-[#191A24] hover:text-[#6941C6]">
                    usa.advisory@zisantech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">Coordinating Desk</span>
                  <span className="font-medium text-[#191A24]">Global Remote SAP Delivery & Rollout Center</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: International / EMEA */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white text-[#191A24] rounded-2xl p-7 shadow-2xl border border-[#191A24]/10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-[#191A24]/10 pb-3">
              <h3 className="font-heading font-extrabold text-lg text-[#191A24]">
                EMEA / Global
              </h3>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EDE8FA] text-[#6941C6] px-2 py-0.5 rounded">
                24/7 SLA Support
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#191A24]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">24/7 Support Desk</span>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-[#191A24] hover:text-[#6941C6]">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">Support Coordination</span>
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="font-bold text-[#191A24] hover:text-[#6941C6]">
                    emea.support@zisantech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDE8FA] text-[#6941C6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#191A24]/50 block">Operations Center</span>
                  <span className="font-medium text-[#191A24]">Cross-border multi-plant ERP operations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Consultation Form */}
        <div id="contact-form" className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#191A24]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6941C6]">
                INITIATE PROJECT DIALOGUE
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#191A24] tracking-tight">
                Connect with an Enterprise Architect
              </h2>
              <p className="text-sm text-[#191A24]/70 leading-relaxed">
                Whether you need a Greenfield implementation, custom ABAP RAP extensions, or 24/7 SLA-governed support, submit your brief below.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#191A24]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#6941C6]" />
                  <span>Strict NDA and data protection guaranteed</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#191A24]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#6941C6]" />
                  <span>Response from a practice director within 24 hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#191A24]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#6941C6]" />
                  <span>Complimentary architecture review and estimation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#EDE8FA] border border-[#6941C6]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#6941C6] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#191A24]">
                    Consultation Brief Received
                  </h3>
                  <p className="text-xs text-[#191A24]/70">
                    Thank you, {formData.fullName}. A senior ZisanTech consultant will connect with you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#191A24] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Vikram Malhotra"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border border-[#191A24]/15 text-xs focus:outline-none focus:border-[#6941C6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#191A24] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border border-[#191A24]/15 text-xs focus:outline-none focus:border-[#6941C6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#191A24] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 87978 18499"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border border-[#191A24]/15 text-xs focus:outline-none focus:border-[#6941C6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#191A24] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Organization Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border border-[#191A24]/15 text-xs focus:outline-none focus:border-[#6941C6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191A24] mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border border-[#191A24]/15 text-xs focus:outline-none focus:border-[#6941C6]"
                    >
                      <option value="sap-consulting">SAP Implementation & S/4HANA</option>
                      <option value="sap-rollout">SAP Global Rollout & Localization</option>
                      <option value="sap-support">SAP 24/7 SLA Support Hyper-Care</option>
                      <option value="sap-integration">SAP Integration Suite (CPI/PO & Banking)</option>
                      <option value="sap-custom">Custom ABAP RAP & Fiori Solutions</option>
                      <option value="sap-training">Corporate SAP Training Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191A24] mb-1.5">
                      Project Scope & Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your ERP landscape, timeline or core objective..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border border-[#191A24]/15 text-xs focus:outline-none focus:border-[#6941C6]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#6941C6] hover:bg-[#7E56D9] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#6941C6]/30 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
