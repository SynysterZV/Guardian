import { Event } from "#types/Event";

export const event: Event = {
    name: "interactionCreate",
    async exec(interaction) {
        if(interaction.isCommand()) {
            const cmd = interaction.client.commands.get(interaction.commandName)
            if(!cmd) return
            cmd.execute(interaction)
        }
    } 
}