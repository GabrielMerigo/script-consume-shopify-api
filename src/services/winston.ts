import winston from 'winston';
const { combine, timestamp, json } = winston.format;

const logLevels = {
  error: 1, // indicates error conditions that impair some operation but are less severe than critical situations
  warn: 2, // signifies potential issues that may lead to errors or unexpected behavior in the future if not addressed
  info: 3, // includes messages that provide a record of the normal operation of the system
  debug: 4 // intended for logging detailed information about the system for debugging purposes
};

export const logger = winston.createLogger({
  levels: logLevels,
  level: 'info',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A' // 2022-01-25 03:23:10.350 PM
    }),
    json()
  ),
  transports: [new winston.transports.Console()]
});

logger.warn('Warning message');
logger.error('Error message', {
  product: {
    title: 'teste'
  }
});
logger.info('Information message');
