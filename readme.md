## Installation 

```sh
npm install nodemon 

npm i wokcommands

npm i discord.js dotenv

npm install -g typescript ts-node

npm i moment 

npm i quick.db

```

Install all needed dependencies in order to work.

## Setup 

❗ **permissions**


The best option is go give the bot `Administrator` permissions, but you can do it the hard way and only give the permissions it needs. Required permissions:

- Read & Send Messages ~  If the bot isn't able to read messages or send messages, it doesn't respond to your requests.
- Manage Channels ~ (required) This is needed so the bot is able to create / edit / delete channels.
- Embed Links & Message Attachments ~ (required) 
- Add Reactions ~ (optional)
- Manage Nicknames ~ (Required) This is required so the bot can change a users nickname 


**Starting the bot**

In `.env` fill in the gaps.

This is what you should fill in:

```
TOKEN= <discord bot token>
MONGO_URi= <mongodb url>

```

**Owners and Servers**



```js
client.on('ready', () => {
    new WOKCommands (client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: ['Server ID here'], // Servers where you would like commands to / work
        mongoUri: process.env.MONGO_URI,
        botOwners: ['Bot owner id here'],// ids of the users that a have access to owner only commands
```



**Intents**

Please note that for some commands to work these intents are required and should not be deleted else there will be errors. 

`GUILD_MEMBERS` option must be ticked in the discord developer portal under the bot section. If this option is not ticked you will recieve errors and the bot wont work properly.





```js
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
})
```





  **Prefix**
The default is set to `>` you cange the prefix by changing the code below in `index.ts`

```js
  })

    .setDefaultPrefix('{Prefix here}')
    

    
})
```

**Other Info** 

once you have done all these steps you can now run the bot with

`Npm run dev` 






**Credit information**

Please credit it me if you decide to use this bot.

Github- https://github.com/28Riptide12

