import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CryptoPortfolio from '@/components/CryptoPortfolio';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return <CryptoPortfolio />;
};

export default Index;
