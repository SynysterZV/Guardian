import type { ClientEvents } from "discord.js"

export type Event = {
    [K in keyof ClientEvents]: {
        name: K;
        exec(...args: ClientEvents[K]): Promise<void>;
    }
}[keyof ClientEvents]