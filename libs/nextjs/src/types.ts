import { ILoginResponse, ITenantsResponse } from '@frontegg/rest-api';

export interface AccountEnvironment {
  id: string;
  createdAt: string;
  environment: 'production' | 'development';
}

export interface CustomClaims {
  accountEnvironments: AccountEnvironment[];
}

export interface FronteggNextJSSession {
  accessToken: string;
  refreshToken?: string;
  user: {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    metadata: any;
    roles: string[];
    permissions: string[];
    tenantId: string;
    tenantIds: string[];
    profilePictureUrl: string;
    type: string; // "userToken"
    customClaims: CustomClaims;
    iat: number;
    exp: number;
    aud: string;
    iss: string;
  };
}

export interface AppEnvConfig {
  envAppUrl?: string,
  envBaseUrl?: string,
  envClientId?: string
}

export interface MeAndTenants {
  user?: ILoginResponse;
  tenants?: ITenantsResponse[];
}

declare module 'iron-session' {
  interface IronSessionData {
    accessToken: FronteggNextJSSession['accessToken'];
    user: FronteggNextJSSession['user'];
  }
}

declare global {
  interface ProcessEnv {
    FRONTEGG_BASE_URL: string;
    PORT?: string;
    PWD: string;
  }
}
