const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ready',
    async execute(message, client, lang) {
        console.log(`[BOT] Connected to "${client.user.tag}"`)
    }
}