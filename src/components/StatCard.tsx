
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  iconColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  iconColor = 'text-reputex-highlight',
}) => {
  const getTrendClasses = () => {
    switch (trend) {
      case 'up':
        return 'text-reputex-safe';
      case 'down':
        return 'text-reputex-danger';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <Card className="glass-panel rounded-xl">
      <CardContent className="pt-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
            
            {trend && trendValue && (
              <p className={`text-xs flex items-center gap-1 mt-1 ${getTrendClasses()}`}>
                {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
              </p>
            )}
          </div>
          
          <div className={`p-2 rounded-lg ${iconColor.replace('text-', 'bg-')}/10`}>
            <Icon className={`${iconColor}`} size={20} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
