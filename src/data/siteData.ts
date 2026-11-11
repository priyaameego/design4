export interface ServiceItem {
  id: number;
  category: 'SAP SERVICES' | 'Other Services';
  type: 'sap' | 'other';
  title: string;
  slug: string;
  url: string;
  shortDesc: string;
  image: string;
  fullDesc: string[];
  keyFeatures: string[];
  deliverables: string[];
  businessValue: string[];
  icon: string;
}

export interface TrainingItem {
  id: number;
  category: 'Functional Modules' | 'Technical Module';
  type: 'functional' | 'technical';
  title: string;
  code: string;
  slug: string;
  url: string;
  shortDesc: string;
  image: string;
  overview: string[];
  targetAudience: string[];
  coreTopics: string[];
  careerOutcomes: string[];
  duration: string;
  format: string;
}

export interface BlogItem {
  id: number;
  title: string;
  slug: string;
  url: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  modules: string[];
  caseSnippet: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'End-to-End Shop Floor to Top Floor Orchestration',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    summary: 'Empowering discrete and process manufacturers with lean production workflows, integrated supply chains, synchronized shop floor planning, and smart predictive maintenance.',
    challenges: [
      'Inventory bottlenecks & raw material lead time unpredictability',
      'Fragmented batch tracking and quality assurance documentation',
      'Lack of real-time visibility into machine uptime and capacity scheduling',
      'High overheads due to unoptimized multi-plant logistics'
    ],
    solutions: [
      'Comprehensive SAP PP (Production Planning) & QM (Quality Management) integration',
      'SAP EWM for advanced warehouse automation & multi-tier tracking',
      'Real-time IoT & SAP Integration for live machine performance telemetrics',
      'Unified enterprise bill-of-materials (BOM) & engineering change governance'
    ],
    outcomes: [
      '28% reduction in production cycle turnaround times',
      '99.4% batch traceability across raw-material-to-dispatch pipelines',
      '22% decline in unexpected shop-floor machinery downtime'
    ],
    modules: ['SAP PP', 'SAP QM', 'SAP MM', 'SAP EWM', 'SAP PM'],
    caseSnippet: 'Transformed multi-facility production scheduling for an industrial tooling major, eliminating inventory stock-outs and streamlining dispatch.'
  },
  {
    id: 'retail-textile',
    name: 'Retail & Textile',
    tagline: 'Agile Omnichannel Fulfillment & Yarn-to-Garment Lifecycle',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    summary: 'Delivering unified retail ERP, multi-channel commerce sync, inventory visibility, and structured textile batch/dye-lot tracking from spinning to garment export.',
    challenges: [
      'Rapid demand fluctuations across seasonal fashion collections',
      'Multi-channel inventory divergence between physical stores and e-commerce',
      'Complex fabric shade-lot and dye batch segregation',
      'High returns processing costs and customer SLA penalties'
    ],
    solutions: [
      'SAP SD omnichannel pricing, promotion, and allocation management',
      'Integration with modern e-commerce engines & payment gateways',
      'Specialized lot-level inventory tracking for textile dyeing and finishing',
      'Point-of-Sale (POS) and SAP ERP synchronous data synchronization'
    ],
    outcomes: [
      '35% improvement in multi-warehouse order fulfillment speed',
      'Sub-second inventory synchronization across all sales channels',
      'Significant reduction in deadstock via predictive demand planning'
    ],
    modules: ['SAP SD', 'SAP MM', 'SAP FICO', 'E-commerce Solutions', 'Custom ERP'],
    caseSnippet: 'Implemented unified inventory visibility across 85+ retail outlets and web fulfillment centers with automated replenishment.'
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    tagline: 'Resilient Downstream & Upstream Asset Governance',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    summary: 'Ensuring strict compliance, capital asset lifecycle integrity, vendor audit trails, and multi-currency fiscal consolidation for petroleum and natural gas operators.',
    challenges: [
      'Rigorous environmental, safety (EHS), and statutory tax mandates',
      'Volatile global commodity pricing impacting procurement contracts',
      'Capital-intensive equipment maintenance in offshore and remote fields',
      'Complex contractor and third-party logistics billing reconciliations'
    ],
    solutions: [
      'Heavy-duty Plant Maintenance (PM) & Asset Accounting in SAP FICO',
      'Automated statutory compliance including E-Invoice & E-Way Bill bridges',
      'SAP Ariba-driven contract lifecycle and vendor quotation automation',
      'Real-time hydrocarbon pipeline and depot inventory balancing'
    ],
    outcomes: [
      '100% statutory E-Invoice and GST regulatory alignment without penalty',
      '18% reduction in unplanned maintenance downtime across field assets',
      'Transparent multi-tier supplier audit compliance'
    ],
    modules: ['SAP E-Invoice & E-Way Bill', 'SAP FICO', 'SAP PM', 'SAP MM', 'SAP Ariba'],
    caseSnippet: 'Engineered a mission-critical automated tax compliance bridge handling 500,000+ monthly transactional e-invoices with zero failures.'
  },
  {
    id: 'agro-chemical',
    name: 'Agro Chemical',
    tagline: 'Stringent Formulation Governance & Distributed Dealer Networks',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    summary: 'Accelerating formula versioning, hazardous material governance, seasonal distributor credit control, and batch-wise regulatory traceability.',
    challenges: [
      'Mandatory chemical registry compliances and hazard tracking',
      'Seasonal demand spikes requiring pre-monsoon distributor stocking',
      'Complex secondary rebate and discount calculations for rural dealers',
      'Expiration date and potency depreciation across active agro-ingredients'
    ],
    solutions: [
      'SAP Process Manufacturing recipe control and active ingredient formulation',
      'Custom CRM / ERP dealer management portals with integrated credit checks',
      'First-Expiry-First-Out (FEFO) automated warehouse management',
      'SAP AI & predictive analytics for regional weather-linked demand trends'
    ],
    outcomes: [
      'Eliminated expired batch write-offs with FEFO automation',
      'Instant dealer claim settlement processing, cut from 45 days to 48 hours',
      'Complete end-to-end hazardous chemical handling compliance'
    ],
    modules: ['SAP PP-PI', 'SAP QM', 'CRM / ERP Solutions', 'SAP SD', 'SAP AI'],
    caseSnippet: 'Deployed an automated dealer portal connected directly to SAP SD, processing seasonal agricultural orders seamlessly across 1,200 distributors.'
  },
  {
    id: 'steel',
    name: 'Steel & Metallurgy',
    tagline: 'High-Volume Mill Logistics, Heat Tracking & Metal Yields',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    summary: 'Optimizing melt-shop to rolling-mill yields, heat-wise traceability, weighbridge integrations, and bulk commodity transit logistics.',
    challenges: [
      'Tracking heat numbers, chemical composition, and mechanical properties per slab/coil',
      'High weighbridge reconciliation friction leading to dispatch delays',
      'Power and scrap consumption monitoring across electric arc furnaces',
      'Volatile spot market pricing for finished structural steel and scrap'
    ],
    solutions: [
      'Weighbridge hardware-to-SAP ERP real-time serial interface integration',
      'Heat number and coil tracking through SAP QM and batch classification',
      'SAP TM (Transportation Management) for bulk rail and multi-axle fleet dispatches',
      'Dynamic cost accounting and scrap consumption analysis in SAP CO'
    ],
    outcomes: [
      'Cut gate-in to gate-out turnaround time by 42 minutes per truck',
      'Precise melt-to-yield ratio visibility delivering notable scrap recovery',
      'Eliminated dispatch invoicing discrepancies'
    ],
    modules: ['SAP TM', 'SAP QM', 'SAP Integration', 'SAP FICO', 'SAP MM'],
    caseSnippet: 'Integrated 14 remote weighbridges and crane scales directly into central SAP instance, eliminating manual weighing slips and invoicing leaks.'
  },
  {
    id: 'pharma',
    name: 'Pharma & Life Sciences',
    tagline: 'GxP Validated Formulations, Serialization & Cold Chain Integrity',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    summary: 'Enabling FDA 21 CFR Part 11 electronic records, batch release automation, clinical inventory monitoring, and audited track-and-trace pipelines.',
    challenges: [
      'Zero-tolerance compliance standards (GxP, 21 CFR Part 11, audit trails)',
      'Temperature excursions and cold-chain distribution tracking',
      'Strict quarantine-to-release workflows for active pharmaceutical ingredients (APIs)',
      'Counterfeit prevention and national serialization mandates'
    ],
    solutions: [
      'Fully validated SAP QM sample management, stability testing, and electronic signatures',
      'Batch genealogy and serial number tracking across distribution hubs',
      'Seamless SAP Support and 24/7 hyper-care for validated systems',
      'Secure HRMS solutions with Role-Based Access Control (RBAC)'
    ],
    outcomes: [
      '100% audit-readiness for national and international pharma regulators',
      'Automated batch release cycle times compressed by 65%',
      'Unbroken chain of custody documentation across cold logistics'
    ],
    modules: ['SAP QM', 'SAP Support', 'SAP MM', 'HRMS Solutions', 'SAP Rollout'],
    caseSnippet: 'Delivered an electronic batch release and stability testing module for an export-oriented formulation facility under validated GxP protocol.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    category: 'SAP SERVICES',
    type: 'sap',
    title: 'SAP Rollout',
    slug: 'sap-rollout',
    url: '/services1/SAP SERVICES/1',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Expand your global SAP template seamlessly across branches, subsidiaries, and manufacturing plants with minimal operational disruption.',
    fullDesc: [
      'ZisanTech Solutions delivers proven SAP Rollout services designed to scale your core ERP template to new business units, regional branches, and overseas acquisitions.',
      'We balance headquarters governance with localized statutory, legal, and operational nuances, ensuring standard processes are respected while regional taxation (GST, VAT, withholding taxes) is flawlessly accommodated.'
    ],
    keyFeatures: [
      'Global template harmonization and gap analysis',
      'Localization for tax compliance, reporting, and language',
      'Data extraction, cleansing, and master data migration',
      'Cross-departmental end-user change management & hyper-care'
    ],
    deliverables: [
      'Comprehensive Rollout Blueprint and Scope Matrix',
      'Data Migration Verification Protocol',
      'User Acceptance Testing (UAT) sign-off documents',
      'Post go-live hyper-care and stabilized operational transition'
    ],
    businessValue: [
      'Rapid time-to-value for newly acquired business units',
      'Consistent consolidated enterprise financials and KPIs',
      'Reduced total cost of ownership (TCO) across ERP assets'
    ],
    icon: 'Layers'
  },
  {
    id: 2,
    category: 'SAP SERVICES',
    type: 'sap',
    title: 'SAP Custom Solutions',
    slug: 'sap-custom-solutions',
    url: '/services1/SAP SERVICES/2',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Bespoke ABAP, Fiori apps, workflow automation, and custom enhancements tailored to your unique proprietary operational edges.',
    fullDesc: [
      'When standard SAP configurations do not match your unique enterprise competitive advantage, ZisanTech builds secure, scalable, and upgrade-safe custom solutions.',
      'Our team leverages clean-core principles, modern SAP BTP extensions, and optimized ABAP on HANA to craft high-performance business applications.'
    ],
    keyFeatures: [
      'Modern SAP Fiori & UI5 responsive web experiences',
      'Clean-core ABAP RESTful Application Programming (RAP) & CAP models',
      'Complex report generation, custom RFCs, and enhancement points (BAdIs/User Exits)',
      'Automated business approval workflows across mobile and desktop'
    ],
    deliverables: [
      'Technical design documentation (TDD) and functional specifications',
      'Fully unit-tested and transport-managed source code',
      'Security role authorizations and audit logs',
      'Interactive user manual and administration guide'
    ],
    businessValue: [
      'Eliminate repetitive manual spreadsheets and disjointed tools',
      'Enhance workforce productivity with modern intuitive screens',
      'Retain proprietary operational workflows without breaking ERP upgradeability'
    ],
    icon: 'Cpu'
  },
  {
    id: 3,
    category: 'SAP SERVICES',
    type: 'sap',
    title: 'SAP Support',
    slug: 'sap-support',
    url: '/services1/SAP SERVICES/3',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Dependable L1-L3 SLA-governed support, performance monitoring, defect resolution, and continuous system optimization.',
    fullDesc: [
      'Ensure maximum business continuity with ZisanTech’s 24/7 proactive SAP Support. We protect your critical transactional ecosystem against unexpected downtime and bottlenecks.',
      'From urgent month-end closing support to routine ticket resolution and patch regression testing, our dedicated consultants keep your business operations humming.'
    ],
    keyFeatures: [
      'L1, L2, and L3 ticket support under clear SLAs',
      'Critical period hyper-care (financial year-end, quarterly closing, audit)',
      'SAP system health audits, background job tuning, and dump analysis',
      'Minor enhancements, configuration updates, and user training'
    ],
    deliverables: [
      'Incident management tracker with granular SLA metrics',
      'Monthly system health reports and trend diagnostics',
      'Knowledge-base documentation of frequent business queries',
      'Preventive maintenance schedules'
    ],
    businessValue: [
      '99.9% ERP availability during peak business and shipping hours',
      'Predictable operational support budgets with flexible engagement models',
      'Free internal IT resources to focus on strategic growth initiatives'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 4,
    category: 'SAP SERVICES',
    type: 'sap',
    title: 'SAP Integration',
    slug: 'sap-integration',
    url: '/services1/SAP SERVICES/4',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Seamlessly bridge SAP with third-party software, cloud platforms, e-commerce stores, logistics APIs, and IoT devices.',
    fullDesc: [
      'Break operational data silos. ZisanTech connects your central SAP ERP core with modern SaaS tools, banking portals, CRM platforms, legacy databases, and industrial devices.',
      'Utilizing SAP Integration Suite (CPI/PO), REST/OData endpoints, IDocs, and secure webservices, we enable high-throughput synchronous and asynchronous data pipelines.'
    ],
    keyFeatures: [
      'SAP CPI / Cloud Integration and legacy SAP PO/PI pipeline orchestration',
      'Direct banking host-to-host payout and statement automation',
      'E-commerce & CRM real-time data sync (Salesforce, Shopify, custom portals)',
      'Shop-floor IoT, PLC, and weighbridge automated data capture'
    ],
    deliverables: [
      'Interface Architecture Blueprint and data mapping catalogues',
      'Pre-built monitoring alarms and automated error reprocessing queues',
      'End-to-end handshake validation across test sandboxes',
      'API security tokens, certificates, and IP whitelist setup'
    ],
    businessValue: [
      'Eliminate duplicate data entry across disparate applications',
      'Real-time information flow for executive decision-making',
      'Zero data drops with resilient asynchronous message queues'
    ],
    icon: 'Network'
  },
  {
    id: 5,
    category: 'SAP SERVICES',
    type: 'sap',
    title: 'SAP Consulting',
    slug: 'sap-consulting',
    url: '/services1/SAP SERVICES/5',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Strategic ERP roadmapping, S/4HANA migration advisory, architecture reviews, and business process re-engineering.',
    fullDesc: [
      'Transform ERP from a recording system into a strategic driver of revenue and efficiency. Our senior SAP consultants guide your enterprise through roadmap design and technology investments.',
      'Whether evaluating brownfield vs. greenfield S/4HANA migration, consolidating disparate ERP instances, or re-engineering supply chain flows, we provide battle-tested advisory.'
    ],
    keyFeatures: [
      'S/4HANA readiness assessments and business case justification',
      'Business Process Re-engineering (BPR) and best-practice benchmarking',
      'License optimization and infrastructure sizing guidance',
      'Independent quality assurance and governance audits'
    ],
    deliverables: [
      'Executive Technology Roadmap and Transition Plan',
      'Total Cost of Ownership (TCO) & ROI projection models',
      'As-Is vs. To-Be process mapping documentation',
      'Risk mitigation and governance handbook'
    ],
    businessValue: [
      'Avoid costly software over-licensing and architectural missteps',
      'Accelerate executive consensus and stakeholder buy-in',
      'Maximize ROI from SAP investments through modern best practices'
    ],
    icon: 'Briefcase'
  },
  {
    id: 6,
    category: 'SAP SERVICES',
    type: 'sap',
    title: 'SAP E-Invoice & E-Way Bill',
    slug: 'sap-e-invoice-e-way-bill',
    url: '/services1/SAP SERVICES/6',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Direct, automated statutory compliance for GST E-Invoicing, QR codes, and E-Way Bill generation directly inside SAP.',
    fullDesc: [
      'Stay 100% tax compliant without adding friction to daily dispatch and billing. ZisanTech provides a robust, seamless bridge between SAP and the government GSTN / IRP portals.',
      'Invoices generated in SAP SD or FI automatically acquire IRN (Invoice Reference Number), signed QR codes, and E-Way Bills in seconds, enabling instant printout and dispatch.'
    ],
    keyFeatures: [
      'Direct API handshake with government-approved GSP / IRP gateways',
      'Real-time automated generation of IRN, signed QR code, and E-Way Bills',
      'Automatic handling of credit notes, debit notes, and cancellation workflows',
      'Configurable fallback mechanisms, retry queues, and bulk generation tools'
    ],
    deliverables: [
      'SAP Add-on connector configured for your company codes and plant structures',
      'Customized invoice print formats compliant with statutory layout rules',
      'Exception management cockpit for failed or pending IRNs',
      'Comprehensive user guide for dispatch and accounts personnel'
    ],
    businessValue: [
      'Zero truck detention or shipment delays caused by manual bill generation',
      '100% statutory penalty avoidance with guaranteed compliance',
      'Massive time savings for accounts receivable and logistics teams'
    ],
    icon: 'FileCheck'
  },
  {
    id: 7,
    category: 'SAP SERVICES',
    type: 'sap',
    title: 'SAP AI & Intelligent ERP',
    slug: 'sap-ai',
    url: '/services1/SAP SERVICES/7',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Infuse artificial intelligence, machine learning, and robotic process automation into your core enterprise workflows.',
    fullDesc: [
      'Harness modern artificial intelligence directly alongside your transactional data. ZisanTech helps forward-thinking enterprises deploy machine learning and intelligent document processing in SAP.',
      'From automated accounts payable vendor invoice reading to predictive cash-flow forecasting and intelligent material reorder recommendations, we turn ERP data into autonomous decisions.'
    ],
    keyFeatures: [
      'Intelligent Document Processing (IDP) for automated invoice and PO ingestion',
      'Predictive inventory demand forecasting algorithms',
      'AI-driven customer credit scoring and payment delay probability indicators',
      'Integration with generative AI assistants and SAP Joule capabilities'
    ],
    deliverables: [
      'Trained and validated AI workflow pipelines connected to SAP BTP',
      'Human-in-the-loop exception handling dashboard',
      'Accuracy verification benchmarks and model drift tracking',
      'Technical architecture and compliance review documentation'
    ],
    businessValue: [
      '80% reduction in manual data keying across high-volume accounting',
      'Proactive identification of supply chain bottlenecks before they occur',
      'Smarter working capital management through algorithmic insights'
    ],
    icon: 'Sparkles'
  },
  {
    id: 8,
    category: 'Other Services',
    type: 'other',
    title: 'CRM / ERP Solutions',
    slug: 'crm-erp-solutions',
    url: '/services1/Other Services/1',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Tailored enterprise platforms connecting customer pipelines, sales operations, field force, and back-office accounting.',
    fullDesc: [
      'For mid-market and enterprise organizations seeking agile operational systems, ZisanTech provides tailored CRM and ERP implementations that connect front-line sales with back-office execution.',
      'We eliminate disconnected spreadsheets, streamline customer journey interactions, and provide real-time sales visibility for leadership.'
    ],
    keyFeatures: [
      'Lead-to-cash pipeline automation and sales performance tracking',
      'Field sales force tracking with mobile geolocation check-ins',
      'Customer support ticketing, SLA tracking, and resolution knowledge bases',
      'Real-time financial ledgers and automated invoicing modules'
    ],
    deliverables: [
      'Configured CRM/ERP workspace matching your organizational hierarchy',
      'Data import from legacy systems with sanitized contact records',
      'Management dashboards and automated daily executive email digests',
      'Training sessions for sales and support representatives'
    ],
    businessValue: [
      'Higher lead conversion rates and shorter sales cycle velocity',
      'Complete 360-degree visibility into client lifetime value and service history',
      'Cohesive organizational communication across distributed teams'
    ],
    icon: 'Users'
  },
  {
    id: 9,
    category: 'Other Services',
    type: 'other',
    title: 'E-commerce Solutions',
    slug: 'ecommerce-solutions',
    url: '/services1/Other Services/2',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'High-conversion B2B and B2C digital storefronts engineered with real-time ERP inventory and payment gateway integration.',
    fullDesc: [
      'Empower your business to sell 24/7 across borders. ZisanTech designs and builds modern B2B distributor portals and consumer-facing B2C digital storefronts that handle massive catalogue volumes.',
      'Every store is tightly coupled to back-end inventory, tax engines, and automated logistics booking for true frictionless fulfillment.'
    ],
    keyFeatures: [
      'B2B custom pricing tiers, bulk order matrices, and credit line purchases',
      'High-speed responsive storefronts optimized for mobile conversion',
      'Secure multi-gateway payment processing (UPI, cards, net banking, international)',
      'Automated shipping partner API integration and track-and-trace notifications'
    ],
    deliverables: [
      'Production-ready modern web storefront with SSL security',
      'Admin control panel for catalogue, coupon, and inventory management',
      'Integrated payment gateway test and production keys',
      'Search engine optimized (SEO) catalogue architecture'
    ],
    businessValue: [
      'Direct-to-consumer and distributor self-service ordering channels',
      'Substantially reduced order processing overheads',
      'Global market reach with automated regional tax and currency handling'
    ],
    icon: 'ShoppingCart'
  },
  {
    id: 10,
    category: 'Other Services',
    type: 'other',
    title: 'HRMS Solutions',
    slug: 'hrms-solutions',
    url: '/services1/Other Services/3',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Comprehensive human capital platforms covering recruitment, attendance, automated payroll, and employee self-service.',
    fullDesc: [
      'Modernize your workforce operations from hire to retire. ZisanTech delivers agile HRMS platforms that eliminate repetitive administrative burdens and deliver exact statutory payroll calculations.',
      'Employees enjoy self-service portals for leave, expense reimbursement, and payslip access, while HR leaders gain clear headcount analytics.'
    ],
    keyFeatures: [
      'Automated statutory payroll engine (PF, ESI, TDS, PTax compliance)',
      'Biometric & mobile geo-fenced attendance tracking',
      'Employee self-service (ESS) portal for leave, claims, and investment declarations',
      'Performance appraisal, OKR alignment, and 360-degree feedback modules'
    ],
    deliverables: [
      'Company policy configuration and grade/designation hierarchy setup',
      'Historical employee database migration and verification',
      'Automated bank salary transfer export file formats',
      'HR admin and employee training walk-throughs'
    ],
    businessValue: [
      'Payroll processing time reduced from days to a few clicks',
      'Guaranteed compliance with evolving labor laws and tax regulations',
      'Enhanced employee satisfaction through transparent self-service'
    ],
    icon: 'UserCheck'
  },
  {
    id: 11,
    category: 'Other Services',
    type: 'other',
    title: 'Digital Marketing & Growth',
    slug: 'digital-marketing',
    url: '/services1/Other Services/4',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Data-driven B2B lead generation, search engine optimization, content strategy, and performance campaign management.',
    fullDesc: [
      'Turn digital channels into reliable customer acquisition engines. ZisanTech provides structured digital marketing campaigns tailored to high-value enterprise and technology service providers.',
      'We combine organic search optimization (SEO), targeted LinkedIn/B2B paid acquisition, and conversion rate optimization to build qualified inbound pipelines.'
    ],
    keyFeatures: [
      'Technical SEO audit, on-page optimization, and targeted B2B keyword strategy',
      'High-intent Google Search and LinkedIn performance marketing campaigns',
      'Thought leadership content creation and case study production',
      'Conversion tracking, funnel analytics, and attribution dashboards'
    ],
    deliverables: [
      'Comprehensive digital audit and competitive landscape report',
      'Campaign setup with tested ad copy and landing pages',
      'Bi-weekly performance reports with ROI and cost-per-lead tracking',
      'Continuous conversion rate optimization (CRO) iterations'
    ],
    businessValue: [
      'Consistent stream of qualified enterprise inbound inquiries',
      'Lower customer acquisition costs through organic search dominance',
      'Strengthened digital brand presence and market credibility'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 12,
    category: 'Other Services',
    type: 'other',
    title: 'App & Web Development',
    slug: 'app-web-development',
    url: '/services1/Other Services/5',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Scalable cloud-native web portals, SaaS platforms, and cross-platform mobile apps built with modern technology stacks.',
    fullDesc: [
      'Build reliable digital products engineered for performance, security, and high user adoption. ZisanTech designs and develops bespoke web and mobile applications using modern frameworks.',
      'From complex customer portals to high-performance operational dashboards, we deliver clean, maintainable software engineered to scale.'
    ],
    keyFeatures: [
      'Modern frontend development with React, Next.js, and TypeScript',
      'Robust backend APIs built with Node.js, Python, or Go',
      'Cross-platform iOS and Android mobile apps using React Native / Flutter',
      'Cloud deployment, containerization with Docker, and CI/CD pipelines'
    ],
    deliverables: [
      'Clean, documented, version-controlled source code repository',
      'Comprehensive automated test suite and staging environment',
      'Cloud architecture setup (AWS / Azure / GCP) with auto-scaling',
      'Post-deployment technical handover and support'
    ],
    businessValue: [
      'Rapid go-to-market speed with modular, reusable component architectures',
      'Flawless responsiveness across all devices and screen sizes',
      'Enterprise-grade security standards with encrypted data pipelines'
    ],
    icon: 'Code2'
  }
];

export const TRAINING_MODULES: TrainingItem[] = [
  {
    id: 1,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP SD (Sales & Distribution)',
    code: 'SAP-SD',
    slug: 'sap-sd-training',
    url: '/trainingprogrammes/Functional Modules/1',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master order-to-cash (O2C) cycles, enterprise sales structures, pricing procedures, delivery workflows, and billing automation.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Learn how real-world enterprises orchestrate sales channels, manage quotations, process orders, and manage dispatch using SAP SD.',
      'Our practical curriculum immerses you in hands-on industry scenarios, ensuring you understand not just how to execute transactions, but the business context behind every configuration step.'
    ],
    targetAudience: [
      'Graduates aspiring to enter high-paying SAP consulting careers',
      'Sales and marketing professionals transitioning into enterprise software',
      'Junior functional analysts seeking end-to-end implementation mastery'
    ],
    coreTopics: [
      'Enterprise Structure: Company Code, Sales Org, Distribution Channel, Division',
      'Master Data: Customer Master, Material Master, Customer-Material Info Records',
      'Order-to-Cash (O2C) Business Process Cycle',
      'Pricing Procedure Determination, Condition Technique, and Access Sequences',
      'Shipping, Delivery Processing, Picking, Packing, and Post Goods Issue (PGI)',
      'Billing, Invoicing, Credit/Debit Memos, and FI Integration'
    ],
    careerOutcomes: [
      'SAP SD Associate Consultant',
      'Order-to-Cash Functional Analyst',
      'Enterprise Business Solutions Specialist'
    ]
  },
  {
    id: 2,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP MM (Materials Management)',
    code: 'SAP-MM',
    slug: 'sap-mm-training',
    url: '/trainingprogrammes/Functional Modules/2',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master Procure-to-Pay (P2P), inventory governance, vendor evaluation, valuation, and physical inventory reconciliations.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Materials Management is the bedrock of enterprise supply chain operations. This program guides you through purchasing, inventory management, and invoice verification.',
      'You will gain deep expertise in configuring procurement organizations, vendor contracts, valuation classes, and automated movement types.'
    ],
    targetAudience: [
      'Supply chain, logistics, and procurement professionals',
      'Graduates with engineering, business, or commerce backgrounds',
      'IT professionals aiming for supply chain ERP consulting roles'
    ],
    coreTopics: [
      'Procure-to-Pay (P2P) Lifecycle from PR to PO, Goods Receipt, and Invoice Verification',
      'Enterprise Structure: Purchasing Org, Plants, Storage Locations',
      'Master Data: Material Master, Business Partner (Vendor), Purchasing Info Record',
      'Inventory Management: Movement Types, Stock Transfers, Physical Inventory',
      'Valuation & Account Determination (Automatic Account Assignment with FI)',
      'Invoice Verification (MIRO), Evaluated Receipt Settlement (ERS), and Credit Memos'
    ],
    careerOutcomes: [
      'SAP MM Functional Consultant',
      'Procure-to-Pay Business Analyst',
      'Supply Chain Systems Specialist'
    ]
  },
  {
    id: 3,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP PP (Production Planning)',
    code: 'SAP-PP',
    slug: 'sap-pp-training',
    url: '/trainingprogrammes/Functional Modules/3',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master manufacturing work centers, bill of materials (BOM), routings, demand management, MRP, and shop floor execution.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Understand how manufacturing powerhouses plan and execute shop floor operations. Dive into discrete manufacturing, repetitive manufacturing, and process industries.',
      'Develop real skills configuring material requirements planning (MRP), capacity leveling, production order staging, and confirmation accounting.'
    ],
    targetAudience: [
      'Mechanical, industrial, and production engineers',
      'Plant operations personnel and production planning managers',
      'ERP consultants expanding their manufacturing domain competence'
    ],
    coreTopics: [
      'Master Data: BOMs, Work Centers, Routings, Production Versions',
      'Sales and Operations Planning (SOP) & Demand Management',
      'Material Requirements Planning (MRP) Run, Lot Sizing, and Schedule Lines',
      'Production Order Creation, Release, Goods Issue, and Order Confirmation',
      'Capacity Planning, Work Center Utilization, and Leveling',
      'Integration with SAP QM, MM, and CO (Product Costing)'
    ],
    careerOutcomes: [
      'SAP PP Consultant',
      'Manufacturing ERP Analyst',
      'Shop Floor Planning Systems Consultant'
    ]
  },
  {
    id: 4,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP QM (Quality Management)',
    code: 'SAP-QM',
    slug: 'sap-qm-training',
    url: '/trainingprogrammes/Functional Modules/4',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master inspection lots, sampling procedures, quality certificates, defect recording, and audit management.',
    duration: '6 - 8 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Learn how to establish rigorous quality gates across procurement, manufacturing, and customer dispatch.',
      'Master inspection lot generation, characteristic valuation, usage decision (UD), quality notifications, and calibration maintenance.'
    ],
    targetAudience: [
      'Quality control and quality assurance engineers',
      'Pharma, chemical, and automotive inspection professionals',
      'Consultants looking to specialize in high-demand compliance workflows'
    ],
    coreTopics: [
      'Master Data: Master Inspection Characteristics (MICs), Sampling Procedures, Catalogs',
      'Inspection at Goods Receipt (Goods Receipt from Vendor & Production)',
      'In-Process Quality Inspections and Final Delivery Audits',
      'Results Recording and Defect Logging',
      'Usage Decision (UD) and Automatic Stock Posting',
      'Quality Notifications and Corrective/Preventive Actions (CAPA)'
    ],
    careerOutcomes: [
      'SAP QM Consultant',
      'Quality Systems Specialist',
      'Enterprise Quality Assurance Auditor'
    ]
  },
  {
    id: 5,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP FICO (Financial & Cost Management)',
    code: 'SAP-FICO',
    slug: 'sap-fico-training',
    url: '/trainingprogrammes/Functional Modules/5',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master general ledger, accounts payable/receivable, asset accounting, cost centers, profit centers, and fiscal closing.',
    duration: '10 - 12 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'The definitive enterprise financial system. Learn how multinational corporations manage balance sheets, tax audits, cost accounting, and profitability analysis.',
      'Our comprehensive training covers both Financial Accounting (FI for external statutory reporting) and Controlling (CO for internal managerial decision-making).'
    ],
    targetAudience: [
      'Finance professionals, chartered accountants, and commerce graduates',
      'Treasury and accounting analysts',
      'Consultants seeking high-impact careers in corporate finance systems'
    ],
    coreTopics: [
      'FI Enterprise Structure: Company Code, Chart of Accounts, Fiscal Year Variants',
      'General Ledger (New GL), Accounts Payable (AP), and Accounts Receivable (AR)',
      'Asset Accounting (Depreciation, Acquisitions, Scrapping)',
      'Bank Accounting, Electronic Bank Statements (EBS), and Payouts',
      'CO: Cost Element Accounting, Cost Center Accounting, and Internal Orders',
      'Profit Center Accounting (PCA) and Profitability Analysis (CO-PA)'
    ],
    careerOutcomes: [
      'SAP FICO Consultant',
      'Financial Systems Business Analyst',
      'Corporate ERP Controller'
    ]
  },
  {
    id: 6,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP HCM (Human Capital Management)',
    code: 'SAP-HCM',
    slug: 'sap-hcm-training',
    url: '/trainingprogrammes/Functional Modules/6',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master organizational management, personnel administration, time recording, and payroll run configurations.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Explore how large enterprises manage thousands of personnel across departments, subsidiaries, and geographic locations.',
      'Master infotypes, organizational plans, time schemas, statutory benefit rules, and end-to-end payroll driver calculations.'
    ],
    targetAudience: [
      'HR professionals, payroll managers, and HR operational leads',
      'Business graduates specializing in Human Resources',
      'ERP consultants configuring workforce management systems'
    ],
    coreTopics: [
      'Organizational Management (OM): Org Units, Jobs, Positions, Tasks',
      'Personnel Administration (PA): Infotypes, Actions, Employee Hiring Lifecycle',
      'Time Management: Work Schedules, Time Recording, Absence/Attendance Types',
      'Payroll Management: Wage Types, Payroll Schemas, PCRs, Gross-to-Net Pay',
      'Benefits and Statutory Deductions Configuration',
      'Reporting and Integration with FI for Payroll Posting'
    ],
    careerOutcomes: [
      'SAP HCM Functional Consultant',
      'Payroll & HR Systems Analyst',
      'Workforce Systems Specialist'
    ]
  },
  {
    id: 7,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP LE (Logistics Execution)',
    code: 'SAP-LE',
    slug: 'sap-le-training',
    url: '/trainingprogrammes/Functional Modules/7',
    image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master inbound/outbound shipments, delivery documentation, picking strategies, packing units, and carrier freight calculation.',
    duration: '6 - 8 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Bridge the gap between sales orders and physical shipping. Master the logistics pipeline including outbound delivery creation, wave picking, handling unit management, and transport documents.',
      'Essential for organizations operating complex multi-modal transit and distribution networks.'
    ],
    targetAudience: [
      'Logistics coordinators, shipping managers, and warehouse supervisors',
      'SAP SD and MM consultants expanding into logistics execution'
    ],
    coreTopics: [
      'Outbound and Inbound Delivery Document Configuration',
      'Picking, Packing, and Handling Unit Management (HUM)',
      'Shipment Documents and Transportation Planning Points',
      'Freight Cost Calculation and Settlement with Vendors',
      'Integration between LE, SD, MM, and FI'
    ],
    careerOutcomes: [
      'SAP Logistics Execution Consultant',
      'Freight & Shipment Systems Specialist'
    ]
  },
  {
    id: 8,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP TM (Transportation Management)',
    code: 'SAP-TM',
    slug: 'sap-tm-training',
    url: '/trainingprogrammes/Functional Modules/8',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master freight order execution, carrier selection, route optimization, container tracking, and charge calculations.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Learn the industry-standard transportation planning tool. Manage multi-modal global shipping, container consolidation, automated carrier freight tendering, and freight billing reconciliations.',
      'High-demand skill set across international freight forwarders, third-party logistics (3PL) providers, and industrial shippers.'
    ],
    targetAudience: [
      'Supply chain professionals, logistics managers, and freight controllers',
      'SAP consultants looking to specialize in modern S/4HANA TM'
    ],
    coreTopics: [
      'Transportation Network: Locations, Transportation Zones, Lanes',
      'Freight Units and Transportation Cockpit Planning',
      'Carrier Selection, Tendering, and Subcontracting',
      'Charge Management: Rate Tables, Calculation Sheets, Freight Agreements',
      'Settlement and Integration with ERP Financials'
    ],
    careerOutcomes: [
      'SAP TM Specialist Consultant',
      'Enterprise Transportation Architect'
    ]
  },
  {
    id: 9,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP EWM (Extended Warehouse Management)',
    code: 'SAP-EWM',
    slug: 'sap-ewm-training',
    url: '/trainingprogrammes/Functional Modules/9',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master high-volume storage bin strategies, wave management, labor management, RF scanner integration, and automated sorting.',
    duration: '10 - 12 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Take warehouse control to the highest tier of automation. Learn how modern distribution centers coordinate robotic sorters, RF handheld barcode readers, multi-depth racking, and slotting strategies.',
      'One of the fastest-growing and highest-compensated specializations in modern enterprise supply chain software.'
    ],
    targetAudience: [
      'Warehouse supervisors, fulfillment specialists, and inventory controllers',
      'Experienced SAP MM/WM consultants upgrading to SAP EWM'
    ],
    coreTopics: [
      'EWM Organizational Elements: Storage Types, Sections, Bins',
      'Inbound Processing: Deconsolidation, Putaway Strategies, Slotting',
      'Outbound Processing: Wave Management, Picking Strategies, Packing',
      'Internal Warehouse Movements, Physical Inventory, and Replenishment',
      'Radio Frequency (RF) Framework and Barcode Scanner Integration',
      'Labor Management and Yard Management Fundamentals'
    ],
    careerOutcomes: [
      'SAP EWM Consultant',
      'Warehouse Automation Systems Specialist'
    ]
  },
  {
    id: 10,
    category: 'Functional Modules',
    type: 'functional',
    title: 'SAP Ariba Procurement',
    code: 'SAP-ARIBA',
    slug: 'sap-ariba-training',
    url: '/trainingprogrammes/Functional Modules/10',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master cloud-based sourcing, supplier onboarding, contracts, catalogs, guided buying, and invoice reconciliation.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + Lab Sandbox Access',
    overview: [
      'Master the world’s premier B2B cloud procurement network. Learn how global organizations conduct electronic RFQs, manage multi-million dollar vendor negotiations, and automate guided buying.',
      'Understand both buyer-side and supplier-side Ariba Network configurations and Cloud Integration Gateway (CIG) connections to SAP ERP.'
    ],
    targetAudience: [
      'Strategic sourcing managers, procurement specialists, and buyers',
      'SAP MM consultants expanding into cloud procurement suites'
    ],
    coreTopics: [
      'Ariba Network Architecture and Supplier Onboarding',
      'Strategic Sourcing: Sourcing Events, RFIs, RFPs, Reverse Auctions',
      'Contract Management: Contract Workspaces, Clauses, Electronic Signatures',
      'Ariba Guided Buying and Catalog Administration',
      'Ariba Commerce Automation and Invoice Exception Handling',
      'SAP Cloud Integration Gateway (CIG) integration'
    ],
    careerOutcomes: [
      'SAP Ariba Consultant',
      'Cloud Procurement Architect'
    ]
  },
  {
    id: 11,
    category: 'Technical Module',
    type: 'technical',
    title: 'SAP ABAP (Advanced Business Application Programming)',
    code: 'SAP-ABAP',
    slug: 'sap-abap-training',
    url: '/trainingprogrammes/Technical Module/1',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master enterprise coding, Data Dictionary, ALV reports, BAPIs, BAdIs, Smart Forms, and modern ABAP on HANA RAP principles.',
    duration: '10 - 12 Weeks',
    format: 'Live Interactive Online + Dedicated Developer Sandbox',
    overview: [
      'The foundational programming language that powers the world’s top enterprise systems. Learn how to write performant, secure, and maintainable enterprise code.',
      'We start from syntax fundamentals and SQL optimization all the way to object-oriented programming, modern RESTful Application Programming (RAP), and CDS views.'
    ],
    targetAudience: [
      'Computer science graduates and software engineers',
      'Developers transitioning from Java, C#, or web development to enterprise software',
      'ERP consultants wishing to build custom business software'
    ],
    coreTopics: [
      'ABAP Workbench and Data Dictionary (Tables, Views, Data Elements, Domains)',
      'Classical & Interactive Reporting, ALV Grid Display',
      'Object-Oriented ABAP (OOPS): Classes, Interfaces, Inheritance, Polymorphism',
      'Enhancements & Modifications: User Exits, Customer Exits, BAdIs, Enhancement Framework',
      'Interfaces: BAPIs, RFCs, IDocs, and Web Services',
      'Modern ABAP on HANA: Core Data Services (CDS Views), AMDP, and RAP'
    ],
    careerOutcomes: [
      'SAP ABAP Developer',
      'Enterprise Application Engineer',
      'SAP Technical Consultant'
    ]
  },
  {
    id: 12,
    category: 'Technical Module',
    type: 'technical',
    title: 'SAP BASIS Administration',
    code: 'SAP-BASIS',
    slug: 'sap-basis-training',
    url: '/trainingprogrammes/Technical Module/2',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master system administration, user authorizations, transport management, HANA database backups, and kernel patch upgrades.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + System Admin Lab',
    overview: [
      'Become the administrator who keeps enterprise systems running. Master client administration, transport management (TMS), background job orchestration, and database performance monitoring.',
      'Develop real skills administering SAP HANA databases, performing system copies, and managing user roles and profiles.'
    ],
    targetAudience: [
      'System administrators, database administrators, and IT infrastructure engineers',
      'Graduates interested in high-reliability server and platform engineering'
    ],
    coreTopics: [
      'SAP System Architecture: Application Servers, Dispatcher, Work Processes',
      'Client Administration: Local/Remote Client Copy, Client Deletion',
      'Transport Management System (TMS) & Transport Directory Architecture',
      'Security & User Management: Roles, Authorizations (SU01, PFCG), Profile Generator',
      'System Monitoring, Background Job Management, and Spool Administration',
      'SAP HANA Database Administration Fundamentals & Backup/Recovery'
    ],
    careerOutcomes: [
      'SAP Basis Administrator',
      'SAP Infrastructure Engineer',
      'SAP Technical Operations Specialist'
    ]
  },
  {
    id: 13,
    category: 'Technical Module',
    type: 'technical',
    title: 'SAP PI/PO (Process Integration & Orchestration)',
    code: 'SAP-PI-PO',
    slug: 'sap-pi-po-training',
    url: '/trainingprogrammes/Technical Module/3',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master Enterprise Services Repository, Integration Directory, adapter configurations, mapping routines, and business process management.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + Integration Lab',
    overview: [
      'Learn how enterprise systems exchange critical data safely. Master Enterprise Services Repository (ESR) and Integration Directory (ID) tools.',
      'Configure adapters (SOAP, REST, RFC, IDoc, File, JDBC) and write graphical and Java mappings to harmonize disparate data standards.'
    ],
    targetAudience: [
      'Middleware developers and systems integration engineers',
      'ABAP developers seeking to master enterprise integration architectures'
    ],
    coreTopics: [
      'SAP PI/PO System Architecture & Dual/Single Stack Evolution',
      'Enterprise Services Repository (ESR): Data Types, Message Types, Service Interfaces',
      'Message Mapping & Java/XSLT Mappings',
      'Integration Directory (ID): Communication Channels, Integrated Configurations (ICO)',
      'Adapter Configurations: File/FTP, JDBC, RFC, IDoc_AAE, SOAP, and REST',
      'Troubleshooting, Monitoring Cockpit, and Alerts'
    ],
    careerOutcomes: [
      'SAP PI/PO Consultant',
      'Enterprise Middleware Engineer',
      'Systems Integration Specialist'
    ]
  },
  {
    id: 14,
    category: 'Technical Module',
    type: 'technical',
    title: 'SAP CPI (Cloud Platform Integration)',
    code: 'SAP-CPI',
    slug: 'sap-cpi-training',
    url: '/trainingprogrammes/Technical Module/4',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master SAP Integration Suite, iFlow design, cloud adapters, Groovy scripting, OAuth security, and hybrid cloud bridges.',
    duration: '8 - 10 Weeks',
    format: 'Live Interactive Online + SAP BTP Sandbox',
    overview: [
      'The modern standard for enterprise cloud connectivity. Learn how to build resilient integration flows (iFlows) across SAP BTP, connecting on-premise systems with cloud applications.',
      'Master Groovy scripting, exception subprocesses, content enrichers, splitters, aggregators, and secure credential keystores.'
    ],
    targetAudience: [
      'Integration consultants, cloud developers, and API engineers',
      'SAP PI/PO professionals migrating their skills to cloud architecture'
    ],
    coreTopics: [
      'SAP Business Technology Platform (BTP) & Integration Suite Architecture',
      'Design of Integration Flows (iFlows) using Message Routing and Transformation',
      'Cloud Adapters: HTTPS, OData, SFTP, SuccessFactors, Ariba, Mail, AMQP',
      'Data Transformation: Message Mapping, Content Enricher, Splitter, Aggregator',
      'Custom Scripting using Apache Groovy and JavaScript',
      'Security: Keystores, Certificate Authentication, OAuth2, and Monitoring'
    ],
    careerOutcomes: [
      'SAP CPI / Cloud Integration Consultant',
      'SAP BTP Integration Architect',
      'Cloud Enterprise Middleware Developer'
    ]
  },
  {
    id: 15,
    category: 'Technical Module',
    type: 'technical',
    title: 'SAP CIDS (Cloud Integration for Data Services)',
    code: 'SAP-CIDS',
    slug: 'sap-cids-training',
    url: '/trainingprogrammes/Technical Module/5',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Master high-volume ETL, SAP IBP integration, data transformation, on-premise agent connectors, and scheduled batch extraction.',
    duration: '6 - 8 Weeks',
    format: 'Live Interactive Online + Dedicated Sandbox',
    overview: [
      'Specialized cloud ETL and batch integration for supply chain applications such as SAP Integrated Business Planning (IBP).',
      'Master task configuration, transform functions, data flow orchestrations, and secure on-premise Data Services Agent deployment.'
    ],
    targetAudience: [
      'Data engineers, ETL specialists, and SAP IBP technical consultants',
      'Enterprise integration specialists handling large-scale data staging'
    ],
    coreTopics: [
      'Architecture of SAP Cloud Integration for Data Services (CIDS)',
      'Installation and Configuration of On-Premise Data Services Agent',
      'Datastore Connections: ERP, S/4HANA, BW, Flat Files, and Cloud Applications',
      'Creating Tasks, Data Flows, and Advanced Transformations',
      'Integration Scenarios for SAP Integrated Business Planning (IBP)',
      'Error Handling, Job Scheduling, and Operational Monitoring'
    ],
    careerOutcomes: [
      'SAP CIDS Consultant',
      'Supply Chain Data Integration Specialist',
      'Enterprise Cloud ETL Engineer'
    ]
  }
];

export const BLOGS: BlogItem[] = [
  {
    id: 1,
    title: 'How SAP Consulting Helps Businesses Work Smarter',
    slug: 'how-sap-consulting-helps-businesses-work-smarter',
    url: '/blog/1',
    category: 'SAP Strategy',
    readTime: '6 min read',
    date: 'March 15, 2026',
    author: 'ZisanTech Enterprise Team',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Modern ERP is no longer just a digital ledger; it is the central operational brain orchestrating lean supply chains, rapid compliance, and real-time leadership insights.',
    content: [
      'In today’s competitive global market, enterprise success is dictated by how rapidly and reliably an organization turns transactional data into decisive operational execution.',
      'Many organizations struggle with fragmented legacy software, where inventory counts in the warehouse do not match the billing desk, and financial reporting takes weeks of spreadsheet reconciliation after month-end.',
      'Professional SAP consulting bridges these critical chasms. By standardizing core processes across order-to-cash, procure-to-pay, and manufacturing operations, organizations eliminate duplicate data entry and gain instant, single-source-of-truth clarity.',
      'Furthermore, modern SAP S/4HANA implementations allow companies to unlock predictive analytics, automated statutory tax compliance, and automated replenishment cycles. Partnering with seasoned consultants ensures that business objectives lead the technology configuration—not the other way around.'
    ],
    keyTakeaways: [
      'Consolidation of disparate systems into a unified operational ecosystem',
      'Real-time financial visibility eliminating month-end closing delays',
      'Upgrade-safe customization adhering strictly to clean-core architecture'
    ],
    tags: ['SAP Consulting', 'Digital Transformation', 'Enterprise ERP', 'S/4HANA']
  },
  {
    id: 2,
    title: 'Why Reliable IT Services Matter for Growing Businesses',
    slug: 'why-reliable-it-services-matter-for-growing-businesses',
    url: '/blog/2',
    category: 'IT Strategy',
    readTime: '5 min read',
    date: 'February 28, 2026',
    author: 'ZisanTech Technology Group',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Scaling an enterprise requires dependable, high-availability IT infrastructure and managed services that eliminate downtime and safeguard company data.',
    content: [
      'For growing enterprises, technology is either a primary multiplier or a recurring bottleneck. As transaction counts double and customer touchpoints multiply, brittle IT setups begin to crack.',
      'Unscheduled server outages, payment gateway disconnections, or delayed warehouse dispatches directly inflict reputational damage and revenue loss.',
      'Investing in professional managed IT services ensures that proactive monitoring, automated backup redundancy, and 24/7 SLA-governed support are built into the business foundation.',
      'With reliable IT management, executive leadership can direct all their energy toward product development, customer delight, and geographic expansion, confident that their technological spine will hold firm under peak load.'
    ],
    keyTakeaways: [
      'Proactive system monitoring avoids catastrophic production downtime',
      'SLA-governed incident resolution guarantees predictable continuity',
      'Scalable cloud infrastructure adapts dynamically to seasonal demand surges'
    ],
    tags: ['IT Services', 'Cloud Infrastructure', 'Managed IT', 'Business Continuity']
  },
  {
    id: 3,
    title: 'Building Your Career Through Practical SAP Training',
    slug: 'building-your-career-through-practical-sap-training',
    url: '/blog/3',
    category: 'SAP Careers',
    readTime: '7 min read',
    date: 'January 22, 2026',
    author: 'ZisanTech Academic Council',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Theoretical slide decks do not prepare you for enterprise consulting. Why hands-on sandbox experience, real-world case studies, and business acumen define successful SAP professionals.',
    content: [
      'Enterprise technology continues to face a massive shortage of qualified, implementation-ready SAP talent. However, companies are increasingly wary of candidates who only memorize theoretical certification dumps without real business understanding.',
      'To excel as an SAP consultant—whether in functional modules like SD, MM, FICO, and PP, or technical paths like ABAP and CPI—you must understand the underlying business problem.',
      'A true consultant knows why an organization configures an automatic credit check, how an inventory movement type affects general ledger balance sheets, and what happens when an invoice reference number fails at the tax gateway.',
      'At ZisanTech Solutions, our training methodology centers completely around live scenario simulation, real-time client problem solving, and end-to-end sandbox walkthroughs that equip students to hit the ground running from day one.'
    ],
    keyTakeaways: [
      'Hands-on sandbox execution over rote memorization',
      'Mastery of cross-module integration points (SD-FI, MM-PP, CPI-ERP)',
      'End-to-end placement mentorship and interview scenario preparation'
    ],
    tags: ['SAP Training', 'Career Growth', 'Skill Development', 'SAP Certification']
  },
  {
    id: 4,
    title: 'Digital Transformation Starts with Understanding Your Business',
    slug: 'digital-transformation-starts-with-understanding-your-business',
    url: '/blog/4',
    category: 'Enterprise Strategy',
    readTime: '6 min read',
    date: 'December 18, 2025',
    author: 'ZisanTech Leadership',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Technology alone cannot fix an inefficient process. True digital evolution begins with deep workflow auditing, stakeholder alignment, and clear metrics.',
    content: [
      'Far too many digital transformation initiatives stall or deliver disappointing returns because organizations treat them as pure IT software rollouts rather than fundamental operational evolutions.',
      'Buying enterprise software without re-evaluating cumbersome approval chains or broken logistics paths merely automates inefficiency at greater expense.',
      'A successful digital journey starts with listening to the shop floor managers, billing clerks, customer service agents, and warehouse operators. Understanding their daily pain points clarifies the true requirements.',
      'Only once processes are simplified and KPIs clearly identified should technology architectures be drafted. When modern software is wrapped around lean, human-centric processes, real enterprise transformation occurs.'
    ],
    keyTakeaways: [
      'Process simplification must precede software automation',
      'Cross-functional stakeholder inclusion guarantees high user adoption',
      'Measurable milestone KPIs safeguard return on investment'
    ],
    tags: ['Digital Transformation', 'Change Management', 'Process Optimization']
  },
  {
    id: 5,
    title: 'Technology Success Does Not End After Implementation',
    slug: 'technology-success-does-not-end-after-implementation',
    url: '/blog/5',
    category: 'ERP Operations',
    readTime: '5 min read',
    date: 'November 14, 2025',
    author: 'ZisanTech Operations Desk',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    excerpt: 'The critical post-go-live phase: Why ongoing hyper-care, continuous system tuning, and proactive employee upskilling dictate long-term ERP ROI.',
    content: [
      'The go-live date is often celebrated with fanfare, but in truth, go-live is simply the starting line of an ERP system’s lifecycle.',
      'During the first 90 days following deployment, user habit changes, edge-case data scenarios, and month-end closing pressure test the new platform under live fire.',
      'Without structured hyper-care, minor user misunderstandings can escalate into operational logjams and vendor billing delays.',
      'Long-term success requires dedicated post-implementation support, regular performance tuning of background batch jobs, continuous training of new hires, and periodic process audits to leverage new software updates.'
    ],
    keyTakeaways: [
      'Structured 90-day hyper-care prevents user adoption friction',
      'Continuous performance tuning ensures sub-second transaction speeds',
      'Periodic audit reviews unlock incremental feature benefits over time'
    ],
    tags: ['Post Go-Live', 'SAP Support', 'System Governance', 'Continuous Improvement']
  },
  {
    id: 6,
    title: 'Why Continuous Learning Matters in the IT Industry',
    slug: 'why-continuous-learning-matters-in-the-it-industry',
    url: '/blog/6',
    category: 'Technology Trends',
    readTime: '6 min read',
    date: 'October 05, 2025',
    author: 'ZisanTech Academic Council',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    excerpt: 'With cloud architectures, generative AI, and intelligent ERP evolving at an unprecedented pace, technical professionals must cultivate constant adaptability.',
    content: [
      'The technology landscape never stands still. Tools and paradigms that were cutting-edge five years ago are now considered legacy systems.',
      'In the SAP ecosystem, the transition from ECC to S/4HANA, on-premise PI/PO to cloud-native SAP Integration Suite (CPI), and standard ABAP to clean-core RAP models represents a tectonic shift in skill requirements.',
      'Tech professionals who commit to continuous learning and proactive reskilling find themselves leading high-impact global projects and commanding premium compensation.',
      'Investing time each month to explore new cloud adapters, study best-practice architecture blueprints, and experiment in sandboxes is the single greatest career safeguard a modern engineer possesses.'
    ],
    keyTakeaways: [
      'Embrace modern cloud-native architectures early',
      'Build hybrid expertise bridging functional domain knowledge with technical mastery',
      'Participate actively in real-world sandbox experimentation'
    ],
    tags: ['Continuous Learning', 'Cloud Computing', 'Future of Work', 'Tech Skills']
  },
  {
    id: 7,
    title: 'Architecting Clean-Core SAP S/4HANA: Modern Strategies for Agile Enterprises',
    slug: 'architecting-clean-core-sap-s4hana-modern-strategies',
    url: '/blog/7',
    category: 'SAP Strategy & Architecture',
    readTime: '8 min read',
    date: 'November 10, 2026',
    author: 'ZisanTech Enterprise Architecture Board',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How modern enterprises maintain agile, upgradeable ERP cores using SAP BTP side-by-side extensions, RESTful Application Programming (RAP), and automated statutory governance.',
    content: [
      'As organizations accelerate their migration journeys to SAP S/4HANA, the historical temptation to heavily modify the ERP core with thousands of unmanaged custom Z-tables and modifications poses a severe risk to future innovation and cloud upgrades.',
      'The modern paradigm recommended by leading enterprise architects is the "Clean Core" strategy. By keeping the central ERP standard and upgrade-ready, enterprises can adopt new quarterly feature releases and statutory patches without undergoing months of costly regression testing.',
      'At ZisanTech Solutions, our enterprise architecture practice empowers clients to achieve rapid business customization without polluting the ERP core. We achieve this through three foundational pillars:',
      '1. Side-by-Side Cloud Extensions on SAP BTP: Building custom business applications, dealer portals, and supplier approval cockpits in SAP Business Technology Platform (BTP), communicating strictly through released APIs and OData services.',
      '2. ABAP RESTful Application Programming (RAP): For required in-app extensions, developing strictly within RAP and CDS views, guaranteeing zero upgrade breakage.',
      '3. Real-Time Middleware Orchestration with SAP CPI: Decoupling mission-critical external connections—such as statutory E-Invoice/E-Way Bill gateways, bank payment rails, and e-commerce stores—via asynchronous event-driven pipelines.',
      'By embracing this structured, future-proof architectural discipline, enterprises ensure their technology stack remains agile, secure, and ready to incorporate generative AI and autonomous workflows seamlessly.'
    ],
    keyTakeaways: [
      'Clean Core preserves effortless upgradeability and lowers long-term TCO',
      'SAP BTP side-by-side extensions protect proprietary workflows safely',
      'API-first decoupled integration eliminates point-to-point fragility'
    ],
    tags: ['S/4HANA', 'Clean Core', 'SAP BTP', 'Enterprise Architecture', 'SAP CPI']
  }
];

export const COMPANY_INFO = {
  name: 'ZisanTech Solutions',
  tagline: 'Enterprise SAP Consulting, IT Solutions & Career-Ready Professional Training',
  experienceYears: '10+',
  consultantsCount: '50+',
  clientsCount: '120+',
  studentsTrained: '3,500+',
  supportAvailability: '24/7 Enterprise SLA',
  primaryEmail: 'info@zisantech.com',
  primaryPhone: '+91 87978 18499',
  address: 'Commercial Business District, New Delhi, India',
  social: {
    linkedin: 'https://www.linkedin.com/company/zisantech-sapconsulting/',
    website: 'https://www.zisantech.com'
  }
};
