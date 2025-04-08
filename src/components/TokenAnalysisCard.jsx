
import React from 'react';
import { Shield, AlertTriangle, Activity, Link } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrustScoreMeter from './TrustScoreMeter';

const TokenAnalysisCard = ({
  tokenAddress,
  tokenName,
  trustScore,
  liquidityStatus,
  socialSentiment,
  aiSummary,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
      case 'Positive':
        return 'text-reputex-safe bg-reputex-safe/10 border-reputex-safe/20';
      case 'Suspicious':
      case 'Neutral':
        return 'text-reputex-warning bg-reputex-warning/10 border-reputex-warning/20';
      case 'Locked':
      case 'Negative':
        return 'text-reputex-danger bg-reputex-danger/10 border-reputex-danger/20';
      default:
        return 'text-reputex-neutral bg-reputex-neutral/10 border-reputex-neutral/20';
    }
  };

  return (
    <Card className="glass-panel rounded-xl overflow-hidden">
      <CardHeader className="border-b border-white/5 pb-3">
        <CardTitle className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield size={18} className={trustScore >= 70 ? 'text-reputex-safe' : 'text-reputex-danger'} />
            <span>{tokenName}</span>
          </div>
          <span className="text-xs text-gray-400 truncate max-w-[150px] md:max-w-none">
            {tokenAddress.slice(0, 6)}...{tokenAddress.slice(-4)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <TrustScoreMeter score={trustScore} size="medium" />
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="text-xs text-gray-400">Liquidity Status</div>
              <div className={`text-sm font-medium px-2 py-1 rounded-full inline-flex items-center gap-1 border ${getStatusColor(liquidityStatus)}`}>
                <Activity size={12} />
                <span>{liquidityStatus}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-xs text-gray-400">Social Sentiment</div>
              <div className={`text-sm font-medium px-2 py-1 rounded-full inline-flex items-center gap-1 border ${getStatusColor(socialSentiment)}`}>
                <Link size={12} />
                <span>{socialSentiment}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-white/5">
            <div className="flex items-start gap-2">
              <AlertTriangle size={16} className="text-reputex-warning mt-0.5" />
              <div>
                <p className="text-sm font-medium mb-1">AI Analysis</p>
                <p className="text-xs text-gray-300">{aiSummary}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenAnalysisCard;
