import React from 'react';
import { LuxuryNavbar } from '../components/LuxuryNavbar';
import { LuxuryFooter } from '../components/LuxuryFooter';
import { ConceptLuxuryViolet } from '../components/concepts/ConceptLuxuryViolet';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-[#242630] font-sans">
      {/* Floating Sticky Luxury Navbar with Glass Dropdowns */}
      <LuxuryNavbar />

      {/* Luxury Platinum & Violet Homepage Concept 03 Content */}
      <main className="flex-grow">
        <ConceptLuxuryViolet />
      </main>

      {/* Luxury Footer with Verified Details, Map & Visual Navigation */}
      <LuxuryFooter />
    </div>
  );
};
