cconst Discord = require('discord.js')
const client = new Discord.Client({ intents: 32767 });

client.on('ready', () => {
    console.log('Bot is online!')
})

client.on('messageCreate', (message) => {
    const prefix = '!'
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}hello`) {
        message.channel.send('Hello human!')
    }
})

client.login("put your token here")
