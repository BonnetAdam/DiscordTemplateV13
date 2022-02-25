const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const fs = require('fs');
let commands = [];

module.exports.run = async(client, message, args) => {

    const files = fs.readdirSync("commands").filter(fl => fl.endsWith(".js"))

    files.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../commands/${file}`)
        if(!command || !authorPerms || !command.run || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || command.help.enable !== true || !authorPerms.has(command.help.permission)) return
        commands.push(`**${process.env.PREFIX}${command.help.name}** - ${command.help.description}`)
        //commands.push({[command.help.categories]: {commandName: command.help.name}})
    })

    const embed = new MessageEmbed()
        .setTitle('Help Menu')
        .setColor('AQUA')
        .setDescription(commands.join('\n'))

    message.channel.send({embeds: [embed]})
}

module.exports.help = {
    name: "help",
    description: "help command",
    permission: "SEND_MESSAGES",
    enable: true
};