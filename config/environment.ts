import dotenv from 'dotenv';
import { validateEnvironment } from './validateEnvironment';

dotenv.config();

validateEnvironment();

export type Environment = 'qa' | 'staging' | 'production';

const environment = (process.env.TEST_ENV || 'qa') as Environment;

const environments = {
  qa: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    apiBaseUrl: process.env.API_BASE_URL || 'https://www.saucedemo.com/api',
  },

  staging: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    apiBaseUrl: process.env.API_BASE_URL || 'https://www.saucedemo.com/api',
  },

  production: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    apiBaseUrl: process.env.API_BASE_URL || 'https://www.saucedemo.com/api',
  },
};

export const config = {
  environment,

  ...environments[environment],

  credentials: {
    username: process.env.TEST_USERNAME || '',
    password: process.env.TEST_PASSWORD || '',
  },

  api: {
    token: process.env.API_TOKEN || '',
  },
};
