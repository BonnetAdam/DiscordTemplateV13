const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

module.exports.execute = async(client, message, args, lang) => {
    message.channel.send(lang.command.everythingWork)
}

module.exports.help = {
    name: "test", //Name of the commands
    description: "test command", //Description of the commands
    permission: "ADMINISTRATOR", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};