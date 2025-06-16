declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_URL: string;
      EXPO_PUBLIC_MERCADOPAGO_PUBLIC_KEY: string;
      EXPO_PUBLIC_GOOGLE_MAPS_API_KEY: string;
      EXPO_PUBLIC_ENVIRONMENT: 'development' | 'staging' | 'production';
    }
  }
}

export {};