import { Injectable, Logger } from '@nestjs/common';

import { ILogger } from './repositories/logger.interface';

@Injectable()
export class LoggerProvider
  extends Logger
  implements ILogger {
  log(message: string) {
    super.log(
      `${message}`
    )
  }

  error(message: string) {
    super.error(
      `${message}`
    )
  }

  warn(message: string) {
    super.warn(
      `${message}`
    )
  }

}