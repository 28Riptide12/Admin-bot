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
        .setDescription("**The current Game version:**  V1.1\n\n**Next Game Version:**  V1.2\n\n**Release Date:** 10th December 2021 (10/12/2021) \n\n**Real Time Updates here**\n https://bit.ly/MetroLink-Development")

        return embed
    }
} as ICommand    
