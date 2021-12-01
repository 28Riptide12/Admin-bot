//imports
import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import { DisTube } from 'distube'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()



//intents
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
})

client.on('ready', () => {
    new WOKCommands (client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: [''],
        mongoUri: process.env.MONGO_URI,
        botOwners: [''],
        
    })

    .setDefaultPrefix('>') // prefix
    

    
})

//bot login
client.login(process.env.TOKEN)


//run - ts-node index.ts or npm run dev