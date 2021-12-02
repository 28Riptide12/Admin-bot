import {MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Info',
    description: 'Sends the rules list',


    slash: 'both',
    testOnly: true,
    Permission: ['ADMINISTRATOR'],

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('SERVER RULES')
        .setFooter('Developed by: Riptide12#0065, Co-Developed by:  Bluer_00#0001')
        .setDescription("**Discord Rules** \n**1.**Be Respectful!\n**2.**No Abuse\n**3.**No Advertisement \n**4.**Don't Ask For Mod!\n**5.**Please try to chat/speak in English as much as possible. This is to prevent any abusive language\n**6.**Put everything in the designated chat. \n**7.**Don't spam random things or argue with one another.\n**8.**Do not put any 'aids' in the General chat as it is a chill area, mainly for newcomers, but we wish them to feel welcome.\n**9.**Nothing offensive!\n**10.**No Racism, Sexism or Homophobia. THEY ARE AN INSTANT BAN!\n**11.**Do not @ somebody too many times. This falls under the spam rule. \n**12.**Respect the owner and the mods as well as each other. This falls under rule 1 + 2. \n**13.**Any personal issues in life can be discussed with the mods. We're all here to support you.\n**14.**Please refrain from insulting someone or threatening someone, in any way or circumstance. This falls under rule 2, 9 and 12.\n**15.**Do not @ mod too much unless you are in a conversation with them ! It gets annoying.\n**16.**Any Scamming results in an INSTANT BAN! This extends to Scamming Scammers.\n**17.**Anyone impersonating an Admin will get an INSTANT BAN.\n**18.**All mods regardless of type (moderator etc) should be treated with respect, all the mods are here to help so abuse, racism and a lack of respect will not be tolerated at all\n**19.**Selling anything for real money is against the rules, you will get banned.\n**20.**Do not hassle staff about roles or bully staff into giving people roles\n**21.**Do not use a script, bot, auto-typer\n**22.**Do Not @everyone,@here or @Verified \n**23.**anything about the staff team,that is offensive or inappropriate is not permitted\n\n**Game Rules** \n\n**1** Do Not Step On the Tracks\n**2** Follow the speed limits\n**3** Don't mess around in public servers\n**4** Be respectful to other players \n**5** If you find a bug that can effect gameplay, Please Report it as soon as possible\n**6** Do not use bugs to gain a advantage\n**7** Hacking is permitted and will result in a game ban\n**8** do not stand on the crossing while the signal is red\n**9** you must abide by the signals (Signal meanings can be found here <#903758953731747852> )\n**10** when entering a station you must not be going more than the speed limit of the area\n\n**How to gain accesses to the server?**\nVisit https://rover.link/verify and follow the instructions. Then, say !verify in <#904859755015729192>\n\n1) Log into your discord on https://rover.link/verify\n2)select all 6 options \n3)Enter your Roblox Username \n4)pick either verify by game or verify by code\n\n**Verify by game**\n1) click the verify by game option \n2) join the game \n\n**verify by code** \n1)click verify by code \n2) paste the code provided into your account about section\n\n(**DO NOT** post/share the code any where else except your about page )")

        message.channel.send({ embeds: [embed] });
    }
} as ICommand     