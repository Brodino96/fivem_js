import { LoggerClass, LogLevel } from "../shared/logger"
import { triggerServerCallback } from "@communityox/ox_lib/client"
import type { Initializer } from "../shared/types"

async function init() {
    const response: Initializer | void = await triggerServerCallback(`${GetCurrentResourceName()}:init`, null)
    if (!response || !response.logLevel || !response.locale) return
    const logger = new LoggerClass(response.logLevel)
    logger.debug("This is the client!")
    logger.debug("Current log level: ", response.logLevel)
    logger.debug("Current locale: ", response.locale)
}

init()