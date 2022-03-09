const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')

module.exports.execute = async (message, client, lang) => {
    //Log that the bot is available
    console.log(`[BOT] ${lang.bot.connected} "${client.user.tag}"`)
    //Write the status of the bot
    client.user.setPresence({ activities: [{ name: `${process.env.PREFIX}help - ${process.env.STATUS}` }], status: 'online',});
}

module.exports.help = {
    name: 'ready',
    enable: true
}