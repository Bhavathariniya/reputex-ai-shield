
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, PieChart, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageLayout from '@/components/PageLayout';
import Logo from '@/components/Logo';

const features = [
  {
    icon: Shield,
    title: 'AI-Powered Scam Detection',
    description: 'Our advanced AI algorithms analyze blockchain data to detect potential scams and malicious actors in real-time.',
  },
  {
    icon: Activity,
    title: 'Trust Score Analysis',
    description: 'Each token and wallet receives a comprehensive trust score based on multiple security and risk factors.',
  },
  {
    icon: PieChart,
    title: 'Real-Time Risk Assessment',
    description: 'Monitor liquidity, social sentiment, and contract vulnerabilities with continuous real-time updates.',
  },
  {
    icon: AlertTriangle,
    title: 'Scam Alerts & Notifications',
    description: 'Receive instant alerts about suspicious activities and potential threats to your assets.',
  },
];

const LandingPage: React.FC = () => {
  return (
    <PageLayout fullWidth>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-reputex-background bg-[radial-gradient(circle_at_30%_40%,rgba(155,135,245,0.1),transparent),radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.08),transparent)]"></div>
        <div className="container px-4 py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in">
              <div className="inline-block">
                <Logo size="large" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
                Web3's AI-Powered <span className="text-gradient-highlight">Reputation Shield</span>
              </h1>
              
              <p className="text-lg text-gray-300 max-w-xl">
                Protect yourself from scams and malicious actors in the blockchain space with our advanced AI-powered security platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-reputex-highlight hover:bg-reputex-highlight/90 text-white shadow-glow-purple"
                >
                  <Link to="/dashboard">Connect Wallet to Get Started</Link>
                </Button>
                
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-white/10 hover:bg-white/5"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-reputex-highlight/20 to-reputex-info/10 blur-3xl"></div>
                <div className="glass-panel rounded-2xl shadow-2xl relative overflow-hidden animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Dashboard Preview" 
                    className="rounded-xl w-full h-auto opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-reputex-card/50 border-y border-white/5">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Cutting-Edge Security Features
            </h2>
            <p className="text-gray-300">
              Our platform provides comprehensive protection against Web3 threats through innovative AI-powered tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 hover:border-reputex-highlight/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-reputex-highlight/20 rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="text-reputex-highlight h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="glass-panel-dark rounded-2xl overflow-hidden">
            <div className="relative px-6 py-12 md:p-12 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-reputex-highlight/10 to-reputex-info/5"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                    Ready to Protect Your Web3 Assets?
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Connect your wallet now and start leveraging our AI-powered security platform to safeguard your investments.
                  </p>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-reputex-highlight hover:bg-reputex-highlight/90 text-white"
                  >
                    <Link to="/dashboard">Get Started Now</Link>
                  </Button>
                </div>
                
                <div className="flex flex-col items-center lg:items-end space-y-3">
                  <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                    <div className="w-3 h-3 rounded-full bg-reputex-safe animate-pulse-glow"></div>
                    <span className="text-sm font-medium">3,457 Active Users</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                    <div className="w-3 h-3 rounded-full bg-reputex-danger animate-pulse-glow"></div>
                    <span className="text-sm font-medium">842 Scams Detected Today</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                    <div className="w-3 h-3 rounded-full bg-reputex-info animate-pulse-glow"></div>
                    <span className="text-sm font-medium">$12.5M Value Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LandingPage;
