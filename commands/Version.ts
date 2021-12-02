import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Misc',
    description: 'says the current Game version',


    slash: 'both',
    testOnly: true,
    

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setTitle('Game Version')
        .setFooter('Developed by: Riptide12#0065, Co-Developed by:  Bluer_00#0001')
        .setDescription("**The current Game version:**  V1.1/n/n**Next Game Version:**  V1.2/n/n**Release Date:** TBD")

        return embed
    }
} as ICommand    
