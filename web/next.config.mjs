/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

dotenv.config({ path: path.join(__dirname, '../.env.default') });
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const nextConfig = {
    
    experimental: {
        serverActions: {
          allowedOrigins:['web', '*.web', '*.web:3000', 'web:3000','salih-dashboard.com', '*.salih-dashboard.com'],
          allowedForwardedHosts: ['web', '*.web', '*.web:3000', 'web:3000','salih-dashboard.com', '*.salih-dashboard.com'],
        },
      },
};

export default nextConfig;
