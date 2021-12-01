import { MessageEmbed } from "discord.js";
import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Kicks a user',

    permissions: ['KICK_MEMBERS'],
    
    slash: 'both',
    testonly: true,

    guildOnly: true,

    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],

    callback: ({ message, interaction, args }) => {
        const target = message ? message.mentions.members?.first() 
        : interaction.options.getMember('user') as GuildMember

        if(!target){
            return 'please tag someone to kick'
        }

        if (!target.kickable){
            return 'Cannot kick provided user.'

        }
        
            

        args.shift()
        const reason = args.join('')

        target.kick(reason)

        return  {
            custom: true,
            content: `You Kicked <@${target.id}>`,
            ephemeral: true,
        } 

    },

}as ICommand