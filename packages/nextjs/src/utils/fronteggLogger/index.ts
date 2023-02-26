import Logger from 'pino';
import sdkVersion from '../../sdkVersion';
import nextjsPkg from 'next/package.json';
import { LEVELS } from './constants';

/**
 * @see [enabling-debug-logging](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)
 * in GitHub actions in failed tests for more debugging logs
 */
const isGithubRunnerDebugMode =
  process.env.ACTIONS_STEP_DEBUG === 'true' || process.env.ACTIONS_RUNNER_DEBUG === 'true';

const fronteggLogger = Logger({
  level: isGithubRunnerDebugMode ? 'debug' : process.env.FRONTEGG_LOG_LEVEL ?? 'warn',
});

fronteggLogger.debug(`Frontegg Next.js Wrapper (${sdkVersion.version}), Next.js version (${nextjsPkg.version})`);
export default fronteggLogger;
