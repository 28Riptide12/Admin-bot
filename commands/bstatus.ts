import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Info',
    description: 'Sends the command list',
    aliases: 'bs',


    slash: 'both',
    testOnly: true,
    

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setTitle('Baydell County Bot Status')
        .setURL ('https://baydellcounty.freshstatus.io/')
        .setDescription(":wrench: Baydell's bots status link is in the title")
        .setFooter('Developed by: Riptide12#0065, Co-Developed by:  Bluer_00#0001')

        return embed
    }
} as ICommand 