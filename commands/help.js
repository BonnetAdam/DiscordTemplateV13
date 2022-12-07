require('dotenv').config(`${process.cwd()}/.env`);
const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports.execute = async(client, message, args, lang) => {

    let commands = [], command = [], slashCommands = [];

    const CommandsFiles = fs.readdirSync("commands").filter(fl => fl.endsWith(".js"))

    const SlashCommandsFiles = fs.readdirSync("slash").filter(fl => fl.endsWith(".js"))

    CommandsFiles.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../commands/${file}`)
        if(!command || !authorPerms || !command.execute || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || !command.help.show || command.help.enable !== true || command.help.show !== true || !authorPerms.has(command.help.permission)) return
        commands.push(`**${process.env.PREFIX}${command.help.name}** - ${command.help.description}`)
    })
    
    SlashCommandsFiles.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../slash/${file}`)
        if(!command || !authorPerms || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || !command.help.show || command.help.enable !== true || command.help.show !== true ||  !authorPerms.has(command.help.permission) || command.help.type !== 1) return
        slashCommands.push(`**/${command.help.name}** - ${command.help.description}`)
    })

    if(commands.length > 0) command.push(`**${lang.help.command}**`)
    if(commands.length > 0) command.push(commands)
    if(slashCommands.length > 0) command.push(`\n**${lang.help.slashcommand}**`)
    if(slashCommands.length > 0) command.push(slashCommands)
    if(!commands.length > 0 && !slashCommands.length > 0) command.push(`${lang.help.none}`)

    const embed = new EmbedBuilder()
        .setTitle(lang.help.menu)
        .setColor(process.env.DefaultEmbedColor)
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