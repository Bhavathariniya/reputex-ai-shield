
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface TrustScoreMeterProps {
  score: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  className?: string;
}

const TrustScoreMeter: React.FC<TrustScoreMeterProps> = ({
  score,
  size = 'medium',
  showLabel = true,
  className = '',
}) => {
  // Determine color based on score
  const getColor = () => {
    if (score >= 70) return 'bg-reputex-safe shadow-glow-green';
    if (score >= 40) return 'bg-reputex-warning shadow-glow-red';
    return 'bg-reputex-danger shadow-glow-red';
  };

  const getRiskLevel = () => {
    if (score >= 70) return { text: 'Low Risk', color: 'text-reputex-safe glow-text-green' };
    if (score >= 40) return { text: 'Medium Risk', color: 'text-reputex-warning' };
    return { text: 'High Risk', color: 'text-reputex-danger glow-text-red' };
  };

  const sizeClasses = {
    small: 'h-1.5',
    medium: 'h-2',
    large: 'h-3',
  };

  const risk = getRiskLevel();

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1 items-center">
          <span className="text-sm font-medium text-gray-300">Trust Score</span>
          <span className={`text-sm font-bold ${risk.color}`}>{risk.text}</span>
        </div>
      )}
      <div className="relative">
        <Progress 
          value={score} 
          className={`${sizeClasses[size]} bg-gray-700`}
          indicatorClassName={getColor()}
        />
        {showLabel && (
          <div className="mt-1 text-right">
            <span className="text-sm font-bold text-white">{score}/100</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustScoreMeter;
