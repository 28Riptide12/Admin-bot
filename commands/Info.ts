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
        .setDescription("**MetroLink's Links and information**\n\n:railway_track:  -**Metrolink Roadmap** https://bit.ly/MetroLink-Development \n\n:envelope:- **Discord Invite** https://discord.gg/wfzZGE7nkh\n\n:bird:-**MetroLink twitter** https://twitter.com/link_metro\n\n:metro:-**Join the group** https://www.roblox.com/groups/6117208/National-City-Transport-Systems#!/about\n\n:video_game:-**play**  https://www.roblox.com/games/5617393787/Metrolink-Pre-Alpha\n\n\n**__Signal meanings__ :vertical_traffic_light:** \n\n:red_circle: - **Red Means: Danger, Stop**\n\n:orange_circle: - **Amber means: Slow down, proceed at caution** \n\n:green_circle: -  **Green means: It is clear to proceed at the current speed limit **\n\n\n**__About__**\n\n**Backstory**\nMetroLink was founded around 2 years ago by Jayrules under the group name National City Transport, He then stopped working on the project, until in a call with Head Developer Riptide, they decided to start the project over again. Then they gathered a team to help along with the project. Development continued from there  leading to the game it is now.We hope to bring to you a game which you will hopefully enjoy and make a growing community.\n\n**Meet Our Team**\n\n<@319036789970960386> - Managing director /  Founder\n\n<@504666813913628682> - Head Developer\n\n<@845366534485835786> - Developer(Programmer) \n\n<@699348362037690478> - Developer (Builder)\n\n<@771668932821647381> - Developer (Builder/Visual designer)\n\n<@791958894381236234> - Developer (Builder)\n\n<@790133007074852884> - Server Admin\n\n**What is MetroLink?**\nMetroLink is a United Kingdom based train and bus transport simulator game. You can use one of many vehicles to travel the ever expanding map and complete routes to earn points!\n\nTake to the railway in a huge range of trains; Underground, freight, express and more, big and small, short and tall, and explore the citys and towns to see all of the stunning countryside and the stunning citys and landmarks")

        return embed
    }
} as ICommand    


