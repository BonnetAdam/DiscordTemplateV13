const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.channel.send('Everything Work!')
}

module.exports.help = {
    name: "test",
    description: "test command",
    permission: "ADMINISTRATOR",
    enable: true
};