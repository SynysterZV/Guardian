import { Client } from "discord.js"
import { Logger } from '#structures/Logger'
import { startEventHandler } from "#handlers/event"

declare module "discord.js" {
    interface Client {
        logger: Logger
    }
}

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.logger = new Logger()

startEventHandler(client)

client.login()