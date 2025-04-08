
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const TokenLookupForm = ({ onSearch }) => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!tokenAddress.trim()) {
      setError('Please enter a token address');
      return;
    }
    
    // Simple validation for Ethereum-like address
    if (!/^0x[a-fA-F0-9]{40}$/.test(tokenAddress)) {
      setError('Please enter a valid token address (0x...)');
      return;
    }
    
    setError('');
    onSearch(tokenAddress);
  };

  return (
    <Card className="glass-panel-dark border-white/10 rounded-xl">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="token-address" className="text-sm font-medium text-gray-300">
              Enter Token or Contract Address
            </label>
            <div className="relative">
              <Input
                id="token-address"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                placeholder="0x..."
                className="bg-black/20 border-white/10 pl-10 pr-4 py-2 focus:border-reputex-highlight focus:ring-reputex-highlight/20"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            {error && <p className="text-xs text-reputex-danger mt-1">{error}</p>}
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-reputex-highlight hover:bg-reputex-highlight/90 text-white shadow-md hover:shadow-lg transition-all"
            >
              Analyze Now
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TokenLookupForm;
