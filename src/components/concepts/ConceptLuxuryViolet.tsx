import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Network,
  Briefcase,
  FileCheck,
  Users,
  ChevronDown,
  TrendingUp,
  Cog,
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Play,
  Pause,
  ShoppingBag,
  Code2,
  MessageCircle,
  Calculator,
  Package,
  Bot,
  BadgeCheck,
  Landmark,
  Users2,
  Truck,
  GitFork,
  Warehouse,
  ShoppingCart,
  Code,
  Server,
  RotateCw,
  Award,
  GraduationCap
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';

// High-performance Framer Motion Reveal Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  }
};

// Animated Heading Component with gradient text support
export const ScoreLabsHeading: React.FC<{
  text: string;
  className?: string;
  gradientWord?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}> = ({ text, className = '', gradientWord, as = 'h2' }) => {
  const words = text.split(' ');
  const Tag = as;

  return (
    <Tag className={className}>
      {words.map((word, index) => {
        const isGradient = gradientWord && word.toLowerCase().includes(gradientWord.toLowerCase());
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
            className={`inline-block mr-[0.25em] ${
              isGradient
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00A896] font-extrabold'
                : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export const ConceptLuxuryViolet: React.FC = () => {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Interactive FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // ScoreLabs 4-Stage Process active step
  const [activeProcessTab, setActiveProcessTab] = useState(0);

  // Form Submission State
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SAP Implementation',
    message: ''
  });

  // Exactly 4 Cinematic Slides
  const slides = [
    {
      id: 1,
      badge: 'SLIDE 01 – SAP ENTERPRISE TRANSFORMATION',
      headline: 'Transforming Businesses Through SAP & Technology.',
      desc: 'ZisanTech delivers intelligent SAP solutions and enterprise technology consulting to help businesses modernize operations, connect processes and move forward with confidence.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=85',
      accentTag: 'Clean-Core Modernization',
      metrics: { primary: 'Clean-Core', secondary: 'S/4HANA Architecture' }
    },
    {
      id: 2,
      badge: 'SLIDE 02 – INTELLIGENT ENTERPRISE INTEGRATION',
      headline: 'Connected Processes. Smarter Enterprise Operations.',
      desc: 'Seamlessly unify operational data, manufacturing shop-floors, and financial ledgers with end-to-end transparency, decoupled middleware and sub-second enterprise visibility.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=85',
      accentTag: 'High-Throughput Analytics',
      metrics: { primary: 'Zero-Latency', secondary: 'Multi-Entity Data Sync' }
    },
    {
      id: 3,
      badge: 'SLIDE 03 – INDUSTRIAL DIGITAL TRANSFORMATION',
      headline: 'Powering Industrial Growth Through Intelligent Technology.',
      desc: 'Orchestrating smart manufacturing plants, automated material dispatch, weighbridge hardware hooks, and predictive maintenance protocols across core industrial sectors.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85',
      accentTag: 'Industry 4.0 Integration',
      metrics: { primary: 'Shop-to-Top Floor', secondary: 'Synchronized Execution' }
    },
    {
      id: 4,
      badge: 'SLIDE 04 – ENTERPRISE TECHNOLOGY & INNOVATION',
      headline: 'Building the Future of Enterprise Technology.',
      desc: 'Empowering forward-thinking enterprises with resilient SAP BTP cloud extensions, custom enterprise portals, secure microservices, and AI-assisted automation layers.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85',
      accentTag: 'Cloud-Native Resilience',
      metrics: { primary: 'Future-Proof', secondary: 'Extensible Ecosystem' }
    }
  ];

  // Auto Slider Effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSubmitted(true);
    setTimeout(() => {
      setConsultationSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'SAP Implementation',
        message: ''
      });
    }, 4000);
  };

  // ScoreLabs Exact 4 Stages (From Reference Image 1)
  const scorelabsStages = [
    {
      num: '01',
      stage: 'DISCOVERY',
      title: 'Strategic Discovery & Architecture Blueprinting',
      desc: 'We conduct a comprehensive review of your existing SAP systems, business processes, and technology pain points to design a robust, clean-core transformation roadmap.',
      deliverables: ['System Landscape Audit', 'Stakeholder Requirement Matrix', 'Risk & Readiness Diagnostic'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80'
    },
    {
      num: '02',
      stage: 'STRATEGIZE',
      title: 'Agile Solution Design & Integration Strategy',
      desc: 'Our enterprise architects formulate decoupled architecture blueprints, leveraging SAP BTP, modern APIs, and clean-core standards to ensure upgrade-safe scalability.',
      deliverables: ['Target State Architecture', 'BTP Extension Blueprint', 'Statutory Tax Mapping'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80'
    },
    {
      num: '03',
      stage: 'IMPLEMENT',
      title: 'Phased Implementation & Data Governance',
      desc: 'Deploying agile methodology, we configure functional modules, construct secure custom extensions, migrate master data, and conduct rigorous integration testing.',
      deliverables: ['Configured Solution Build', 'Clean Data Migration', 'UAT Sign-off Protocol'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80'
    },
    {
      num: '04',
      stage: 'HYPER-SCALE',
      title: 'Continuous Optimization & 24/7 SLA Support',
      desc: 'Post-go-live, our dedicated consultants provide round-the-clock hyper-care, user enablement, background performance optimization, and proactive system tuning.',
      deliverables: ['24/7 SLA Ticket Coverage', 'Year-End Closing Hyper-Care', 'Performance Fine-Tuning'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'
    }
  ];

  // 12 Services (7 SAP + 5 Other IT) with Premium Visual Assets & Infographics
  const sapServices = [
    {
      title: 'SAP Rollout',
      category: 'SAP SERVICES',
      desc: 'Expand your global SAP template seamlessly across branches, subsidiaries, and manufacturing plants with minimal operational disruption.',
      features: ['Global template harmonization & gap analysis', 'Localization for tax, legal & reporting rules', 'Master data migration with verification protocols', 'Cutover governance and hyper-care transition'],
      icon: <Layers className="w-5 h-5 text-[#00A896]" />,
      image: '/sap_erp_solution_banner.jpg',
      badge: 'Global Templates'
    },
    {
      title: 'SAP Custom Solutions',
      category: 'SAP SERVICES',
      desc: 'Bespoke ABAP, intuitive Fiori apps, workflow automation, and custom enhancements tailored to your unique proprietary operational edges.',
      features: ['Clean-core ABAP RESTful programming (RAP)', 'Responsive SAP Fiori & UI5 user interfaces', 'Proprietary business approval workflow cockpits', 'Custom RFCs, enhancement points & BAdIs'],
      icon: <Cpu className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: 'Clean Core'
    },
    {
      title: 'SAP Support',
      category: 'SAP SERVICES',
      desc: 'Dependable L1–L3 SLA-governed support, performance monitoring, defect resolution, and continuous system optimization.',
      features: ['L1, L2, L3 ticket governance under strict SLAs', 'Quarterly closing & financial year-end hyper-care', 'System health audits, dump analysis & job tuning', 'Preventive maintenance schedules & user training'],
      icon: <ShieldCheck className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      badge: '24/7 SLA'
    },
    {
      title: 'SAP Integration',
      category: 'SAP SERVICES',
      desc: 'Seamlessly bridge SAP with third-party software, cloud platforms, e-commerce stores, logistics APIs, and IoT devices.',
      features: ['SAP Integration Suite (CPI) & legacy PO/PI pipelines', 'Direct corporate banking host-to-host payout rails', 'Synchronous CRM and e-commerce data synchronization', 'Shop-floor IoT, PLC & weighbridge automated capture'],
      icon: <Network className="w-5 h-5 text-[#00A896]" />,
      image: '/cloud_integration_infographic.jpg',
      badge: 'Cloud Integration'
    },
    {
      title: 'SAP Consulting',
      category: 'SAP SERVICES',
      desc: 'Strategic ERP roadmapping, S/4HANA migration advisory, architecture reviews, and business process re-engineering.',
      features: ['S/4HANA readiness assessments & business case justification', 'As-Is vs. To-Be business process re-engineering (BPR)', 'License optimization & infrastructure sizing guidance', 'Independent quality assurance & governance audits'],
      icon: <Briefcase className="w-5 h-5 text-[#00A896]" />,
      image: '/zisantech_ecosystem_infographic.jpg',
      badge: 'Advisory Board'
    },
    {
      title: 'SAP E-Invoice & E-Way Bill',
      category: 'SAP SERVICES',
      desc: 'Direct, automated statutory compliance for GST E-Invoicing, QR codes, and E-Way Bill generation directly inside SAP.',
      features: ['Direct API handshake with government-approved GSP / IRP gateways', 'Real-time automated generation of IRN & signed QR codes', 'Automated credit notes, debit notes & cancellation workflows', 'Configurable retry queues, fallback & bulk generation tools'],
      icon: <FileCheck className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      badge: 'GST Statutory Bridge'
    },
    {
      title: 'SAP AI & Intelligent ERP',
      category: 'SAP SERVICES',
      desc: 'Infuse artificial intelligence, machine learning, and robotic process automation into your core enterprise workflows.',
      features: ['Intelligent Document Processing (IDP) for automated invoice reading', 'Predictive inventory demand forecasting algorithms', 'AI-driven customer credit scoring & delay indicators', 'Integration with modern AI assistants & SAP Joule capabilities'],
      icon: <Sparkles className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      badge: 'AI & Automation'
    }
  ];

  const otherServices = [
    {
      title: 'CRM / ERP Solutions',
      category: 'OTHER SERVICES',
      desc: 'Tailored enterprise platforms connecting customer pipelines, sales operations, field force, and back-office accounting.',
      features: ['Lead-to-cash pipeline automation & tracking', 'Field sales force tracking with mobile geolocation', 'Ticketing, SLA tracking & resolution knowledge bases', 'Real-time financial ledgers & automated invoicing'],
      icon: <Users className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badge: 'Enterprise CRM'
    },
    {
      title: 'E-commerce Solutions',
      category: 'OTHER SERVICES',
      desc: 'High-conversion B2B and B2C digital storefronts engineered with real-time ERP inventory and payment gateway integration.',
      features: ['B2B custom pricing tiers & bulk order matrices', 'High-speed storefronts optimized for mobile conversion', 'Multi-gateway payments (UPI, cards, international)', 'Automated shipping partner API integration & tracking'],
      icon: <ShoppingBag className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      badge: 'B2B/B2C Commerce'
    },
    {
      title: 'HRMS Solutions',
      category: 'OTHER SERVICES',
      desc: 'Comprehensive human capital platforms covering recruitment, attendance, automated payroll, and employee self-service.',
      features: ['Automated statutory payroll engine (PF, ESI, TDS, PTax)', 'Biometric & mobile geo-fenced attendance tracking', 'Employee self-service (ESS) portal for leave & claims', 'Performance appraisal, OKR alignment & 360-degree feedback'],
      icon: <CheckCircle2 className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      badge: 'People Ops'
    },
    {
      title: 'Digital Marketing & Growth',
      category: 'OTHER SERVICES',
      desc: 'Data-driven B2B lead generation, search engine optimization, content strategy, and performance campaign management.',
      features: ['Technical SEO audit, on-page optimization & B2B strategy', 'High-intent search & LinkedIn performance campaigns', 'Thought leadership content creation & case study production', 'Conversion tracking, funnel analytics & attribution dashboards'],
      icon: <TrendingUp className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800&q=80',
      badge: 'B2B Inbound Growth'
    },
    {
      title: 'App & Web Development',
      category: 'OTHER SERVICES',
      desc: 'Scalable cloud-native web portals, SaaS platforms, and cross-platform mobile apps built with modern technology stacks.',
      features: ['Modern frontend development with React, Next.js & TypeScript', 'Robust backend microservice APIs built with Node.js & Python', 'Cross-platform iOS and Android mobile apps', 'Enterprise cloud deployment (AWS/Azure/GCP) with CI/CD'],
      icon: <Code2 className="w-5 h-5 text-[#00A896]" />,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      badge: 'Cloud Engineering'
    }
  ];

  // Exactly 6 Industries
  const industriesList = [
    {
      name: 'Manufacturing',
      tagline: 'End-to-End Shop Floor to Top Floor Orchestration',
      summary: 'Empowering discrete and process manufacturers with lean production workflows, integrated supply chains, synchronized shop floor planning, and smart predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      modules: ['SAP PP', 'SAP QM', 'SAP MM', 'SAP EWM', 'SAP PM']
    },
    {
      name: 'Retail & Textile',
      tagline: 'Agile Omnichannel Fulfillment & Yarn-to-Garment Lifecycle',
      summary: 'Delivering unified retail ERP, multi-channel commerce sync, inventory visibility, and structured textile batch/dye-lot tracking from spinning to garment export.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
      modules: ['SAP SD', 'SAP MM', 'SAP FICO', 'E-commerce Solutions', 'Custom ERP']
    },
    {
      name: 'Oil & Gas',
      tagline: 'Resilient Downstream & Upstream Asset Governance',
      summary: 'Ensuring strict compliance, capital asset lifecycle integrity, vendor audit trails, and multi-currency fiscal consolidation for petroleum and natural gas operators.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      modules: ['SAP E-Invoice & E-Way Bill', 'SAP FICO', 'SAP PM', 'SAP MM', 'SAP Ariba']
    },
    {
      name: 'Agro Chemical',
      tagline: 'Stringent Formulation Governance & Distributed Dealer Networks',
      summary: 'Accelerating formula versioning, hazardous material governance, seasonal distributor credit control, and batch-wise regulatory traceability.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
      modules: ['SAP PP-PI', 'SAP QM', 'CRM / ERP Solutions', 'SAP SD', 'SAP AI']
    },
    {
      name: 'Steel',
      tagline: 'High-Volume Mill Logistics, Heat Tracking & Metal Yields',
      summary: 'Optimizing melt-shop to rolling-mill yields, heat-wise traceability, weighbridge integrations, and bulk commodity transit logistics.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      modules: ['SAP TM', 'SAP QM', 'SAP Integration', 'SAP FICO', 'SAP MM']
    },
    {
      name: 'Pharma',
      tagline: 'GxP Validated Formulations, Serialization & Cold Chain Integrity',
      summary: 'Enabling FDA 21 CFR Part 11 electronic records, batch release automation, clinical inventory monitoring, and audited track-and-trace pipelines.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
      modules: ['SAP QM Validated', 'SAP Support', 'SAP MM', 'HRMS Solutions', 'SAP Rollout']
    }
  ];

  // 12 Industry Focussed SAP Training Modules (Matching User Reference Image 2: "Learn . Evolve . Excel")
  const trainingGridModules = [
    { code: 'SAP SD', name: 'Sales & Distribution', desc: 'Order-to-cash, pricing & enterprise billing', icon: 'Calculator' },
    { code: 'SAP MM', name: 'Materials Management', desc: 'Procure-to-pay, inventory & valuation', icon: 'Package' },
    { code: 'SAP PP', name: 'Production Planning', desc: 'BOMs, routings, shop floor & capacity planning', icon: 'Bot' },
    { code: 'SAP QM', name: 'Quality Management', desc: 'Inspections, CoA, compliance & batch audits', icon: 'BadgeCheck' },
    { code: 'SAP FICO', name: 'Financial & Controlling', desc: 'GL, AP/AR, asset accounting & cost centers', icon: 'Landmark' },
    { code: 'SAP HCM', name: 'Human Capital Management', desc: 'Personnel admin, organizational & payroll', icon: 'Users2' },
    { code: 'SAP LE', name: 'Logistics Execution', desc: 'Shipping, warehouse integration & freight', icon: 'Truck' },
    { code: 'SAP TM', name: 'Transportation Management', desc: 'Carrier routing, freight settlement & fleet sync', icon: 'GitFork' },
    { code: 'SAP EWM', name: 'Extended Warehouse', desc: 'Bin strategies, wave picking & RF scanners', icon: 'Warehouse' },
    { code: 'SAP ARIBA', name: 'Strategic Sourcing', desc: 'Cloud procurement, contracts & supplier portals', icon: 'ShoppingCart' },
    { code: 'SAP ABAP', name: 'Advanced Programming', desc: 'Clean-core RAP, CDS views & BAdI extensions', icon: 'Code' },
    { code: 'SAP BASIS', name: 'System Administration', desc: 'NetWeaver architecture, kernel tuning & security', icon: 'Server' }
  ];

  // Testimonials (Matching User Reference Image 4: "Reviews Of Experts")
  const testimonials = [
    {
      quote: "Training program exceeded expectations with practical sessions and live sandbox environments. Our internal team gained genuine hands-on confidence with real transactional business scenarios.",
      author: "Anjali Verma",
      organization: "SAP Consultant",
      focus: "Corporate SAP Enablement"
    },
    {
      quote: "HRMS solution simplified employee management and payroll. We eliminated redundant paperwork and cut payroll cycle processing time down to a matter of minutes with complete statutory compliance.",
      author: "Priya Mehta",
      organization: "HR Manager",
      focus: "HRMS & Workforce Solutions"
    },
    {
      quote: "Improved reporting and analytics significantly. The real-time financial ledger synchronizations and automated GST billing engines provided leadership with instantaneous visibility.",
      author: "Vikram Patel",
      organization: "Business Analyst",
      focus: "SAP S/4HANA & Enterprise Reporting"
    },
    {
      quote: "ZisanTech Solutions delivered exceptional SAP consulting services. Their consultants integrated our enterprise workflows seamlessly, meeting every statutory milestone ahead of schedule.",
      author: "Rahul Sharma",
      organization: "IT Manager, Enterprise Systems",
      focus: "SAP Implementation & Consulting"
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What SAP services does ZisanTech Solutions specialize in?",
      a: "ZisanTech Solutions specializes in end-to-end SAP consulting, including SAP S/4HANA implementation, global template rollouts, custom clean-core ABAP/Fiori development, system integration (SAP CPI/PO), automated statutory GST E-Invoicing & E-Way Bill bridges, and SLA-governed 24/7 operational support."
    },
    {
      q: "How does ZisanTech ensure seamless SAP rollout across multiple business branches?",
      a: "Our proven rollout methodology balances central enterprise governance with localized statutory, taxation (GST/VAT), and operational nuances. We perform structured gap analyses, data migration verifications, user acceptance testing (UAT), and post go-live hyper-care to ensure zero disruption."
    },
    {
      q: "Does ZisanTech support integration between SAP and third-party software?",
      a: "Yes. Using SAP Integration Suite (CPI), REST/OData APIs, IDocs, and secure webservices, we seamlessly connect SAP core ledgers with CRM tools, e-commerce storefronts, banking host-to-host payout channels, shop-floor PLCs, and weighbridge systems."
    },
    {
      q: "What training programs are provided by ZisanTech Solutions?",
      a: "We offer career-ready, practical training across 10 functional modules (SD, MM, PP, QM, FICO, HCM, LE, TM, EWM, ARIBA) and 5 technical modules (ABAP, BASIS, PI/PO, CPI, CIDS), backed by live server sandbox access and real-world business scenarios."
    },
    {
      q: "How does ZisanTech structure post-implementation support?",
      a: "We deliver L1–L3 SLA-governed support, critical period hyper-care during month-end and year-end fiscal closings, dump analysis, background job optimization, and continuous minor enhancements with dedicated consultant availability."
    }
  ];

  return (
    <div id="top" className="bg-[#F8FAFC] text-[#0A1628] font-sans selection:bg-[#00A896] selection:text-white pt-24 overflow-x-hidden relative">
      {/* Floating Left Vertical Social Bar (Matching Reference Images 2, 3, 4) */}
      <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 bg-white/95 backdrop-blur-md px-2.5 py-5 rounded-full shadow-xl border border-slate-200/80">
        <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase vertical-social-bar mb-2">
          FOLLOW US
        </span>
        <div className="w-4 h-px bg-slate-200"></div>
        <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#00A896] transition-colors p-1" aria-label="LinkedIn">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#00A896] transition-colors p-1" aria-label="Instagram">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#00A896] transition-colors p-1" aria-label="YouTube">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </a>
        <a href={`https://wa.me/${COMPANY_INFO.primaryPhone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#00A896] transition-colors p-1" aria-label="WhatsApp">
          <MessageCircle className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* =========================================================================
          5. CINEMATIC HERO – FOUR-SLIDE IMAGE SLIDER
      ========================================================================= */}
      <section className="relative h-[92vh] min-h-[680px] max-h-[920px] w-full overflow-hidden bg-[#051329]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* Cinematic Background Image with Ken Burns Zoom */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].badge}
                className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.15] animate-ken-burns transform"
              />
            </div>

            {/* Gradient Overlays: ScoreLabs Deep Navy & Cyber Teal Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051329]/95 via-[#051329]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00A896]/25 rounded-full blur-[140px] pointer-events-none"></div>

            {/* Slide Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-3xl space-y-6">
                {/* ScoreLabs Styled Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00A896]/15 backdrop-blur-md border border-[#00A896]/30 text-[#2DD4BF] text-xs font-semibold tracking-wider uppercase font-mono"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse"></span>
                  <span>{slides[currentSlide].badge}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/80 font-normal">{slides[currentSlide].accentTag}</span>
                </motion.div>

                {/* ScoreLabs Gradient Word Highlight Headline */}
                <motion.h1
                  key={`headline-${currentSlide}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]"
                >
                  {slides[currentSlide].headline.includes('SAP') ? (
                    <>
                      Transforming Businesses Through{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00A896]">
                        SAP & Technology
                      </span>
                      .
                    </>
                  ) : slides[currentSlide].headline.includes('Connected') ? (
                    <>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00A896]">
                        Connected Processes
                      </span>
                      . Smarter Enterprise Operations.
                    </>
                  ) : slides[currentSlide].headline.includes('Industrial') ? (
                    <>
                      Powering Industrial Growth Through{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00A896]">
                        Intelligent Technology
                      </span>
                      .
                    </>
                  ) : (
                    <>
                      Building the Future of{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00A896]">
                        Enterprise Technology
                      </span>
                      .
                    </>
                  )}
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-base sm:text-lg text-slate-200/90 font-normal leading-relaxed max-w-2xl"
                >
                  {slides[currentSlide].desc}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  key={`buttons-${currentSlide}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="pt-2 flex flex-wrap items-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollTo('services')}
                    className="btn-scorelabs-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2.5 cursor-pointer"
                  >
                    <span>Explore Our Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollTo('contact')}
                    className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-[#00A896]/60 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Get Consultation</span>
                  </motion.button>

                  <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-white/20 text-xs text-white/70">
                    <span className="font-semibold text-white">{slides[currentSlide].metrics.primary}</span>
                    <span>/</span>
                    <span>{slides[currentSlide].metrics.secondary}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-10 bg-[#00A896]'
                      : 'w-3 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-white/70 pl-3 font-mono font-medium">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
                title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-xl bg-[#00A896] hover:bg-[#028090] text-white flex items-center justify-center transition-colors shadow-md shadow-[#00A896]/30"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCORE LABS EXACT ADVANTAGE FRAMEWORK SECTION (Reference Image 1)
      ========================================================================= */}
      <section className="py-24 bg-white relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6FAF6] border border-[#00A896]/30 text-[#00A896] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00A896]"></span>
              <span>THE SCORELABS ADVANTAGE</span>
            </motion.div>

            {/* Exact Headline from Reference Image 1 */}
            <motion.h2 variants={fadeInUp} className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1D3A] tracking-tight leading-tight">
              A precise framework from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00A896]">
                zero to hyper-scale
              </span>
              .
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base text-slate-600">
              Four steps, one rhythm. Pick a stage to see how we run it.
            </motion.p>
          </motion.div>

          {/* 4 Interactive Horizontal Stage Tabs (Matching Reference Image 1) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
          >
            {scorelabsStages.map((st, idx) => {
              const isSelected = activeProcessTab === idx;
              return (
                <motion.button
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveProcessTab(idx)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B1D3A] text-white border-[#00A896] shadow-lg shadow-[#00A896]/15'
                      : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-[#00A896]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#00A896]">{st.num}</span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#00A896]/20 text-[#2DD4BF]' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {st.stage}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm leading-snug line-clamp-1">
                    {st.title}
                  </h4>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Stage Detail Showcase Panel */}
          <motion.div
            key={activeProcessTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-extrabold text-[#00A896]">
                    {scorelabsStages[activeProcessTab].num}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#E6FAF6] text-[#00A896] px-3 py-1 rounded-md border border-[#00A896]/30">
                    {scorelabsStages[activeProcessTab].stage}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1D3A]">
                  {scorelabsStages[activeProcessTab].title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {scorelabsStages[activeProcessTab].desc}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Core Architectural Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {scorelabsStages[activeProcessTab].deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#0B1D3A]">
                        <Check className="w-3.5 h-3.5 text-[#00A896] flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[280px]">
                  <img
                    src={scorelabsStages[activeProcessTab].image}
                    alt={scorelabsStages[activeProcessTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          KNOW OUR STORY – EXACT MATCH WITH REFERENCE IMAGE 2
      ========================================================================= */}
      <section id="about" className="py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (Exact Text from Reference Image 2) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="font-heading font-black text-4xl sm:text-5xl text-[#0B1D3A] tracking-tight">
                Know Our Story
              </motion.h2>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                <motion.p variants={fadeInUp} className="font-medium text-[#0B1D3A]">
                  ZisanTech Solutions is dedicated to helping businesses embrace digital transformation through intelligent SAP solutions and modern IT services. Our focus is on aligning technology with real business objectives to improve efficiency, visibility, and decision-making.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  With a strong foundation in SAP consulting and training, we enable organizations to build capable teams while implementing systems that deliver long-term value. Our approach emphasizes clarity, adaptability, and measurable outcomes in every project we undertake.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  We believe successful digital transformation goes beyond technology—it requires the right strategy, expertise, and continuous support. By combining industry knowledge with a client-focused approach, we help businesses adapt confidently to evolving technology and market demands. Our goal is to build lasting partnerships and empower organizations with solutions that support sustainable growth and long-term success.
                </motion.p>
              </div>

              {/* Verified Metrics Counter */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#00A896] transition-colors">
                  <p className="text-2xl font-extrabold text-[#00A896] font-heading">{COMPANY_INFO.experienceYears}</p>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Years of Trust</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#00A896] transition-colors">
                  <p className="text-2xl font-extrabold text-[#0B1D3A] font-heading">{COMPANY_INFO.clientsCount}</p>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Happy Clients</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#00A896] transition-colors">
                  <p className="text-2xl font-extrabold text-[#00A896] font-heading">{COMPANY_INFO.consultantsCount}</p>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">SAP Consultants</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#00A896] transition-colors">
                  <p className="text-2xl font-extrabold text-[#0B1D3A] font-heading">{COMPANY_INFO.studentsTrained}</p>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Trained Pros</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Interactive Enterprise Technology Visual with Living Metric Nodes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={scaleIn}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-[#0B1D3A] group">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="Enterprise Architecture & Strategic Technology Leadership"
                  className="w-full h-[460px] object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 filter saturate-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#0B1D3A]/50 to-transparent"></div>

                {/* Floating Interactive Enterprise Nodes */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
                  <div className="bg-[#051329]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2DD4BF] block font-bold">
                      Enterprise Ecosystem
                    </span>
                    <span className="text-xs font-semibold text-white">Clean Core S/4HANA</span>
                  </div>
                  <div className="bg-[#00A896]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-[11px] font-mono font-bold shadow-lg">
                    LIVE ARCHITECTURE
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-3 pointer-events-none">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 text-center">
                      <span className="text-lg font-bold text-white block">SAP BTP</span>
                      <span className="text-[10px] text-slate-300">Cloud Extension</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 text-center">
                      <span className="text-lg font-bold text-[#2DD4BF] block">CPI / PO</span>
                      <span className="text-[10px] text-slate-300">Hybrid Bridge</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 text-center">
                      <span className="text-lg font-bold text-white block">RAP ABAP</span>
                      <span className="text-[10px] text-slate-300">Modern Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INNOVATIVE SAP SOLUTIONS – EXACT MATCH WITH REFERENCE IMAGE 3
      ========================================================================= */}
      <section className="py-24 bg-white relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <motion.h2 variants={fadeInUp} className="font-heading font-black text-3xl sm:text-5xl text-[#0B1D3A] tracking-tight">
              Innovative SAP Solutions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base text-slate-600">
              Driving smarter operations and connected experiences with flexible, future-ready SAP solutions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic: Real High-Definition 3D Cloud Integration Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={scaleIn}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-[#051329] group">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                  alt="Intelligent Cloud Integration & Global Enterprise Connectivity"
                  className="w-full h-[460px] object-cover opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#051329] via-[#051329]/40 to-transparent"></div>

                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <span className="text-[10px] font-mono uppercase text-[#2DD4BF] block font-bold">API Mesh & Real-Time Sync</span>
                  <span className="text-xs font-semibold text-white">Hybrid Cloud Architecture</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#051329]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Enterprise Data Backbone</p>
                      <p className="text-[11px] text-slate-300">Microservices • S/4HANA APIs • Kafka Pipelines</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#00A896]/20 border border-[#00A896]/40 text-[#2DD4BF] text-[10px] font-mono font-bold">
                      99.99% UPTIME
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Solution Pillars matching Reference Image 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6"
            >
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#00A896] hover:shadow-lg transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CloudIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0B1D3A]">
                    Cloud Integration Services
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Enable smooth connectivity across systems with cloud-based integration built for agility and reliability.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#00A896] hover:shadow-lg transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Cog className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0B1D3A]">
                    Comprehensive SAP Services
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    From implementation to optimization, we deliver end-to-end SAP solutions tailored to your business needs.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#00A896] hover:shadow-lg transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0B1D3A]">
                    Intelligent Operations Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Unify operational data, automated dispatch, and AI-assisted workflows to accelerate enterprise decision velocity.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR WORK IS FOR YOUR SUCCESS – EXACT MATCH WITH REFERENCE IMAGE 4
      ========================================================================= */}
      <section className="py-24 bg-[#F8FAFC] relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative with Exact Orange Accent Word from Reference Image 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="font-heading font-black text-4xl sm:text-5xl text-[#0B1D3A] tracking-tight leading-tight">
                Our Work Is For Your{' '}
                <span className="text-[#FF7A00]">
                  Success
                </span>
              </motion.h2>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                <motion.p variants={fadeInUp}>
                  Our commitment centers on empowering your journey to success. Whether you're an organization seeking to enhance operational efficiency or an individual aspiring to establish a career in SAP.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  Leveraging deep SAP expertise and modern IT solutions, we help you stay ahead in a rapidly evolving digital world.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  With a strong foundation in SAP technologies and innovative IT strategies, we empower businesses to adapt, grow, and succeed in today's fast-changing digital landscape.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="pt-2">
                <button
                  onClick={() => scrollTo('services')}
                  className="btn-scorelabs-primary px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Photo: Authentic High-Resolution Executive Enterprise Consulting Photograph */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={scaleIn}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-[#0B1D3A] group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Enterprise Digital Transformation & Executive Strategy Advisory"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051329]/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#051329]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2DD4BF] font-bold block">
                      CLIENT-FIRST METHODOLOGY
                    </span>
                    <h5 className="text-sm font-bold text-white">Direct Engagement with Certified SAP Architects</h5>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#00A896] text-white flex items-center justify-center font-bold">
                    ZT
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. COMPLETE SAP & IT SERVICES (ALL 12 PRESERVED)
      ========================================================================= */}
      <section id="services" className="py-24 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6FAF6] border border-[#00A896]/30 text-[#00A896] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Complete Service Portfolio</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1D3A] tracking-tight">
              Enterprise SAP & IT Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Delivering dependable SAP consulting, custom solution engineering, continuous support, and modern digital enterprise platforms.
            </p>
          </div>

          {/* Section Subhead: SAP Services */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-[#00A896]"></span>
            <h3 className="font-heading font-bold text-xl text-[#0B1D3A]">
              Core SAP Services
            </h3>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              (7 Specialized Practices)
            </span>
          </div>

          {/* 7 SAP Service Cards with Cyber Teal Border Hover & Blog-Style Feature Visuals */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {sapServices.map((svc, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#00A896] shadow-sm hover:shadow-2xl hover:shadow-[#00A896]/15 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Blog-Style Visual Header with High-Resolution Image & Floating Badges */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#0B1D3A]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-110 group-hover:brightness-[0.88] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/40 to-transparent"></div>

                    {/* Floating Top Category Pill & Tech Icon */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2DD4BF] bg-[#051329]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                        {svc.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#00A896] group-hover:bg-[#00A896] group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300">
                        {svc.icon}
                      </div>
                    </div>

                    {/* Category Label at Bottom of Image */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                        0{idx + 1} • {svc.category}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Body Content */}
                  <div className="p-7 space-y-4">
                    <h4 className="font-heading font-extrabold text-xl text-[#0B1D3A] group-hover:text-[#00A896] transition-colors leading-snug">
                      {svc.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {svc.desc}
                    </p>

                    <div className="pt-3 space-y-2 border-t border-slate-100">
                      {svc.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Interaction Bar */}
                <div className="p-7 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: svc.title }));
                      scrollTo('contact');
                    }}
                    className="text-xs font-bold text-[#00A896] hover:text-[#028090] flex items-center gap-2 group-hover:translate-x-1.5 transition-transform cursor-pointer"
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider font-semibold">ENTERPRISE</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Subhead: Other IT Services */}
          <div className="flex items-center gap-3 mb-8 pt-8 border-t border-slate-200">
            <span className="w-3 h-3 rounded-full bg-[#0B1D3A]"></span>
            <h3 className="font-heading font-bold text-xl text-[#0B1D3A]">
              Other IT & Digital Solutions
            </h3>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              (5 Digital Engineering Practices)
            </span>
          </div>

          {/* 5 Other IT Service Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherServices.map((svc, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#00A896] shadow-sm hover:shadow-2xl hover:shadow-[#00A896]/15 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Blog-Style Visual Header with High-Resolution Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#0B1D3A]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-110 group-hover:brightness-[0.88] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/40 to-transparent"></div>

                    {/* Floating Top Category Pill & Tech Icon */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2DD4BF] bg-[#051329]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                        {svc.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#00A896] group-hover:bg-[#00A896] group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300">
                        {svc.icon}
                      </div>
                    </div>

                    {/* Category Label at Bottom of Image */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                        0{idx + 8} • {svc.category}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Body Content */}
                  <div className="p-7 space-y-4">
                    <h4 className="font-heading font-extrabold text-xl text-[#0B1D3A] group-hover:text-[#00A896] transition-colors leading-snug">
                      {svc.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {svc.desc}
                    </p>

                    <div className="pt-3 space-y-2 border-t border-slate-100">
                      {svc.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Interaction Bar */}
                <div className="p-7 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: svc.title }));
                      scrollTo('contact');
                    }}
                    className="text-xs font-bold text-[#00A896] hover:text-[#028090] flex items-center gap-2 group-hover:translate-x-1.5 transition-transform cursor-pointer"
                  >
                    <span>Request Practice Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider font-semibold">DIGITAL IT</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          8. INDUSTRIES WE SERVE – EXACTLY SIX CARDS
      ========================================================================= */}
      <section id="industries" className="py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl space-y-3">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6FAF6] border border-[#00A896]/30 text-[#00A896] text-xs font-mono font-bold uppercase tracking-wider">
                <span>Domain Focus</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-heading font-black text-3xl sm:text-4xl text-[#0B1D3A] tracking-tight">
                Industries We Serve
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base text-slate-600">
                Digitize your industry performance with our top customized SAP ERP solutions for discrete & process landscapes.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="text-right hidden md:block">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Exactly 6 Industry Verticals
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industriesList.map((ind, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden bg-[#051329] border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 h-[380px] flex flex-col justify-end p-6 cursor-pointer"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] group-hover:scale-108 group-hover:brightness-[0.42] transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/60 to-transparent"></div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#2DD4BF] uppercase bg-white/10 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                      0{idx + 1} • {ind.name}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#2DD4BF] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs font-medium text-slate-300">
                    {ind.tagline}
                  </p>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {ind.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {ind.modules.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-semibold text-slate-200 bg-[#0B1D3A]/90 px-2 py-0.5 rounded border border-white/15"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          10. SAP TRAINING: "LEARN . EVOLVE . EXCEL" (MATCHING USER REFERENCE IMAGE 2)
      ========================================================================= */}
      <section id="training" className="py-24 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <motion.h2 variants={fadeInUp} className="font-heading font-black text-4xl sm:text-5xl text-[#0B1D3A] tracking-tight">
              Learn . Evolve . Excel
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <span className="w-12 h-1 bg-[#00A896] rounded-full"></span>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-base text-slate-600 font-medium">
              Industry Focussed SAP Training to Advance Your Career
            </motion.p>
          </motion.div>

          {/* 12 Industry-Focussed SAP Training Modules in Navy/Teal Luxury Bento Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {trainingGridModules.map((m, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative bg-[#0B1D3A] rounded-2xl p-6 text-center border border-white/10 hover:border-[#00A896] shadow-lg hover:shadow-2xl hover:shadow-[#00A896]/20 transition-all duration-300 flex flex-col items-center justify-between min-h-[170px] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-[#00A896] text-white flex items-center justify-center mb-3 transition-colors duration-300">
                  {m.code === 'SAP SD' && <Calculator className="w-6 h-6" />}
                  {m.code === 'SAP MM' && <Package className="w-6 h-6" />}
                  {m.code === 'SAP PP' && <Bot className="w-6 h-6" />}
                  {m.code === 'SAP QM' && <BadgeCheck className="w-6 h-6" />}
                  {m.code === 'SAP FICO' && <Landmark className="w-6 h-6" />}
                  {m.code === 'SAP HCM' && <Users2 className="w-6 h-6" />}
                  {m.code === 'SAP LE' && <Truck className="w-6 h-6" />}
                  {m.code === 'SAP TM' && <GitFork className="w-6 h-6" />}
                  {m.code === 'SAP EWM' && <Warehouse className="w-6 h-6" />}
                  {m.code === 'SAP ARIBA' && <ShoppingCart className="w-6 h-6" />}
                  {m.code === 'SAP ABAP' && <Code className="w-6 h-6" />}
                  {m.code === 'SAP BASIS' && <Server className="w-6 h-6" />}
                </div>

                <div className="space-y-1">
                  <h5 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-wide group-hover:text-[#2DD4BF] transition-colors">
                    {m.code}
                  </h5>
                  <p className="text-[10px] text-slate-300 line-clamp-1 leading-tight font-medium">
                    {m.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          11. WHY CHOOSE ZISANTECH SOLUTIONS? (MATCHING USER REFERENCE IMAGE 5)
      ========================================================================= */}
      <section className="py-24 bg-[#051329] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00A896]/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <motion.h2 variants={fadeInUp} className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Why Choose <span className="text-[#FF7A00]">ZisanTech</span> Solutions?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm sm:text-base text-slate-300 font-medium">
              Focused on Delivering Value Through SAP & IT Solutions
            </motion.p>
          </motion.div>

          {/* 4 Cards from User Reference Image 5 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                title: 'Experienced SAP Consultants',
                desc: 'Certified professionals with live project expertise ensure your SAP initiatives are executed with precision and insight.',
                icon: <Briefcase className="w-6 h-6 text-white" />,
                gradient: 'from-amber-400 to-teal-500'
              },
              {
                title: 'Holistic SAP Services',
                desc: 'From initial consultation to full-scale implementation and support, we deliver scalable solutions tailored to your unique challenges.',
                icon: <Layers className="w-6 h-6 text-white" />,
                gradient: 'from-orange-400 to-teal-500'
              },
              {
                title: 'Business-Centric Technology Approach',
                desc: 'We prioritize solutions that enhance your business processes and drive tangible, measurable operational results.',
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                gradient: 'from-amber-500 to-teal-600'
              },
              {
                title: 'Interactive SAP Training Programs',
                desc: 'Our training emphasizes practical learning through real-time projects, enabling you to apply knowledge confidently.',
                icon: <GraduationCap className="w-6 h-6 text-white" />,
                gradient: 'from-orange-400 to-teal-400'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-[#0B1D3A]/90 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:border-[#00A896] shadow-xl hover:shadow-2xl hover:shadow-[#00A896]/20 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${card.gradient} flex items-center justify-center shadow-lg shadow-teal-500/20`}>
                    {card.icon}
                  </div>

                  <h4 className="font-heading font-extrabold text-lg text-white leading-snug">
                    {card.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benchmark Meters */}
          <div className="pt-8 border-t border-white/10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2DD4BF] block mb-6 text-center">
              ENTERPRISE COMPETENCY BENCHMARKS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {[
                { title: 'SAP Expertise', pct: 90 },
                { title: 'System Integration', pct: 70 },
                { title: 'SAP Training Excellence', pct: 80 },
                { title: 'IT & Digital Solutions', pct: 95 },
                { title: 'Business Transformation', pct: 75 }
              ].map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>{skill.title}</span>
                    <span className="text-[#2DD4BF] font-mono">{skill.pct}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#2563EB] to-[#00A896] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE BRING TO YOUR BUSINESS (MATCHING USER REFERENCE IMAGE 1)
      ========================================================================= */}
      <section className="py-24 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <motion.h2 variants={fadeInUp} className="font-heading font-black text-4xl sm:text-5xl text-[#0B1D3A] tracking-tight">
              What We Bring to Your Business
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <span className="w-12 h-1 bg-[#00A896] rounded-full"></span>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              At ZisanTech Solutions, we provide dependable, business-focused solutions designed to simplify your operations and support sustainable growth. Our blend of SAP expertise and IT innovation ensures your business runs efficiently and adapts to changing needs.
            </motion.p>
          </motion.div>

          {/* 3 Core Pillars matching User Reference Image 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Process Optimization',
                desc: 'We analyze your existing workflows and identify inefficiencies, then design streamlined, standardized processes that boost productivity and reduce operational friction.',
                icon: <RotateCw className="w-7 h-7 text-[#00A896]" />,
                ringColor: 'from-[#00A896] via-teal-400 to-[#FF7A00]'
              },
              {
                title: 'Tailored SAP Implementation & Support',
                desc: 'Our team customizes SAP solutions to fit your specific business requirements, ensuring seamless integration and maximum value from your technology investment.',
                icon: <Check className="w-7 h-7 text-[#00A896]" />,
                ringColor: 'from-[#00A896] via-teal-400 to-[#FF7A00]'
              },
              {
                title: 'Quality Assurance & Continuous Improvement',
                desc: 'Through rigorous testing and ongoing monitoring, we maintain high standards for all solutions, ensuring reliability, accuracy, and performance over time.',
                icon: <Award className="w-7 h-7 text-[#00A896]" />,
                ringColor: 'from-[#00A896] via-teal-400 to-[#FF7A00]'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#00A896] hover:bg-white shadow-sm hover:shadow-2xl hover:shadow-[#00A896]/15 transition-all duration-500 text-center flex flex-col items-center space-y-5"
              >
                {/* Circular Bi-Color Ring Icon Treatment from Reference Image 1 */}
                <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#00A896] to-[#FF7A00] flex items-center justify-center shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h4 className="font-heading font-extrabold text-xl text-[#0B1D3A]">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          REVIEWS OF EXPERTS (MATCHING USER REFERENCE IMAGE 4)
      ========================================================================= */}
      <section className="py-24 bg-[#F8FAFC] relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto space-y-2"
          >
            <motion.span variants={fadeInUp} className="text-xs font-mono font-bold tracking-widest text-[#00A896] uppercase">
              CLIENT SAY
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading font-black text-4xl sm:text-5xl text-[#0B1D3A] tracking-tight">
              Reviews Of Experts
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex justify-center pt-2">
              <span className="w-12 h-1 bg-[#00A896] rounded-full"></span>
            </motion.div>
          </motion.div>

          {/* Expert Cards matching User Reference Image 4 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl p-8 bg-gradient-to-b from-[#00A896] to-[#028090] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <span className="text-4xl font-serif text-white/50 block leading-none">“</span>
                  <p className="text-sm sm:text-base text-white/95 leading-relaxed italic font-normal">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 relative z-10">
                  <h4 className="font-heading font-extrabold text-lg text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-white/80 font-medium">
                    {t.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQs Accordion */}
          <div className="max-w-4xl mx-auto pt-10">
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A896]">
                COMMON INQUIRIES
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1D3A]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-heading font-bold text-sm text-[#0B1D3A] hover:text-[#00A896] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#00A896] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          15. CONTACT SECTION WITH MAWAI MAP + 3 OVERLAY HUBS
      ========================================================================= */}
      <section id="contact" className="bg-[#051329] text-white relative overflow-hidden">
        {/* Transformation Strip (ScoreLabs Blue/Teal Gradient) */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#00A896] py-10 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative z-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E6FAF6] font-bold">
                PARTNER WITH ENTERPRISE ARCHITECTS
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Start Your Transformation Journey Today
              </h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('consultation-form-block');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#0B1D3A] hover:bg-[#132A4F] text-white px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl transition-all cursor-pointer border border-white/20"
            >
              Request Consultation Brief
            </motion.button>
          </div>
        </div>

        {/* Interactive Map Visual */}
        <div className="relative w-full h-[460px] sm:h-[500px] overflow-hidden">
          <iframe
            title="ZisanTech Headquarters Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52728034389645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71dbff28f5!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 filter contrast-[1.05] opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Map Pin Badge */}
          <div className="absolute top-6 left-4 sm:left-10 z-20 bg-white text-[#0B1D3A] p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-200 max-w-xs animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E6FAF6] text-[#00A896] flex items-center justify-center font-bold text-xs flex-shrink-0">
                ZT
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-extrabold text-sm text-[#0B1D3A] leading-tight">
                  ZisanTech Solutions
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Commercial Business District, Delhi, 110001, India
                </p>
                <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#00A896] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse"></span>
                  <span>Corporate Headquarters</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://maps.google.com/?q=Delhi,India"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00A896] hover:bg-[#028090] text-white text-[11px] font-bold rounded-lg transition-colors"
              >
                <span>Open in Maps</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <span className="text-[10px] text-slate-400 font-mono">24/7 Global Delivery</span>
            </div>
          </div>
        </div>

        {/* 3 Overlay Hub Cards */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Delhi / India */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white text-[#0B1D3A] rounded-2xl p-7 shadow-2xl border border-slate-200 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-heading font-extrabold text-lg text-[#0B1D3A]">
                  Delhi / India
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#E6FAF6] text-[#00A896] px-2 py-0.5 rounded">
                  Headquarters
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Direct Line</span>
                    <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-[#0B1D3A] hover:text-[#00A896]">
                      {COMPANY_INFO.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Official Consulting</span>
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="font-bold text-[#0B1D3A] hover:text-[#00A896]">
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Office Address</span>
                    <span className="font-medium text-[#0B1D3A]">Commercial Business District, Delhi, 110001</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: USA Desk */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white text-[#0B1D3A] rounded-2xl p-7 shadow-2xl border border-slate-200 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-heading font-extrabold text-lg text-[#0B1D3A]">
                  USA / Americas Desk
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#E6FAF6] text-[#00A896] px-2 py-0.5 rounded">
                  Enterprise Advisory
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">International Calling</span>
                    <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-[#0B1D3A] hover:text-[#00A896]">
                      {COMPANY_INFO.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Americas Consulting</span>
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="font-bold text-[#0B1D3A] hover:text-[#00A896]">
                      usa.advisory@zisantech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Coordinating Desk</span>
                    <span className="font-medium text-[#0B1D3A]">Global SAP Delivery & Remote Advisory Center</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: EMEA Desk */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white text-[#0B1D3A] rounded-2xl p-7 shadow-2xl border border-slate-200 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-heading font-extrabold text-lg text-[#0B1D3A]">
                  EMEA / International
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#E6FAF6] text-[#00A896] px-2 py-0.5 rounded">
                  24/7 SLA Support
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">24/7 Operations Desk</span>
                    <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-[#0B1D3A] hover:text-[#00A896]">
                      {COMPANY_INFO.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Global Support Desk</span>
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="font-bold text-[#0B1D3A] hover:text-[#00A896]">
                      emea.support@zisantech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF6] text-[#00A896] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Regional Coordination</span>
                    <span className="font-medium text-[#0B1D3A]">Multi-region SAP rollouts & offshore support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form & Consultation Grid */}
          <div id="consultation-form-block" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-white/10">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#2DD4BF] text-xs font-mono uppercase tracking-wider">
                <span>Direct Executive Advisory</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Let's Build the Next Generation of Enterprise Technology.
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Whether you are planning a comprehensive SAP rollout, seeking 24/7 SLA support, or looking to bridge complex statutory integrations, our enterprise consultants are ready to advise.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-[#00A896] font-bold uppercase tracking-wider">
                  ENTERPRISE SLA GUARANTEE
                </span>
                <p className="text-xs text-white/90 font-medium">
                  Direct communication with senior functional architects within 1 business day. Non-disclosure protected.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-[#0B1D3A] rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-2xl relative">
                <h3 className="font-heading font-bold text-2xl text-[#0B1D3A] mb-2">
                  Request an Architecture Consultation
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Complete the confidential brief below. An enterprise practice lead will contact you promptly.
                </p>

                {consultationSubmitted ? (
                  <div className="p-8 rounded-xl bg-[#E6FAF6] border border-[#00A896]/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#00A896] text-white flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-[#0B1D3A]">
                      Consultation Request Received
                    </h4>
                    <p className="text-xs text-slate-600">
                      Thank you. A ZisanTech Enterprise Architecture Director will review your requirements and reach out promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1D3A] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-300 text-[#0B1D3A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#00A896]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1D3A] mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-300 text-[#0B1D3A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#00A896]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1D3A] mb-1.5">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 87978 18499"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-300 text-[#0B1D3A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#00A896]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1D3A] mb-1.5">
                          Area of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-300 text-[#0B1D3A] text-xs focus:outline-none focus:border-[#00A896]"
                        >
                          <option value="SAP Implementation">SAP Implementation</option>
                          <option value="SAP Rollout">SAP Rollout</option>
                          <option value="SAP Custom Solutions">SAP Custom Solutions</option>
                          <option value="SAP Support (24/7 SLA)">SAP Support (24/7 SLA)</option>
                          <option value="SAP Integration">SAP Integration</option>
                          <option value="SAP E-Invoice & E-Way Bill">SAP E-Invoice & E-Way Bill</option>
                          <option value="SAP AI & Intelligent ERP">SAP AI & Intelligent ERP</option>
                          <option value="CRM / ERP Solutions">CRM / ERP Solutions</option>
                          <option value="E-commerce Solutions">E-commerce Solutions</option>
                          <option value="HRMS Solutions">HRMS Solutions</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="App & Web Development">App & Web Development</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1D3A] mb-1.5">
                        Project Scope / Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your enterprise landscape, timeline, or current challenge..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-300 text-[#0B1D3A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#00A896]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-scorelabs-primary py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#00A896]/30 cursor-pointer transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Consultation</span>
                    </button>

                    <p className="text-[10px] text-slate-400 text-center pt-1">
                      Strict non-disclosure commitment. Your project brief is kept fully confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper SVG Icon for Cloud Services
const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);
