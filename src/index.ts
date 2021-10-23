import { Client, Collection } from "discord.js"
import { Logger } from '#structures/Logger'
import { startEventHandler } from "#handlers/event"
import { startCommandHandler } from "#handlers/command"
import type { SlashCommand } from "#types/Command"

declare module "discord.js" {
    interface Client {
        logger: Logger;
        commands: Collection<string, SlashCommand>
    }
}

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.logger = new Logger()

startEventHandler(client)
startCommandHandler(client)

client.login()