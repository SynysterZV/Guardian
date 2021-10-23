import { join } from "path"
import { toUp, plural } from "#util/formatters"
import glob from "glob"
import { Collection } from "discord.js"

import type { Client } from "discord.js"
import type { SlashCommand } from "#types/Command"

export async function startCommandHandler(client: Client): Promise<void> {
    
    client.commands = new Collection()

    const files = glob.sync(
        join('dist', 'commands', '**', '*.js'),
        { absolute: true }
    )

    files.forEach(file => {
        import(file)
        .then(({ command }: { command: SlashCommand }) => {
            if(client.commands.get(command.data.name)) {
                throw new Error(`Duplicate command: ${command.data.name}`)
            }
            client.commands.set(command.data.name, command)
        })
    })

    client.once("ready", () => {
        const commands = client.commands.map(x => x.data)
        const guild = client.guilds.cache.get('806550877439131660')
        if(!guild) return
        guild.commands.set(commands)
    })
    
    client.logger.info(`${files.length} ${plural('command', files.length)} loaded!`)
}