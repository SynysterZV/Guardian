import type { Event } from '../types/Event'

export const event: Event = {
    name: "messageCreate",
    async exec(message) {
        message.client.logger.info(message.content)
    }
}