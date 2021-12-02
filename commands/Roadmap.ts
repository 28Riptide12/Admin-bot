import {MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Info',
    description: 'Sends Info about the RoadMap',


    slash: 'both',
    testOnly: true,
    

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setTitle('RoadMap')
        .setFooter('Developed by: Riptide12#0065, Co-Developed by:  Bluer_00#0001')
        .setDescription("**What is the Roadmap**/nThe Roadmap is a way that you can track progress of the game, It is updated regularly so you can track progress effectively in real time . It also allows you to see what is being worked on and what will possibly come next to MetroLink.You can even use it to track your suggestion progress or bug fix progress and Update release dates./n/n**Where can i find it**/nYou can find the road map here  /nhttps://bit.ly/MetroLink-Development/n/n/n **Please Note** /nour Developers are often really busy so the roadmap updating will be sometimes delayed, we will try to keep it updated as much as possible so you see when the next update is scheduled to release.")

        return embed
    }
} as ICommand    


