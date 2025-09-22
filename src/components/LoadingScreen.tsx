import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-wallet-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-accent flex items-center justify-center">
          <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Web3 Crypto Wallet</h1>
        <p className="text-muted-foreground text-lg">Loading your portfolio{dots}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;