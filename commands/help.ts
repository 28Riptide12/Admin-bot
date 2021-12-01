
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Info',
    description: 'Sends the command list',


    slash: 'both',
    testOnly: true,
    

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setTitle('Metrolink Bot Commands')
        .setDescription("⚙️ General \n\n>help : shows a list of all commands\n\n>ping : responds with pong\n\n>info: Shows information about the game version\n\n>Version: Tells you the  current game\n\n:wrench: Modderater commands (Coming soon)\n(requires certain permissions)\n\n>ban [member]\nBans a member from the server\n\n>tempban [member] [duration] [reason]\nTemporarily bans a member from the server(broken)\n\n>clear [amount]\nClears messages in a particular channel\n\n>mute [member] [reason]\nMutes a member in the whole server(broken)\n\n>unban [member]\nUnbans a member\n\n>unmute [member]\nUnmutes a member\n\n>kick [member] [reason]\n Kicks the user provided")

        return embed
    }
} as ICommand    

