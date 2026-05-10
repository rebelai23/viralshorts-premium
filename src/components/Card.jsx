import React from 'react';

const Card = ({ children, className = "", hoverable = true, ...props }) => {
  const baseClasses = "bg-surface backdrop-blur-sm border border-border rounded-large p-6 transition-glow duration-300 ease-out flex flex-col";
  const hoverClasses = hoverable ? "hover:shadow-card-hover-glow hover:translate-y-[-5px]" : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;