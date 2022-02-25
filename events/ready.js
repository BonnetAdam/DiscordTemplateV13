const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ready',
    async execute(message, client, lang) {
        console.log(`[BOT] ${lang.bot.connected} "${client.user.tag}"`)
        client.user.setPresence({ activities: [{ name: `${process.env.PREFIX}help - ${process.env.STATUS}` }], status: 'online',});
    }
}