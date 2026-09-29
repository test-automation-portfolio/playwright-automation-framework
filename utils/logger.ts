enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

function formatMessage(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();

  return `[${timestamp}] [${level}] ${message}`;
}

export const logger = {
  info(message: string): void {
    console.log(formatMessage(LogLevel.INFO, message));
  },

  warn(message: string): void {
    console.warn(formatMessage(LogLevel.WARN, message));
  },

  error(message: string): void {
    console.error(formatMessage(LogLevel.ERROR, message));
  },
};
