import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, className = "", variant = "primary", ...props }) => {
  const baseClasses = "px-8 py-3 font-semibold rounded-large transition-all duration-300 ease-out button-glow-hover text-center";
  const variants = {
    primary: "bg-primary text-text hover:bg-opacity-80 hover:shadow-primary-glow",
    secondary: "bg-transparent border border-primary text-primary hover:bg-primary-glow hover:text-text",
    accent: "bg-accent text-text hover:bg-opacity-80 hover:shadow-accent-glow", // Assuming accent-glow might be defined later or use primary-glow
    ghost: "bg-transparent text-primary hover:bg-primary-glow",
    social: "bg-surface text-text border border-border hover:border-primary hover:shadow-primary-glow"
  };

  const finalClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;