import React from 'react';
import { PieChart, BarChart, TrendingUp, AreaChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PageLayout from '@/components/PageLayout';

// Mock data for charts
const trustScoreData = [
  { name: 'Jan', score: 65 },
  { name: 'Feb', score: 59 },
  { name: 'Mar', score: 80 },
  { name: 'Apr', score: 81 },
  { name: 'May', score: 56 },
  { name: 'Jun', score: 55 },
  { name: 'Jul', score: 40 },
  { name: 'Aug', score: 70 },
  { name: 'Sep', score: 90 },
  { name: 'Oct', score: 85 },
  { name: 'Nov', score: 78 },
  { name: 'Dec', score: 82 },
];

const scamCategoryData = [
  { name: 'Rug Pull', value: 35 },
  { name: 'Honeypot', value: 25 },
  { name: 'Phishing', value: 20 },
  { name: 'Fake Presale', value: 15 },
  { name: 'Other', value: 5 },
];

const scamDetectionData = [
  { name: 'Week 1', RugPull: 12, Honeypot: 8, Phishing: 5 },
  { name: 'Week 2', RugPull: 15, Honeypot: 10, Phishing: 8 },
  { name: 'Week 3', RugPull: 9, Honeypot: 12, Phishing: 15 },
  { name: 'Week 4', RugPull: 18, Honeypot: 14, Phishing: 12 },
];

const suspiciousAddresses = [
  { address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', risk: 'High', category: 'Rug Pull', date: '2023-11-25' },
  { address: '0x123f681646d4a755815f9cb19e1acc8565a0c2ac', risk: 'High', category: 'Phishing', date: '2023-11-24' },
  { address: '0xf89d356b02c06fca8c89ff48e49f2c6fbd8e729a', risk: 'Medium', category: 'Honeypot', date: '2023-11-22' },
  { address: '0x2a32b1734d272be4a4fd0bad6559bcfe9be4a979', risk: 'Medium', category: 'Suspicious Activity', date: '2023-11-20' },
  { address: '0x9f4cda013e354b8fc285bf4b9a60460cee7f7ea9', risk: 'Low', category: 'Unverified Contract', date: '2023-11-18' },
];

const COLORS = ['#F87171', '#F59E0B', '#38BDF8', '#9b87f5', '#8E9196'];

const Analytics: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Security Analytics</h1>
          <p className="text-gray-400">Visualize and analyze security threats and trends</p>
        </div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Trust Score Line Chart */}
          <Card className="glass-panel rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-reputex-info" />
                <span>Trust Score Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trustScoreData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#222', borderColor: '#444' }} 
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ fill: '#9b87f5', r: 6 }}
                      activeDot={{ r: 8, stroke: '#9b87f5', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Scam Categories Pie Chart */}
          <Card className="glass-panel rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-reputex-warning" />
                <span>Scam Categories Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={scamCategoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {scamCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#222', borderColor: '#444' }} 
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Weekly Scam Detection Chart */}
        <Card className="glass-panel rounded-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-reputex-danger" />
              <span>Weekly Scam Detection</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={scamDetectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#222', borderColor: '#444' }} 
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Bar dataKey="RugPull" fill="#F87171" />
                  <Bar dataKey="Honeypot" fill="#F59E0B" />
                  <Bar dataKey="Phishing" fill="#38BDF8" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Suspicious Addresses Table */}
        <Card className="glass-panel rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AreaChart className="h-5 w-5 text-reputex-info" />
              <span>Recently Flagged Addresses</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-sm font-medium text-gray-400">Address</th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-400">Risk Level</th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-400">Category</th>
                    <th className="py-3 px-4 text-sm font-medium text-gray-400">Date Flagged</th>
                  </tr>
                </thead>
                <tbody>
                  {suspiciousAddresses.map((item, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono text-sm">
                        {item.address.slice(0, 6)}...{item.address.slice(-4)}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.risk === 'High' 
                            ? 'bg-reputex-danger/20 text-reputex-danger' 
                            : item.risk === 'Medium'
                              ? 'bg-reputex-warning/20 text-reputex-warning'
                              : 'bg-reputex-info/20 text-reputex-info'
                        }`}>
                          {item.risk}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">{item.category}</td>
                      <td className="py-3 px-4 text-sm text-gray-400">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Analytics;
