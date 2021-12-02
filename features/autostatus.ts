import { Client} from "discord.js";

export default (client: Client) => {
    const statusOptions =[
        
        'watching the mods :D',
        'Baydell County | >help',
        'BOT STILL IN DEVELOPMENT'
    ]
    let counter = 0

    const updateStatus = () => {
        client.user?.setPresence({
            status: 'online',
            activities: [
            {
                name: statusOptions[counter]
            }
        ]
        })
        //makes it go through all options
         if (++counter >= statusOptions.length ) {
             counter = 0
         }
        setTimeout(updateStatus, 1000 * 60 * 2 ) 
        // time between change (i set default 2 minutes )
    }
    updateStatus()
}

export const config = {
    dbName: 'AUTO_STATUS',
    displayName: 'Status Changer'

} 