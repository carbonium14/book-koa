import log4js from 'log4js'
enum LevelInfo {
  'trace' = 'trace',
  'debug' = 'debug',
  'info' = 'info',
  'warn' = 'warn',
  'error' = 'error',
  'fatal' = 'fatal'
}
class LogUtil {
  static logUtil: LogUtil = new LogUtil()
  logInstance!: log4js.Logger
  private constructor() {
    this.config()
  }
  config() {
    log4js.configure({
      appenders: {
        console: { type: 'console' },
        debug_file: {
          type: 'file',
          filename: 'logs/debug.log'
        }
      },
      categories: {
        default: {
          appenders: ['console', 'debug_file'],
          level: LevelInfo.debug
        },
        info: {
          appenders: ['console'],
          level: LevelInfo.info
        },
        warn: {
          appenders: ['console'],
          level: LevelInfo.warn
        },
        error: {
          appenders: ['console'],
          level: LevelInfo.error
        },
        fatal: {
          appenders: ['console'],
          level: LevelInfo.fatal
        },
      }
    })
  }
  getCategories(level: LevelInfo) {
    this.logInstance = log4js.getLogger(level)
  }
  debug(input: string) {
    this.getCategories(LevelInfo.debug)
    this.logInstance.debug(input)
  }
  info(input: string) {
    this.getCategories(LevelInfo.info)
    this.logInstance.info(input)
  }
  warn(input: string) {
    this.getCategories(LevelInfo.warn)
    this.logInstance.warn(input)
  }
  error(input: string) {
    this.getCategories(LevelInfo.error)
    this.logInstance.error(input)
  }
  fatal(input: string) {
    this.getCategories(LevelInfo.fatal)
    this.logInstance.fatal(input)
  }
}
export default LogUtil.logUtil