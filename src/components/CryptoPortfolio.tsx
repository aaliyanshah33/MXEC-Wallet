import { TrendingUp, TrendingDown, Plus, Send, ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import btcLogo from '@/assets/btc-logo.png';
import ethLogo from '@/assets/eth-logo.png';
import xrpLogo from '@/assets/xrp-logo.png';
import cgptLogo from '@/assets/cgpt-logo.png';
import solLogo from '@/assets/sol-logo.png';
import adaLogo from '@/assets/ada-logo.png';
import dotLogo from '@/assets/dot-logo.png';

const cryptoData = [
  {
    id: 'cgpt',
    symbol: 'CGPT',
    name: 'ChainGPT',
    amount: '0.23048035',
    value: '234.02',
    change: '-1.09',
    isPositive: false,
    logo: cgptLogo
  },
  {
    id: 'xrp',
    symbol: 'XRP',
    name: 'Ripple',
    amount: '750.0003255',
    value: '2298.07',
    change: '+0.30',
    isPositive: true,
    logo: xrpLogo
  },
  {
    id: 'eth',
    symbol: 'ETH',
    name: 'Ethereum',
    amount: '0.411723',
    value: '1623.41',
    change: '+0.96',
    isPositive: true,
    logo: ethLogo
  },
  {
    id: 'btc',
    symbol: 'BTC',
    name: 'Bitcoin',
    amount: '0.0245',
    value: '2456.78',
    change: '+2.34',
    isPositive: true,
    logo: btcLogo
  },
  {
    id: 'sol',
    symbol: 'SOL',
    name: 'Solana',
    amount: '12.45',
    value: '1876.32',
    change: '-0.45',
    isPositive: false,
    logo: solLogo
  },
  {
    id: 'ada',
    symbol: 'ADA',
    name: 'Cardano',
    amount: '834.67',
    value: '567.89',
    change: '+1.23',
    isPositive: true,
    logo: adaLogo
  },
  {
    id: 'dot',
    symbol: 'DOT',
    name: 'Polkadot',
    amount: '45.23',
    value: '892.34',
    change: '+0.67',
    isPositive: true,
    logo: dotLogo
  }
];

const CryptoPortfolio = () => {
  const totalValue = '6,552.02';
  const btcEquivalent = '0.0000086';
  const todaysPnl = '-0.00020743';
  const todaysPnlPercent = '-0.98';

  return (
    <div className="min-h-screen bg-wallet-bg text-foreground overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
        <h1 className="text-xl sm:text-2xl font-bold">Overview</h1>
        <div className="flex items-center gap-3 sm:gap-4">
          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-muted rounded grid grid-cols-2 gap-0.5 p-1">
            <div className="bg-foreground rounded-sm"></div>
            <div className="bg-foreground rounded-sm"></div>
            <div className="bg-foreground rounded-sm"></div>
            <div className="bg-foreground rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Portfolio Value */}
      <div className="p-4 sm:p-6 pb-20 sm:pb-24">
        <div className="mb-2">
          <span className="text-muted-foreground text-sm">Est. Total Value</span>
        </div>
        <div className="mb-2">
          <span className="text-3xl sm:text-4xl font-bold">{totalValue}</span>
          <span className="text-muted-foreground ml-2 text-sm sm:text-base">USDT</span>
        </div>
        <div className="mb-4 sm:mb-6">
          <span className="text-muted-foreground text-sm">≈BTC {btcEquivalent}</span>
        </div>
        <div className="mb-6">
          <span className="text-crypto-negative text-sm">Today's PNL {todaysPnl} USDT ({todaysPnlPercent}%)</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 sm:px-8 whitespace-nowrap">
            <Plus className="w-4 h-4 mr-2" />
            Add Funds
          </Button>
          <Button variant="outline" className="rounded-full px-6 sm:px-8 border-border hover:bg-wallet-surface whitespace-nowrap">
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
          <Button variant="outline" className="rounded-full px-6 sm:px-8 border-border hover:bg-wallet-surface whitespace-nowrap">
            <ArrowLeftRight className="w-4 h-4 mr-2" />
            Transfer
          </Button>
        </div>

        {/* Crypto Section */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold">Crypto</h2>
        </div>

        {/* Crypto List */}
        <div className="space-y-3 sm:space-y-4">
          {cryptoData.map((crypto) => (
            <Card key={crypto.id} className="bg-wallet-card border-border p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={crypto.logo} 
                      alt={`${crypto.symbol} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm sm:text-base">{crypto.symbol}</div>
                    <div className="text-muted-foreground text-xs sm:text-sm truncate">{crypto.name}</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="font-semibold text-sm sm:text-base">{crypto.amount}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{crypto.value} USDT</div>
                  <div className={`text-xs sm:text-sm flex items-center gap-1 justify-end ${
                    crypto.isPositive ? 'text-crypto-positive' : 'text-crypto-negative'
                  }`}>
                    {crypto.isPositive ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {crypto.change} USDT ({crypto.change}%)
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-3 sm:mt-4">
                <Button size="sm" variant="outline" className="flex-1 rounded-full border-border hover:bg-wallet-surface text-xs sm:text-sm">
                  Earn
                </Button>
                <Button size="sm" variant="outline" className="flex-1 rounded-full border-border hover:bg-wallet-surface text-xs sm:text-sm">
                  Trade
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-wallet-card border-t border-border safe-area-bottom">
        <div className="flex items-center justify-around py-2 sm:py-3 px-2">
          <div className="flex flex-col items-center gap-1 text-foreground min-w-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-foreground rounded flex-shrink-0"></div>
            <span className="text-xs font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-muted-foreground min-w-0">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="text-xs">Markets</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-muted-foreground min-w-0">
            <ArrowLeftRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="text-xs">Trade</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-muted-foreground min-w-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-current rounded flex-shrink-0"></div>
            <span className="text-xs">Futures</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-muted-foreground min-w-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-current rounded"></div>
            </div>
            <span className="text-xs">Assets</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPortfolio;