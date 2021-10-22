import { join } from "path"
import { toUp, plural } from "#util/formatters"
import glob from "glob"

import type { Client } from "discord.js"

export async function startEventHandler(client: Client): Promise<void> {
    const files = glob.sync(
        join('dist', 'events', '**', '*.js'),
        { absolute: true }
    )

    files.forEach(x => {
        import(x).then(({ event }) => {
            client.on(event.name, event.exec)
            client.logger.info(`${toUp(event.name)} event loaded!`)
        })
    })
    
    client.logger.info(`${files.length} ${plural('event', files.length)} loaded!`)
}