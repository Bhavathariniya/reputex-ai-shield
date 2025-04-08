
import React, { useState } from 'react';
import { Shield, AlertTriangle, Activity, PieChart } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import TokenLookupForm from '@/components/TokenLookupForm';
import TokenAnalysisCard from '@/components/TokenAnalysisCard';
import StatCard from '@/components/StatCard';
import AlertCard from '@/components/AlertCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock data
const mockTokenData = {
  tokenAddress: '0x1234567890abcdef1234567890abcdef12345678',
  tokenName: 'REPX Token',
  trustScore: 85,
  liquidityStatus: 'Available' as const,
  socialSentiment: 'Positive' as const,
  aiSummary: 'This token appears to be safe based on contract analysis, liquidity metrics, and community sentiment. No suspicious patterns detected.'
};

const mockAlerts = [
  {
    id: 1,
    title: 'Potential Phishing Attempt Detected',
    description: 'Suspicious contract interaction attempting to drain wallet. Transaction blocked.',
    timestamp: '10 min ago',
    severity: 'high' as const
  },
  {
    id: 2,
    title: 'Unusual Token Transfer Activity',
    description: 'Large amounts of tokens being moved to unverified addresses.',
    timestamp: '2h ago',
    severity: 'medium' as const
  },
  {
    id: 3,
    title: 'New Contract Approval Request',
    description: 'A new dApp is requesting approval to spend your USDT.',
    timestamp: '5h ago',
    severity: 'low' as const
  }
];

const mockScams = [
  {
    id: 1,
    title: 'TerraXYZ Fake Airdrop',
    description: 'Fraudulent airdrop campaign attempting to steal user private keys.',
    timestamp: '2h ago',
    severity: 'high' as const
  },
  {
    id: 2,
    title: 'MetaMoon Token Honeypot',
    description: 'Contract prevents selling, classic honeypot scheme.',
    timestamp: '6h ago',
    severity: 'high' as const
  }
];

const Dashboard: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<typeof mockTokenData | null>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleTokenSearch = (address: string) => {
    // Simulating API call with mock data
    setTimeout(() => {
      setAnalysisResult({
        ...mockTokenData,
        tokenAddress: address,
        tokenName: address === '0x1234567890abcdef1234567890abcdef12345678' ? 'REPX Token' : 'Unknown Token',
      });
    }, 1000);
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  return (
    <PageLayout>
      <div className="py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Security Dashboard</h1>
          <p className="text-gray-400">Monitor and analyze Web3 security risks in real-time</p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Trust Score" 
            value="85/100" 
            icon={Shield} 
            trend="up" 
            trendValue="+5 this week" 
            iconColor="text-reputex-safe"
          />
          <StatCard 
            title="Alerts" 
            value="3" 
            icon={AlertTriangle} 
            trend="down" 
            trendValue="-2 from yesterday" 
            iconColor="text-reputex-warning"
          />
          <StatCard 
            title="Transactions" 
            value="27" 
            icon={Activity} 
            iconColor="text-reputex-info"
          />
          <StatCard 
            title="Risk Level" 
            value="Low" 
            icon={PieChart} 
            iconColor="text-reputex-safe"
          />
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Token Analysis */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold mb-4 text-white">Token Security Analysis</h2>
              
              {!isWalletConnected ? (
                <div className="text-center py-8">
                  <p className="text-gray-300 mb-4">Connect your wallet to analyze tokens and contracts</p>
                  <Button onClick={handleConnectWallet} className="bg-reputex-highlight hover:bg-reputex-highlight/90">
                    Connect Wallet
                  </Button>
                </div>
              ) : (
                <>
                  <TokenLookupForm onSearch={handleTokenSearch} />
                  
                  {analysisResult && (
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white mb-3">Analysis Results</h3>
                      <TokenAnalysisCard {...analysisResult} />
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Tabs for Alerts and Scams */}
            <div className="glass-panel rounded-xl p-6">
              <Tabs defaultValue="alerts">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-display font-semibold text-white">Security Alerts</h2>
                  <TabsList className="bg-gray-800">
                    <TabsTrigger value="alerts">Your Alerts</TabsTrigger>
                    <TabsTrigger value="scams">Recent Scams</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="alerts" className="space-y-4 mt-2">
                  {mockAlerts.map(alert => (
                    <AlertCard key={alert.id} {...alert} />
                  ))}
                  
                  <div className="text-center pt-2">
                    <Button variant="link" className="text-reputex-highlight hover:text-reputex-highlight/80">
                      View All Alerts
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="scams" className="space-y-4 mt-2">
                  {mockScams.map(scam => (
                    <AlertCard key={scam.id} {...scam} />
                  ))}
                  
                  <div className="text-center pt-2">
                    <Button variant="link" className="text-reputex-highlight hover:text-reputex-highlight/80">
                      View More Scams
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right Column: Quick Actions and Resources */}
          <div className="space-y-6">
            <div className="glass-panel rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold mb-4 text-white">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Shield className="mr-2 h-4 w-4" /> Scan Connected Wallets
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="mr-2 h-4 w-4" /> Review Contract Approvals
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Activity className="mr-2 h-4 w-4" /> Review Transaction History
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <PieChart className="mr-2 h-4 w-4" /> Generate Portfolio Risk Report
                </Button>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold mb-4 text-white">Security Tips</h2>
              
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-reputex-safe/10 border border-reputex-safe/20">
                  <p className="text-sm font-medium text-white mb-1">Always verify contract addresses</p>
                  <p className="text-xs text-gray-300">Double-check contract addresses against official sources before interacting.</p>
                </div>
                
                <div className="p-3 rounded-lg bg-reputex-warning/10 border border-reputex-warning/20">
                  <p className="text-sm font-medium text-white mb-1">Review approval limits</p>
                  <p className="text-xs text-gray-300">Only approve the exact amount needed for transactions, not unlimited amounts.</p>
                </div>
                
                <div className="p-3 rounded-lg bg-reputex-info/10 border border-reputex-info/20">
                  <p className="text-sm font-medium text-white mb-1">Use hardware wallets</p>
                  <p className="text-xs text-gray-300">For large holdings, use hardware wallets to keep private keys offline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
