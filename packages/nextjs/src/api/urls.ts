import { fronteggRefreshTokenUrl } from '@frontegg/rest-api';
import config from '../config';

export const ApiUrls = {
  WellKnown: {
    jwks: `/.well-known/jwks.json`,
  },
  refreshToken: {
    embedded: `/frontegg/${fronteggRefreshTokenUrl}`,
    hosted: `/frontegg/oauth/token`,
  },
};

interface BuildRouteResult {
  asPath: string;
  asUrl: URL;
}

export const buildLoginRoute = (redirectUrl: string): BuildRouteResult => {
  const asPath = `/account/login?redirectUrl=${encodeURIComponent(redirectUrl)}`;
  const asUrl = new URL(asPath, config.appUrl);
  return {
    asPath,
    asUrl,
  };
};
