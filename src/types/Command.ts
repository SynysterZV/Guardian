import type { 
    ChatInputApplicationCommandData,
    MessageApplicationCommandData,
    UserApplicationCommandData,
    CommandInteraction,
    ContextMenuInteraction,
    ApplicationCommandPermissionData
} from "discord.js";

type ContextMenuItem = MessageApplicationCommandData | UserApplicationCommandData

export interface SlashCommand {
    data: ChatInputApplicationCommandData;
    permissions?: ApplicationCommandPermissionData[];
    execute(interaction: CommandInteraction): Promise<void>;
}

export interface ContextMenuCommand {
    data: ContextMenuItem;
    permissions?: ApplicationCommandPermissionData[];
    execute(interaction: ContextMenuInteraction): Promise<void>
}