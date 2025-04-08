
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface AlertCardProps {
  title: string;
  description: string;
  timestamp: string;
  severity: 'high' | 'medium' | 'low';
}

const AlertCard: React.FC<AlertCardProps> = ({
  title,
  description,
  timestamp,
  severity,
}) => {
  const getSeverityColor = () => {
    switch (severity) {
      case 'high':
        return 'border-reputex-danger/30 bg-reputex-danger/5';
      case 'medium':
        return 'border-reputex-warning/30 bg-reputex-warning/5';
      case 'low':
        return 'border-reputex-info/30 bg-reputex-info/5';
      default:
        return 'border-gray-700 bg-gray-800/30';
    }
  };

  const getSeverityIconColor = () => {
    switch (severity) {
      case 'high':
        return 'text-reputex-danger';
      case 'medium':
        return 'text-reputex-warning';
      case 'low':
        return 'text-reputex-info';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <Card className={`rounded-lg border ${getSeverityColor()}`}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className={`p-2 rounded-full ${getSeverityIconColor()} bg-black/20 h-fit`}>
            <AlertTriangle size={16} />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-white">{title}</h3>
              <span className="text-xs text-gray-400">{timestamp}</span>
            </div>
            
            <p className="mt-1 text-sm text-gray-300">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertCard;
