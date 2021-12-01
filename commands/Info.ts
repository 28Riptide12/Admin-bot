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
        .setDescription"Admin bot is a multifunction discord bot.\n\ngithub-https://github.com/28Riptide12/Admin-bot \n\nPlease credit me when you use this bot in your discord servers."
        return embed
    }
} as ICommand    


