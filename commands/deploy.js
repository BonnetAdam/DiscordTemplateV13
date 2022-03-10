const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

module.exports.execute = async(client, message, args, lang) => {
    await require('../deploy-commands')
    message.channel.send('Check your console. To see if there are a error.') 
    
}

module.exports.help = {
    name: "deploy", //Name of the commands
    description: "Used to deploy the slash command", //Description of the commands
    permission: "ADMINISTRATOR", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};