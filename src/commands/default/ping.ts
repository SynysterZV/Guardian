import { SlashCommand } from "#types/Command";

export const command: SlashCommand = {
    data: {
        name: "ping",
        description: "pong",
        options: [
            {
                name: "ephemeral",
                description: "Hide?",
                type: "BOOLEAN"
            }
        ]
    },
    async execute(interaction) {
        interaction.reply({ content: 'Pong!', ephemeral: interaction.options.getBoolean("ephemeral") ?? true })
    }
}