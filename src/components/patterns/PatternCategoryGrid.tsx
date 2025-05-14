
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PatternCard from "./PatternCard";
import ComponentDetail from "./ComponentDetail";
import { getFilteredComponents } from "./componentRegistry";

interface PatternCategoryGridProps {
  filter?: string;
}

const PatternCategoryGrid = ({ filter = "all" }: PatternCategoryGridProps) => {
  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const filteredComponents = getFilteredComponents(filter);

  const openComponent = (component: any) => {
    setSelectedComponent(component);
  };

  const closeComponent = () => {
    setSelectedComponent(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component, index) => (
          <PatternCard 
            key={component.id || component.name}
            title={component.title || component.name}
            description={component.description || "UI component"}
            color={component.color || "#00F5FF"}
            icon={component.icon || null}
            component={React.isValidElement(component.component) ? component.component : null}
            index={index}
            onClick={() => openComponent(component)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedComponent && (
          <ComponentDetail 
            component={selectedComponent} 
            onClose={closeComponent} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PatternCategoryGrid;
