import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
  Sparkles,
  Phone,
  Layers,
  Cpu,
  GraduationCap,
  Play,
  MessageSquare,
  Rocket,
  ThumbsUp,
  BarChart3,
  Globe,
  User,
  Tag,
  Zap
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES,
  TRAINING_MODULES,
  INDUSTRIES,
  BLOGS,
  ServiceItem,
  IndustryItem,
  TrainingItem,
  BlogItem
} from '../../data/siteData';

export const ConceptEnterprise: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'IDEAL FOR ALL BUSINESS SIZES',
      line1: 'Empower Your Business',
      highlight: 'With Customizable SAP',
      line2: 'Solutions With ZisanTech',
      description: 'Elevate your small or medium-sized enterprise to the next level with our certified SAP S/4HANA solutions, agile implementations, and 24/7 dedicated support.',
      bgImage: '/slide1_bg.webp',
      btnText: 'GET A FREE DEMO',
      btnLink: '#contact-cta',
      secondaryBtnText: 'EXPLORE SERVICES',
      secondaryBtnLink: '#services'
    },
    {
      badge: 'CERTIFIED RISE WITH SAP PRACTICE',
      line1: 'Unlock The Power Of',
      highlight: 'SAP S/4HANA Cloud ERP',
      line2: 'With ZisanTech Enterprise',
      description: 'Your Trusted Partner for Cloud, On-Premise, and Hybrid Solutions, empowering your enterprise to achieve operational excellence and real-time visibility.',
      bgImage: '/slide2_bg.webp',
      btnText: 'CONSULT AN ARCHITECT',
      btnLink: '#contact-cta',
      secondaryBtnText: 'EXPLORE SOLUTIONS',
      secondaryBtnLink: '#services'
    },
    {
      badge: '10+ YEARS OF PROVEN DELIVERY',
      line1: 'Best SAP ERP Consultancy',
      highlight: 'Tailored For Enterprise Growth',
      line2: '& Process Automation',
      description: 'Comprehensive SAP consulting, tailored ERP modules for Indian manufacturing and retail, and hands-on professional corporate training.',
      bgImage: '/slide3_bg.webp',
      btnText: 'SCHEDULE DEMO',
      btnLink: '#contact-cta',
      secondaryBtnText: 'ABOUT ZISANTECH',
      secondaryBtnLink: '#about'
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#063B83] selection:text-white overflow-hidden">
      {/* =========================================================================
          1. ZisanTech AUTHENTIC REVOLUTION SLIDER HERO BANNER
      ========================================================================= */}
      <section className="relative w-full h-[580px] sm:h-[640px] md:h-[680px] lg:h-[720px] overflow-hidden bg-slate-950">
        {/* Slides Container - Smooth crossfade with Framer Motion luxury animated text */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Visual with Luxury Cinematic Ken Burns Effect */}
              <motion.img
                src={slide.bgImage}
                alt={slide.line1}
                animate={
                  isActive
                    ? { scale: [1, 1.12], x: [0, -12], y: [0, -8] }
                    : { scale: 1, x: 0, y: 0 }
                }
                transition={{
                  duration: 8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80';
                }}
              />

              {/* Digital Transformation Glass HUD Overlay with Royal Navy Vignette */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/35"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(6,59,131,0.35)_0%,transparent_65%)]"></div>

              {/* Slide Content: Active Staggered Fluid Motion */}
              {isActive && (
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="max-w-3xl text-left space-y-5 sm:space-y-6 pt-8 sm:pt-0">
                    {/* 1. Top Badge with Electric Cyan Accent Bar */}
                    <motion.div
                      key={`badge-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md"
                    >
                      <span className="w-5 h-0.5 bg-[#08B9E8] rounded-full shadow-[0_0_8px_#08B9E8]"></span>
                      <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                        {slide.badge}
                      </span>
                    </motion.div>

                    {/* 2. Main Headline - 2-Tone Typography with Brand Cyan/Electric Blue Highlight */}
                    <motion.h1
                      key={`headline-${currentSlide}`}
                      initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.14] tracking-tight font-heading"
                    >
                      {slide.line1} <br />
                      <span className="text-[#08B9E8] drop-shadow-[0_2px_14px_rgba(8,185,232,0.45)]">
                        {slide.highlight}
                      </span>{' '}
                      <br />
                      {slide.line2}
                    </motion.h1>

                    {/* 3. Description */}
                    <motion.p
                      key={`desc-${currentSlide}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-xl font-normal"
                    >
                      {slide.description}
                    </motion.p>

                    {/* 4. Action CTA Buttons - Brand Royal & Electric Blue Demo Button */}
                    <motion.div
                      key={`btns-${currentSlide}`}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                      <a
                        href={slide.btnLink}
                        className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] hover:from-[#087FE5] hover:to-[#063B83] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-lg shadow-xl shadow-[#087FE5]/30 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.btnText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </a>

                      <a
                        href={slide.secondaryBtnLink}
                        className="w-full sm:w-auto text-center px-6 sm:px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        {slide.secondaryBtnText}
                      </a>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#087FE5] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#087FE5] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#087FE5]' : 'w-2.5 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. ZisanTech 3-FEATURE BENEFIT BAR (Brand Matching Blue Hover Cards)
      ========================================================================= */}
      <section id="benefits" className="relative z-30 -mt-8 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Swift ERP Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-white hover:bg-[#071B49] p-7 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Ambient Deep Navy Background & Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(8,127,229,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-white transition-colors font-heading">
                Swift ERP Implementation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Minimize downtime with our seasoned consulting team, ensuring a fast and seamless SAP S/4HANA Cloud rollout.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Real-time Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-white hover:bg-[#071B49] p-7 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Ambient Deep Navy Background & Wave on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(8,185,232,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-white transition-colors font-heading">
                Real-time Analytics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Gain a decisive operational edge with instant data insights from SAP, driving enterprise efficiency and executive visibility.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Affordable Scalability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-white hover:bg-[#071B49] p-7 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Ambient Deep Navy Background & Wave on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(8,127,229,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
                <ThumbsUp className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-white transition-colors font-heading">
                Affordable Scalability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Enjoy the scalability and flexibility of SAP Cloud offerings, adapting seamlessly to your corporate growth without friction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          3. ZISANTECH "WE'RE A DIGITAL SAP & IT SOLUTIONS AGENCY" (Image 4 & Image 2)
      ========================================================================= */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Multi-Layer Image Montage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative pb-8 sm:pb-0"
          >
            {/* Base Image: Authentic IT Enterprise Collaboration */}
            <div className="relative w-full sm:w-[86%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                alt="ZisanTech SAP Solutions Team"
                className="w-full h-[400px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/70 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Image with 3D Float Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative sm:absolute sm:right-0 sm:bottom-6 w-full sm:w-[65%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-0 z-10 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Digital Transformation Presentation"
                className="w-full h-[230px] sm:h-[270px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#063B83]/70 via-transparent to-transparent"></div>
              {/* 3D Sheen Light Swipe on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            </motion.div>

            {/* Floating Counter Badge: 360+ Satisfied Clients */}
            <div className="relative sm:absolute sm:-bottom-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 flex items-center gap-3.5 mt-4 sm:mt-0 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center font-bold shadow-md shadow-[#087FE5]/20 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#087FE5] leading-none font-heading">
                  360+
                </p>
                <p className="text-xs font-bold text-[#071B49] mt-1">
                  Satisfied Clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content (Image 4 & Image 2 Verified Content) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
                  OUR WORK IS FOR YOUR SUCCESS
                </span>
                <span className="w-8 h-0.5 bg-[#087FE5] rounded-full"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#071B49] mt-3 leading-[1.18] font-heading">
                We're A Digital <span className="text-[#087FE5]">SAP &amp; IT Solutions</span> Agency
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Transforming businesses and careers with <span className="text-[#087FE5] font-bold">Smart SAP Solutions</span>, Practical Training &amp; Innovative IT Services.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We deliver results that fuel your success. Whether you're scaling your business or advancing your SAP career, we help you grow smarter and stronger with modern technology architectures.
            </p>

            {/* Dual Highlights: SAP Consulting & SAP Training (From Image 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white shadow-lg shadow-[#087FE5]/20 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white mb-2">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-heading">SAP Consulting</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Expert guidance on SAP S/4HANA deployment, system integration, and business process optimization.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:border-[#087FE5] transition-colors space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#087FE5] mb-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#071B49] font-heading">SAP Training</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hands-on live projects, SAP system access, and career-focused mentorship programs.
                </p>
              </div>
            </div>

            {/* Inset Promo Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#087FE5] flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#071B49]">
                  Empowering your journey to scalable success
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Leveraging deep SAP expertise and future-ready IT roadmaps
                </p>
              </div>
              <a
                href="#services"
                className="text-xs font-bold text-[#087FE5] hover:text-[#063B83] flex items-center gap-1 uppercase tracking-wider transition-colors"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          4. ZISANTECH "INNOVATIVE SAP SOLUTIONS" (Image 1 & Image 3)
      ========================================================================= */}
      <section id="why-us" className="bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08B9E8] font-mono">
              FUTURE-READY ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
              Innovative SAP Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Driving smarter operations and connected experiences with flexible, future-ready SAP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 3D Cloud Integration Infographic Card (From Image 1) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative group overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FE5]/30 text-[#08B9E8] text-xs font-bold font-mono">
                    <Zap className="w-3.5 h-3.5" />
                    CLOUDFIRST ARCHITECTURE
                  </div>
                  <span className="text-xs text-slate-400 font-mono">SAP S/4HANA</span>
                </div>

                <div className="text-center py-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#063B83] via-[#087FE5] to-[#08B9E8] mx-auto flex items-center justify-center shadow-2xl shadow-[#087FE5]/40 mb-4 group-hover:scale-105 transition-transform">
                    <Layers className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">Cloud Integration</h3>
                  <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                    Smooth connectivity across systems with cloud-based integration built for enterprise agility and reliability.
                  </p>
                </div>

                {/* Sub-capabilities (API Management, Process Automation, Data Security) */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/10 text-center space-y-1">
                    <Cpu className="w-5 h-5 text-[#08B9E8] mx-auto" />
                    <p className="text-[11px] font-bold text-white">API Management</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 text-center space-y-1">
                    <Rocket className="w-5 h-5 text-[#087FE5] mx-auto" />
                    <p className="text-[11px] font-bold text-white">Process Auto</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 text-center space-y-1">
                    <ShieldCheck className="w-5 h-5 text-[#08B9E8] mx-auto" />
                    <p className="text-[11px] font-bold text-white">Data Secure</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Pillars List (From Image 1 & Image 3) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-5"
            >
              {/* Item 1: Cloud Integration Services */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#087FE5] hover:bg-white/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading group-hover:text-[#08B9E8] transition-colors">
                      Cloud Integration Services
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                      Enable smooth connectivity across systems with cloud-based integration built for agility and reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2: Comprehensive SAP Services */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#087FE5] hover:bg-white/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading group-hover:text-[#08B9E8] transition-colors">
                      Comprehensive SAP Services
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                      From implementation to optimization, we deliver end-to-end SAP solutions tailored to your business needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3: Driving Business Success & Empowering Aspiring SAP Experts */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#087FE5] hover:bg-white/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading group-hover:text-[#08B9E8] transition-colors">
                      Driving Business Success &amp; Expertise
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                      Collaborate with enterprises to enhance workflows, while empowering aspiring consultants with simulated project experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ZisanTech FUN FACTS / METRICS STRIP
      ========================================================================= */}
      <section id="metrics" className="bg-[#f5f8fc] py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                {COMPANY_INFO.experienceYears}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Years of Trust</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                {COMPANY_INFO.clientsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                {COMPANY_INFO.consultantsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">SAP Consultants</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                {COMPANY_INFO.studentsTrained}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Trained Professionals</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ZisanTech "INDUSTRIES WE SERVE" SECTION (With 3D Hover Zoom)
      ========================================================================= */}
      <section id="industries" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading">
            Digitize your industry performance with our top SAP ERP Solution
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your industry-specific customized SAP ERP solutions for all business sizes, ensuring statutory compliance. We optimize processes, integrate best practices, and drive operational success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind: IndustryItem, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              <a
                href="#contact-cta"
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#087FE5]/30 transition-all duration-500 h-[360px] flex flex-col justify-end p-7 border border-slate-200/80 hover:border-[#087FE5] block bg-slate-900"
              >
                {/* Background Image with Smooth 3D Scale Zoom */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Multi-Stop Gradient Overlay (Dark Navy at Bottom, Light Vignette) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49] via-[#071B49]/60 to-black/20 group-hover:from-[#063B83]/95 group-hover:via-[#071B49]/70 transition-all duration-500" />

                {/* 3D Light Sheen Sweep Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

                {/* Top-Right Pill Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071B49]/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#08B9E8] border border-[#08B9E8]/30 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#08B9E8] animate-pulse" />
                    SAP Vertical
                  </span>
                </div>

                {/* Bottom Content Area with Smooth Text Stagger */}
                <div className="relative z-20 space-y-2.5">
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#087FE5]/30 backdrop-blur-md border border-[#087FE5]/40 text-[#08B9E8] text-[10px] font-bold uppercase tracking-wider font-mono">
                    {ind.tagline || 'ENTERPRISE ERP VERTICAL'}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#08B9E8] transition-colors font-heading leading-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                    {ind.summary}
                  </p>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#08B9E8] group-hover:text-white transition-colors">
                    <span>Explore Industry Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. ZISANTECH "10 CORE SERVICES" GRID (Exact Match With Image 5)
      ========================================================================= */}
      <section id="services" className="bg-[#f8fafc] py-24 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle decorative background aura */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#087FE5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#063B83]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              END-TO-END CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] font-heading tracking-tight">
              Enterprise SAP &amp; IT Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Delivering dependable SAP consulting, custom solution engineering, continuous support, and modern digital enterprise platforms.
            </p>
          </div>

          {/* 10 Services Grid (Dark Navy Cards matching Image 5 with 3D Hover & Cyan Glow) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                id: 1,
                title: 'SAP Rollout',
                category: 'SAP SERVICES',
                icon: Globe,
                highlight: false
              },
              {
                id: 2,
                title: 'SAP Custom solutions',
                category: 'SAP SERVICES',
                icon: Sparkles,
                highlight: true
              },
              {
                id: 3,
                title: 'SAP Support',
                category: 'SAP SERVICES',
                icon: ShieldCheck,
                highlight: false
              },
              {
                id: 4,
                title: 'SAP Integration',
                category: 'SAP SERVICES',
                icon: Layers,
                highlight: false
              },
              {
                id: 5,
                title: 'SAP Consulting',
                category: 'SAP SERVICES',
                icon: Cpu,
                highlight: false
              },
              {
                id: 6,
                title: 'SAP E-Invoice & E-Way Bill',
                category: 'SAP SERVICES',
                icon: CheckCircle,
                highlight: false
              },
              {
                id: 7,
                title: 'SAP AI',
                category: 'SAP SERVICES',
                icon: Zap,
                highlight: false
              },
              {
                id: 8,
                title: 'CRM / ERP Solutions',
                category: 'Other Services',
                icon: Briefcase,
                highlight: false
              },
              {
                id: 9,
                title: 'E-commerce Solutions',
                category: 'Other Services',
                icon: Rocket,
                highlight: false
              },
              {
                id: 10,
                title: 'HRMS Solutions',
                category: 'Other Services',
                icon: Users,
                highlight: false
              }
            ].map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <a
                    href="#contact-cta"
                    className={`block h-full p-6 sm:p-7 rounded-2xl bg-[#0b172e] hover:bg-[#071B49] border transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#087FE5]/30 flex flex-col justify-between group cursor-pointer ${
                      svc.highlight
                        ? 'border-[#08B9E8]/60 shadow-[0_0_20px_rgba(8,185,232,0.15)]'
                        : 'border-slate-800 hover:border-[#087FE5]/70'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Icon Box */}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                          svc.highlight
                            ? 'bg-[#08B9E8]/20 text-[#08B9E8] shadow-md shadow-[#08B9E8]/20 group-hover:scale-110'
                            : 'bg-white/10 text-white group-hover:bg-[#087FE5] group-hover:scale-110'
                        }`}
                      >
                        <IconComp className="w-7 h-7" />
                      </div>

                      {/* Service Title */}
                      <h3
                        className={`text-base sm:text-lg font-bold font-heading leading-snug transition-colors ${
                          svc.highlight
                            ? 'text-[#08B9E8]'
                            : 'text-white group-hover:text-[#08B9E8]'
                        }`}
                      >
                        {svc.title}
                      </h3>
                    </div>

                    {/* Category Label */}
                    <div className="pt-4 mt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-200">
                        {svc.category}
                      </span>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#contact-cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] hover:shadow-xl hover:shadow-[#087FE5]/25 transition-all group"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. ZISANTECH "WHAT WE BRING TO YOUR BUSINESS" (Image 3 from ZisanTech.com)
      ========================================================================= */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#071B49] font-heading">
              What We Bring to Your Business
            </h2>
            <div className="w-16 h-1 bg-[#087FE5] mx-auto rounded-full"></div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              At ZisanTech Solutions, we provide dependable, business-focused solutions designed to simplify your operations and support sustainable growth. Our blend of SAP expertise and IT innovation ensures your business runs efficiently and adapts to changing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Process Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50/80 hover:bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-[#087FE5] shadow-sm hover:shadow-xl transition-all duration-300 text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#08B9E8] bg-white text-[#087FE5] mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#071B49] font-heading group-hover:text-[#087FE5] transition-colors">
                Process Optimization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We analyze your existing workflows and identify inefficiencies, then design streamlined, standardized processes that boost productivity and reduce operational friction.
              </p>
            </motion.div>

            {/* Pillar 2: Tailored SAP Implementation & Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50/80 hover:bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-[#087FE5] shadow-sm hover:shadow-xl transition-all duration-300 text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#087FE5] bg-white text-[#087FE5] mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#071B49] font-heading group-hover:text-[#087FE5] transition-colors">
                Tailored SAP Implementation &amp; Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our team customizes SAP solutions to fit your specific business requirements, ensuring seamless integration and maximum value from your technology investment.
              </p>
            </motion.div>

            {/* Pillar 3: Quality Assurance & Continuous Improvement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50/80 hover:bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-[#087FE5] shadow-sm hover:shadow-xl transition-all duration-300 text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#063B83] bg-white text-[#063B83] mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#071B49] font-heading group-hover:text-[#087FE5] transition-colors">
                Quality Assurance &amp; Continuous Improvement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Through rigorous testing and ongoing monitoring, we maintain high standards for all solutions, ensuring reliability, accuracy, and performance over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. ZISANTECH "OUR SKILLS & PROFICIENCY" (Image 2 from ZisanTech.com)
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
                  BENCHMARK ARCHITECTURE
                </span>
                <span className="w-8 h-0.5 bg-[#087FE5] rounded-full"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading leading-tight">
                Our <span className="text-[#087FE5]">Skills</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071B49] font-heading">
                We're skilled in wide range of enterprise ERP and digital market tools.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We combine advanced technical skills, real-world project experience, and a strong understanding of business needs to create impactful, tailored enterprise solutions.
              </p>
            </div>

            {/* Right Interactive Progress Bars */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { id: '01', title: 'SAP Expertise', pct: 90 },
                { id: '02', title: 'System Integration', pct: 70 },
                { id: '03', title: 'SAP Training Excellence', pct: 80 },
                { id: '04', title: 'IT & Digital Solutions', pct: 95 },
                { id: '05', title: 'Business Transformation', pct: 75 }
              ].map((skill, idx) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#071B49]">
                    <span className="font-mono">
                      <span className="text-[#087FE5]">{skill.id} —</span> {skill.title}
                    </span>
                    <span className="text-[#087FE5] font-mono">{skill.pct}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200/90 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. ZisanTech "CAREERS / TRAINING" SECTION (Take Your Careers to New Heights)
      ========================================================================= */}
      <section id="training" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FE5]/10 border border-[#087FE5]/20 text-xs font-bold uppercase tracking-widest text-[#063B83]">
            Career Incubation & Enablement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] font-heading tracking-tight">
            Take Your Careers to New Heights with the Leading ERP Solution Provider
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Upskill with real enterprise projects, 24/7 dedicated server sandboxes, and structured curriculum designed by veteran SAP consultants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_MODULES.slice(0, 8).map((mod: TrainingItem, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:shadow-[#087FE5]/20 border border-slate-200/90 hover:border-[#087FE5] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle gradient corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#087FE5]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#087FE5]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#063B83] bg-blue-50/90 border border-blue-200/60 px-2.5 py-1 rounded-md shadow-xs group-hover:bg-[#063B83] group-hover:text-white transition-colors">
                    {mod.code}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">Live Sandbox</span>
                </div>
                <h3 className="text-base font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-heading mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed font-normal">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact-cta"
                  className="text-xs font-bold text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Request Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] font-semibold text-slate-500 font-mono bg-slate-50 px-2 py-0.5 rounded">
                  {mod.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. ZisanTech "BLOGS" SECTION (Exact Match with Image 1: Date Block, Hover Zoom & Brand Blue)
      ========================================================================= */}
      <section id="blogs" className="bg-[#f8fafc] py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered ZisanTech Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              INSIGHTS & PERSPECTIVES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#071B49] font-heading">
              Blogs
            </h2>
            <div className="w-12 h-1 bg-[#087FE5] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                day: '2',
                month: 'DEC',
                title: 'How SAP Consulting Helps Businesses Work Smarter',
                author: 'by Admin',
                category: 'Technology',
                comments: 3,
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                excerpt: 'Running a business involves managing multiple activities from customer orders to reporting. SAP consulting connects technology with real business needs to streamline workflows.'
              },
              {
                id: 2,
                day: '7',
                month: 'JAN',
                title: 'Why Reliable IT Services Matter for Growing Businesses',
                author: 'by Admin',
                category: 'Technology',
                comments: 5,
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
                excerpt: 'From enterprise communication to ERP infrastructure, companies depend on reliable IT support to maintain systems, prevent downtime, and accelerate operations.'
              },
              {
                id: 3,
                day: '12',
                month: 'FEB',
                title: 'Building Your Career Through Practical SAP Training',
                author: 'by Admin',
                category: 'Technology',
                comments: 4,
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
                excerpt: 'By exploring enterprise business scenarios and practicing transactions on live server sandboxes, learners build confidence and hands-on skills for consulting roles.'
              }
            ].map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image with Brand Blue/Cyan Date Block (NO Yellow/Orange anywhere) */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Top-Right Date Badge Block (Logo-Matching Gradient: #063B83 to #087FE5 with Cyan Accent) */}
                    <div className="absolute top-0 right-4 z-20 bg-gradient-to-b from-[#063B83] to-[#087FE5] text-white px-3.5 py-2.5 text-center flex flex-col items-center justify-center min-w-[50px] shadow-lg border-b border-x border-[#08B9E8]/40">
                      <span className="text-base font-extrabold leading-none font-heading">{blog.day}</span>
                      <span className="text-[10px] font-black tracking-widest leading-none mt-1 uppercase font-mono text-[#08B9E8]">{blog.month}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 space-y-3">
                    {/* Meta info: by Admin & Technology with brand blue icons */}
                    <div className="flex items-center gap-4 text-xs font-normal text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <User className="w-3.5 h-3.5 text-[#087FE5]" />
                        <span>{blog.author}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Tag className="w-3.5 h-3.5 text-[#087FE5]" />
                        <span>{blog.category}</span>
                      </span>
                    </div>

                    {/* Blog Title */}
                    <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors leading-snug font-heading">
                      <a href="#contact-cta">{blog.title}</a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Bar with READ MORE & Comments (Brand Blue Palette) */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-slate-600 group-hover:text-[#087FE5] flex items-center gap-1.5 transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    <MessageSquare className="w-3.5 h-3.5 text-[#087FE5]" />
                    <span>{blog.comments}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. ZisanTech CALL TO ACTION SECTION (Navy Blue Banner)
      ========================================================================= */}
      <section id="contact-cta" className="bg-gradient-to-r from-[#071B49] via-[#05143A] to-[#030A1C] text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Need Expert SAP ERP Consulting for Your Business?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior SAP S/4HANA architects to evaluate your ERP roadmap, cloud migration strategy, and statutory tax integrations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#087FE5] hover:bg-white hover:text-[#071B49] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-xl active:scale-95"
            >
              Get a Free Demo / Consultation
            </a>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 transition-all active:scale-95"
            >
              Call: {COMPANY_INFO.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Floating Action / Chat Button on the Right Edge */}
      <a
        href="#contact-cta"
        className="fixed right-6 bottom-8 z-40 w-14 h-14 rounded-full bg-[#087FE5] hover:bg-[#063B83] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Enquire / Chat"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
