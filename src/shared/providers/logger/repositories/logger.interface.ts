export interface ILogger {
  debug?(message: string): void;
  log(message: string): void;
  error(message: string): void;
  warn(message: string): void;
}