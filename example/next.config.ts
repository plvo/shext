import { exec } from 'child_process';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log('isServer true');
      exec('ts-node scripts/generate-registry.ts', (error) => {
        if (error) {
          console.error('Erreur lors de la génération du registre:', error);
        }
      });
    }

    return config;
  },
};

export default nextConfig;
