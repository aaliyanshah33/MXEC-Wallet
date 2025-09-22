import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.90431e79fab341ea81f2270e863cabc6',
  appName: 'flutter-crypto-vault',
  webDir: 'dist',
  server: {
    url: 'https://90431e79-fab3-41ea-81f2-270e863cabc6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#1a1b23",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: "#1a1b23"
    }
  }
};

export default config;