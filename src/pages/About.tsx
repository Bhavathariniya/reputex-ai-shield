
import React from 'react';
import { Shield, Activity, Users, PieChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Blockchain security expert with 10+ years in cybersecurity. Previously led security at major exchanges.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sophia Chen',
    role: 'CTO',
    bio: 'AI researcher and engineer specializing in pattern recognition and anomaly detection systems.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Marcus Taylor',
    role: 'Head of Research',
    bio: 'Former smart contract auditor who has discovered critical vulnerabilities in major DeFi protocols.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jenna Williams',
    role: 'Product Lead',
    bio: 'Blockchain enthusiast with expertise in creating user-friendly security products in the crypto space.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const roadmapItems = [
  {
    quarter: 'Q1 2024',
    title: 'Platform Launch',
    description: 'Initial release with core token analysis and wallet security features.',
    status: 'completed',
  },
  {
    quarter: 'Q2 2024',
    title: 'Advanced AI Models',
    description: 'Improved machine learning algorithms for better scam detection accuracy.',
    status: 'in-progress',
  },
  {
    quarter: 'Q3 2024',
    title: 'Mobile App Release',
    description: 'Native iOS and Android applications with real-time alerts.',
    status: 'upcoming',
  },
  {
    quarter: 'Q4 2024',
    title: 'Enterprise Solutions',
    description: 'Security products tailored for exchanges, wallets, and DeFi protocols.',
    status: 'upcoming',
  },
];

const About: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            About <span className="text-gradient-highlight">ReputeX AI</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're on a mission to make Web3 safer through advanced AI security technology that protects users from scams and malicious actors.
          </p>
        </div>
        
        {/* Our Mission */}
        <div className="glass-panel rounded-xl mb-16 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6">
                ReputeX AI was founded with a clear mission: to make Web3 safer for everyone. In a space filled with innovation and opportunity, we saw the need for stronger security tools that could protect users from the growing threats of scams and fraudulent projects.
              </p>
              <p className="text-gray-300">
                Using advanced artificial intelligence and machine learning, we analyze blockchain data, smart contracts, and social signals to provide real-time risk assessments and security alerts, helping users make informed decisions about their digital assets.
              </p>
            </div>
            <div className="md:w-1/2 bg-reputex-card">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cybersecurity" 
                className="w-full h-full object-cover opacity-75"
              />
            </div>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
            What Makes Us Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-panel rounded-xl border-white/5 hover:border-reputex-highlight/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-reputex-highlight/20 rounded-lg p-3 w-fit mb-4">
                  <Shield className="text-reputex-highlight h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Analysis</h3>
                <p className="text-gray-300 text-sm">
                  Our proprietary AI models are trained on millions of blockchain transactions to detect patterns associated with scams.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-panel rounded-xl border-white/5 hover:border-reputex-highlight/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-reputex-info/20 rounded-lg p-3 w-fit mb-4">
                  <Activity className="text-reputex-info h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Real-Time Protection</h3>
                <p className="text-gray-300 text-sm">
                  Get instant alerts about suspicious activities and potential threats to your digital assets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-panel rounded-xl border-white/5 hover:border-reputex-highlight/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-reputex-safe/20 rounded-lg p-3 w-fit mb-4">
                  <PieChart className="text-reputex-safe h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Comprehensive Reports</h3>
                <p className="text-gray-300 text-sm">
                  Detailed analysis reports with actionable insights about tokens, contracts, and wallets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-panel rounded-xl border-white/5 hover:border-reputex-highlight/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-reputex-warning/20 rounded-lg p-3 w-fit mb-4">
                  <Users className="text-reputex-warning h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Community Insights</h3>
                <p className="text-gray-300 text-sm">
                  Aggregated sentiment analysis from social platforms to capture community knowledge about projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-panel rounded-xl overflow-hidden hover:border-reputex-highlight/30 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-reputex-highlight text-sm mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Roadmap */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
            Our Roadmap
          </h2>
          
          <div className="glass-panel rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`absolute top-0 left-6 bottom-0 w-0.5 ${
                    index === roadmapItems.length - 1 ? 'hidden' : 'block'
                  } ${
                    item.status === 'completed' 
                      ? 'bg-reputex-safe' 
                      : item.status === 'in-progress' 
                        ? 'bg-reputex-warning' 
                        : 'bg-gray-700'
                  }`}></div>
                  
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === 'completed' 
                        ? 'bg-reputex-safe/20 text-reputex-safe border border-reputex-safe' 
                        : item.status === 'in-progress' 
                          ? 'bg-reputex-warning/20 text-reputex-warning border border-reputex-warning animate-pulse-glow' 
                          : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}>
                      {index + 1}
                    </div>
                    
                    <div className="ml-16 -mt-8">
                      <span className={`text-sm font-medium ${
                        item.status === 'completed' 
                          ? 'text-reputex-safe' 
                          : item.status === 'in-progress' 
                            ? 'text-reputex-warning' 
                            : 'text-gray-400'
                      }`}>
                        {item.quarter}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Partners */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
            Our Partners
          </h2>
          
          <div className="glass-panel rounded-xl p-8">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 bg-white/5 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-white">L1X</span>
                </div>
                <span className="text-sm text-gray-300">L1X Exchange</span>
              </div>
              
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 bg-white/5 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-white">WS</span>
                </div>
                <span className="text-sm text-gray-300">Web3 Security Alliance</span>
              </div>
              
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 bg-white/5 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-white">BT</span>
                </div>
                <span className="text-sm text-gray-300">BlockTrust Labs</span>
              </div>
              
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 bg-white/5 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-white">CF</span>
                </div>
                <span className="text-sm text-gray-300">CryptoFund VC</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to Secure Your Web3 Journey?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of users who trust ReputeX AI to protect their digital assets from scams and fraud.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-reputex-highlight hover:bg-reputex-highlight/90 text-white shadow-glow-purple"
          >
            <Link to="/dashboard">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
