import pino from 'pino';

export const logger = pino({
  level: 'debug',
  timestamp: pino.stdTimeFunctions.isoTime
});

logger.info('teste', { teste: 'teste' });
logger.error('teste');
logger.warn('teste');
