import type { Event } from "../types/Event" 
export const event: Event = {
    name: "ready",
    async exec(client) {
        client.logger.info(`Logged in as ${client.user!.tag}!`)
    }
}