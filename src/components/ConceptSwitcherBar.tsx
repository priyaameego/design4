import React, { useState } from 'react';
import { useConcept, HomepageConcept } from '../context/ConceptContext';
import { Layers, Sparkles, Building2, Terminal, Globe, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ConceptMeta {
  id: HomepageConcept;
  name: string;
  tagline: string;
  badge: string;
  icon: React.ReactNode;
  accent: string;
  desc: string;
}

const CONCEPTS: ConceptMeta[] = [
  {
    id: 'enterprise',
    name: '1. Premium Enterprise',
    tagline: 'ZisanTech Flagship Corporate Aesthetic',
    badge: 'Flagship Corporate',
    icon: <Building2 className="w-4 h-4" />,
    accent: 'bg-blue-600',
    desc: 'Sophisticated corporate design, deep navy surfaces, structured metrics bar, and commanding executive authority.'
  },
  {
    id: 'minimal',
    name: '2. Modern Minimal',
    tagline: 'Clean, Spacious & Elegant Design',
    badge: 'Light Architectural',
    icon: <Layers className="w-4 h-4" />,
    accent: 'bg-slate-800',
    desc: 'Bespoke Swiss typography, crisp monochromatic balance, understated teal accents, and airy editorial layouts.'
  },
  {
    id: 'futuristic',
    name: '3. Futuristic Technology',
    tagline: 'Next-Gen Cybernetic & Intelligent Tech',
    badge: 'Dark Tech Mode',
    icon: <Sparkles className="w-4 h-4" />,
    accent: 'bg-teal-500',
    desc: 'Dark ambient slate canvas, glowing circuit gradients, glassmorphism cards, and modern high-tech visual identity.'
  },
  {
    id: 'sap',
    name: '4. Corporate SAP Solutions',
    tagline: 'Enterprise Software & ERP Mastery',
    badge: 'ERP Specialist',
    icon: <Terminal className="w-4 h-4" />,
    accent: 'bg-indigo-600',
    desc: 'Architectural blueprinting, modular SAP suite diagrams, compliance badges, and robust operational trust.'
  },
  {
    id: 'agency',
    name: '5. Creative Global IT Agency',
    tagline: 'Bold Global IT & Digital Transformation',
    badge: 'Creative Enterprise',
    icon: <Globe className="w-4 h-4" />,
    accent: 'bg-sky-600',
    desc: 'Bold typography contrasts, asymmetric dynamic cards, international multi-country reach, and high-impact energy.'
  }
];

export const ConceptSwitcherBar: React.FC = () => {
  const { currentConcept, setConcept } = useConcept();
  const [isOpen, setIsOpen] = useState(false);

  const activeMeta = CONCEPTS.find(c => c.id === currentConcept) || CONCEPTS[0];

  return (
    <div className="bg-navy-950 text-white border-b border-white/10 sticky top-0 z-50 transition-all text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="font-semibold tracking-wide text-slate-300 uppercase">Interactive Concept Switcher:</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-200 text-[11px] font-medium border border-blue-500/30">
            5 Concepts Available for Selection
          </span>
        </div>

        {/* Quick concept pill selection on desktop */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-white/10">
          {CONCEPTS.map((c) => {
            const isActive = currentConcept === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setConcept(c.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-medium text-xs ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {c.icon}
                <span>{c.name.split('. ')[1]}</span>
                {isActive && <CheckCircle2 className="w-3.5 h-3.5 ml-0.5 text-teal-300" />}
              </button>
            );
          })}
        </div>

        {/* Dropdown for mobile/tablet */}
        <div className="relative lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-blue-700/80 hover:bg-blue-600 px-3 py-1.5 rounded-lg text-white font-medium transition-all"
          >
            {activeMeta.icon}
            <span>{activeMeta.name}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-navy-900 border border-white/20 rounded-xl shadow-2xl py-2 z-50 text-left">
              {CONCEPTS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setConcept(c.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 flex items-start gap-2.5 hover:bg-white/10 transition-colors ${
                    currentConcept === c.id ? 'bg-blue-600/30 border-l-4 border-blue-400' : ''
                  }`}
                >
                  <div className="mt-0.5 text-blue-300">{c.icon}</div>
                  <div>
                    <p className="font-semibold text-white text-xs">{c.name}</p>
                    <p className="text-[11px] text-slate-300 line-clamp-1">{c.tagline}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

