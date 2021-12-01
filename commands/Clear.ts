import { ICommand } from "wokcommands";

export default {
    category:'Modration',
    description: 'Deletes multiple messages of a specific amount',

    Permissions: ['MANAGE_MESSAGES'],


    maxArgs: 1,
    expectedArgs: '[amount]',

    slash: 'both',
    testOnly: true,

    callback: async ({ message, interaction, channel, args}) => {
        const amount = args.length ? parseInt(args.shift()!) : 1

        if (message) {
            await message.delete()
        }

        // const {size} = await channel.bulkDelete(amount, true)
        const messages = await channel.messages.fetch({limit: amount})
        const { size } = messages

        messages.forEach((message) => message.delete())


        const reply = `Deleted ${size} message(s).`

        if (interaction){
            return reply
    }
    channel.send(reply)
  }
} as ICommand