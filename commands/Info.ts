import {MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Info',
    description: 'info',


    slash: 'both',
    testOnly: true,
    

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setTitle('INFO')
        .setFooter('Developed by: Riptide12#0065, Co-Developed by:  Bluer_00#0001')
        .setDescription("**__COMING SOON__**")

        return embed
    }
} as ICommand    


