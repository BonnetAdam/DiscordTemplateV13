const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, message, args, lang) => {
    message.channel.send(lang.command.everythingWork)
}

module.exports.help = {
    name: "test",
    description: "test command",
    permission: "ADMINISTRATOR",
    enable: true
};