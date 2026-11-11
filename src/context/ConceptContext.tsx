import React, { createContext, useContext, useState, useEffect } from 'react';

export type HomepageConcept = 'enterprise' | 'minimal' | 'futuristic' | 'sap' | 'agency';

interface ConceptContextType {
  currentConcept: HomepageConcept;
  setConcept: (concept: HomepageConcept) => void;
}

const ConceptContext = createContext<ConceptContextType>({
  currentConcept: 'enterprise',
  setConcept: () => {},
});

export const ConceptProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentConcept, setCurrentConcept] = useState<HomepageConcept>(() => {
    const saved = localStorage.getItem('zisantech_concept');
    return (saved as HomepageConcept) || 'enterprise';
  });

  const handleSetConcept = (c: HomepageConcept) => {
    setCurrentConcept(c);
    localStorage.setItem('zisantech_concept', c);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-concept', currentConcept);
  }, [currentConcept]);

  return (
    <ConceptContext.Provider value={{ currentConcept, setConcept: handleSetConcept }}>
      {children}
    </ConceptContext.Provider>
  );
};

export const useConcept = () => useContext(ConceptContext);

