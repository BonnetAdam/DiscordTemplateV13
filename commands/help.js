const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const fs = require('fs');
let commands = [], command = [], slashCommands = [];

module.exports.run = async(client, message, args, lang) => {

    const CommandsFiles = fs.readdirSync("commands").filter(fl => fl.endsWith(".js"))

    const SlashCommandsFiles = fs.readdirSync("slash").filter(fl => fl.endsWith(".js"))

    CommandsFiles.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../commands/${file}`)
        if(!command || !authorPerms || !command.run || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || command.help.enable !== true || !authorPerms.has(command.help.permission)) return
        commands.push(`**${process.env.PREFIX}${command.help.name}** - ${command.help.description}`)
        //commands.push({[command.help.categories]: {commandName: command.help.name}})
    })

    SlashCommandsFiles.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../slash/${file}`)
        if(!command || !authorPerms || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || command.help.enable !== true || !authorPerms.has(command.help.permission)) return
        slashCommands.push(`**/${command.help.name}** - ${command.help.description}`)
    })

    command.push('**Commands**')
    command.push(commands)
    command.push('\n**Slash Commands**')
    command.push(slashCommands)

    const embed = new MessageEmbed()
        .setTitle('Help Menu')
        .setColor('AQUA')
        .setDescription(command.join('\n').replaceAll(',', "\n"))

    message.channel.send({embeds: [embed]})
}

module.exports.help = {
    name: "help",
    description: "help command",
    permission: "SEND_MESSAGES",
    enable: true
};