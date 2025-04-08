
import React, { useState } from 'react';
import { User, Bell, Settings, Clock, Activity, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PageLayout from '@/components/PageLayout';

const activityHistory = [
  { id: 1, type: 'scan', title: 'Token Security Scan', details: 'Analyzed USDT contract for vulnerabilities', time: '10 min ago' },
  { id: 2, type: 'alert', title: 'High Risk Alert', details: 'Suspicious transaction blocked from unknown contract', time: '2 hours ago' },
  { id: 3, type: 'wallet', title: 'Wallet Connected', details: 'Metamask wallet successfully connected', time: '5 hours ago' },
  { id: 4, type: 'scan', title: 'Portfolio Analysis', details: 'Complete portfolio risk assessment completed', time: '1 day ago' },
  { id: 5, type: 'alert', title: 'Medium Risk Alert', details: 'Unusual token approval request detected', time: '2 days ago' },
];

const Profile: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const [walletAddress] = useState('0x7F9c8F3A8e65D8a69f142f11E842Cb273C4Af00F');
  
  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [browserNotifications, setBrowserNotifications] = useState(true);
  const [riskLevel, setRiskLevel] = useState("all");

  return (
    <PageLayout>
      <div className="py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Profile & Settings</h1>
          <p className="text-gray-400">Manage your account, security settings, and notification preferences</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="glass-panel rounded-xl h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-reputex-highlight" />
                  <span>Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 bg-reputex-highlight/20 rounded-full flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-reputex-highlight" />
                  </div>
                  
                  {isWalletConnected ? (
                    <>
                      <h3 className="text-lg font-semibold text-white">Connected Wallet</h3>
                      <p className="font-mono text-sm text-gray-400 mt-1 mb-2">
                        {walletAddress.slice(0, 8)}...{walletAddress.slice(-6)}
                      </p>
                      <Button 
                        variant="outline" 
                        className="text-sm mt-2"
                        onClick={() => setIsWalletConnected(false)}
                      >
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-white">Wallet Not Connected</h3>
                      <p className="text-sm text-gray-400 mt-1 mb-2">
                        Connect your wallet to access all features
                      </p>
                      <Button 
                        className="bg-reputex-highlight hover:bg-reputex-highlight/90 text-white mt-2"
                        onClick={() => setIsWalletConnected(true)}
                      >
                        Connect Wallet
                      </Button>
                    </>
                  )}
                </div>
                
                <div className="space-y-4 mt-6">
                  <div className="p-3 rounded-lg bg-reputex-info/10 border border-reputex-info/20">
                    <h4 className="text-sm font-medium text-white mb-1 flex items-center gap-1">
                      <Shield className="h-4 w-4" /> Security Status
                    </h4>
                    <p className="text-xs text-reputex-safe">Protected - All security features active</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gray-800/50 border border-white/5">
                    <h4 className="text-sm font-medium text-white mb-1">Account Type</h4>
                    <p className="text-xs text-gray-300">Standard User</p>
                    <Button variant="link" className="text-reputex-highlight text-xs p-0 h-auto mt-1">
                      Upgrade to Premium
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Settings Tabs */}
          <div className="lg:col-span-2">
            <Card className="glass-panel rounded-xl">
              <CardHeader className="pb-2">
                <Tabs defaultValue="notifications">
                  <TabsList className="grid grid-cols-2 bg-gray-800/70">
                    <TabsTrigger value="notifications" className="flex items-center gap-1">
                      <Bell className="h-4 w-4" /> Notifications
                    </TabsTrigger>
                    <TabsTrigger value="activity" className="flex items-center gap-1">
                      <Activity className="h-4 w-4" /> Activity
                    </TabsTrigger>
                  </TabsList>
                
                  <TabsContent value="notifications" className="pt-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Notification Settings</h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-white">Email Notifications</h4>
                            <p className="text-xs text-gray-400">Receive security alerts via email</p>
                          </div>
                          <Switch 
                            checked={emailNotifications} 
                            onCheckedChange={setEmailNotifications} 
                            className="data-[state=checked]:bg-reputex-highlight"
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-white">Browser Notifications</h4>
                            <p className="text-xs text-gray-400">Receive alerts in your browser</p>
                          </div>
                          <Switch 
                            checked={browserNotifications} 
                            onCheckedChange={setBrowserNotifications} 
                            className="data-[state=checked]:bg-reputex-highlight"
                          />
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t border-white/5">
                        <h4 className="text-sm font-medium text-white mb-2">Alert Risk Level</h4>
                        <p className="text-xs text-gray-400 mb-3">Select which risk levels to receive alerts for</p>
                        
                        <RadioGroup value={riskLevel} onValueChange={setRiskLevel} className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="high" className="border-reputex-danger text-reputex-danger" />
                            <label htmlFor="high" className="text-sm font-medium cursor-pointer">
                              High Risk Only
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="medium" id="medium" className="border-reputex-warning text-reputex-warning" />
                            <label htmlFor="medium" className="text-sm font-medium cursor-pointer">
                              Medium & High
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="all" className="border-reputex-info text-reputex-info" />
                            <label htmlFor="all" className="text-sm font-medium cursor-pointer">
                              All Alerts
                            </label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="bg-reputex-highlight hover:bg-reputex-highlight/90">
                          Save Settings
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="activity" className="pt-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                    
                    <div className="space-y-4">
                      {activityHistory.map((activity) => (
                        <div 
                          key={activity.id} 
                          className="p-3 rounded-lg bg-gray-800/30 border border-white/5 flex gap-3"
                        >
                          <div className={`p-2 rounded-full h-fit ${
                            activity.type === 'scan' 
                              ? 'bg-reputex-info/20 text-reputex-info' 
                              : activity.type === 'alert'
                                ? 'bg-reputex-warning/20 text-reputex-warning'
                                : 'bg-reputex-highlight/20 text-reputex-highlight'
                          }`}>
                            {activity.type === 'scan' && <Shield size={16} />}
                            {activity.type === 'alert' && <Bell size={16} />}
                            {activity.type === 'wallet' && <User size={16} />}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="text-sm font-medium text-white">{activity.title}</h4>
                              <span className="text-xs text-gray-400 flex items-center gap-1">
                                <Clock size={12} /> {activity.time}
                              </span>
                            </div>
                            <p className="text-xs text-gray-300 mt-1">{activity.details}</p>
                          </div>
                        </div>
                      ))}
                      
                      <div className="text-center pt-2">
                        <Button variant="outline" className="text-sm">
                          View Full History
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
