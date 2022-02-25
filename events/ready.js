const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ready',
    async execute(message, client) {
        console.log(`Connected to "${client.user.tag}"`)
    }
}