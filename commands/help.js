const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const fs = require('fs');
let commands = [], command = [], slashCommands = [];

module.exports.execute = async(client, message, args, lang) => {

    const CommandsFiles = fs.readdirSync("commands").filter(fl => fl.endsWith(".js"))

    const SlashCommandsFiles = fs.readdirSync("slash").filter(fl => fl.endsWith(".js"))

    CommandsFiles.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../commands/${file}`)
        if(!command || !authorPerms || !command.run || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || !command.help.show || command.help.enable !== true || command.help.show !== true || !authorPerms.has(command.help.permission)) return
        commands.push(`**${process.env.PREFIX}${command.help.name}** - ${command.help.description}`)
    })

    SlashCommandsFiles.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../slash/${file}`)
        if(!command || !authorPerms || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || !command.help.show || command.help.enable !== true || command.help.show !== true ||  !authorPerms.has(command.help.permission)) return
        slashCommands.push(`**/${command.help.name}** - ${command.help.description}`)
    })

    command.push('**Commands**')
    command.push(commands)
    command.push('\n**Slash Commands**')
    command.push(slashCommands)

    const embed = new MessageEmbed()
        .setTitle(lang.help.menu)
        .setColor('AQUA')
        .setDescription(command.join('\n').replaceAll(',', "\n"))

    message.channel.send({embeds: [embed]})
}

module.exports.help = {
    name: "help", //Name of the commands
    description: "help command", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};