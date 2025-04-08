
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', variant = 'full' }) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl md:text-3xl',
  };

  return (
    <Link to="/" className="inline-flex items-center gap-2 shrink-0">
      <Shield className={`text-reputex-highlight ${size === 'large' ? 'w-8 h-8' : size === 'medium' ? 'w-6 h-6' : 'w-5 h-5'}`} />
      {variant === 'full' && (
        <span className={`font-display font-bold ${sizeClasses[size]}`}>
          <span className="text-gradient-highlight">Repute</span>
          <span className="text-white">X</span>
          <span className="text-reputex-info text-sm ml-1">AI</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
