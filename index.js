//Variable Declaration
require('dotenv').config('./.env')

const fs = require('fs');
var util = require('util');

const { Client, Intents, Collection, Permissions, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const allIntent = ['GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING']

const client = new Client({ intents: allIntent });

let lang;


//Logger System
var logger = fs.createWriteStream('log.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})

console.log = function(line) {
    var date = new Date();
    if(date.getDate() <= 9) dateDate = '0'+date.getDate()
    if(date.getMonth() <= 9) dateMonth = '0'+date.getMonth()
    var formatDate = `[${dateDate || date.getDate()}-${dateMonth || date.getMonth()}-${date.getFullYear()}]`
    var formatTime = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`
    logger.write(`\n${formatDate}-${formatTime}: ${line}`);
    process.stdout.write(`\n${formatDate}-${formatTime}: ${line}`);
}

//Lang Systeme
if(process.env.LANGUAGES){
    lang = require(`./lang/${process.env.LANGUAGES}.json`)
    console.log(`[LANG] You choose the ${lang.language.name.toUpperCase()} as the bot languages`)
} else console.log('Please go in your .env and set the variable LANGUAGES')

//Connection to your Discord Bot
client.login(process.env.TOKEN);

//Thread Joinning System
client.on("threadCreate", (thread) => thread.join());

//Handler info
let SlashCommands = [];
let Events = [];
let Commands = [];

//Slash Command Handler
const SlashCommandFiles = fs.readdirSync("./slash").filter(fl => fl.endsWith(".js"));
client.commands = new Collection();

SlashCommandFiles.forEach(file => {
    const command = require(`./slash/${file}`)
    SlashCommands.push(command.help.name)
    client.commands.set(command.help.name, command)
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand() && !interaction.isMessageContextMenu() && !interaction.isContextMenu() && !interaction.isUserContextMenu()) return
    const authorPerms = interaction.channel.permissionsFor(interaction.member)

	const command = client.commands.get(interaction.commandName);

	if (!command) return;
    
    if(command.help.enable !== true) return interaction.reply({content: lang.command.disabled, ephemeral: true})
    if(!authorPerms.has(command.help.permission)) return interaction.reply({content: lang.command.notEnoughPermission, ephemeral: true})

	try {
		await command.execute(interaction, lang);
	} catch (error) {

        const embed = new MessageEmbed()
            .setTitle(lang.error.unexpected)
            .setColor('RED')
            .setDescription('```' + error + '```')
        
		await interaction.reply({ embeds: [embed], ephemeral: true });
	}
});

//Commands handler
const CommandFiles = fs.readdirSync("./commands").filter(fl => fl.endsWith(".js"));
CommandFiles.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    client.commands.set(f, props)
    Commands.push(props.help.name)
})

client.on('messageCreate', async(message) => {
    if (message.author.bot) return;
    const authorPerms = message.channel.permissionsFor(message.author)
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let cmd = client.commands.get(command + ".js")
    if (cmd) {
        message.delete();
        if(!authorPerms.has(cmd.help.permission)) return message.channel.send(lang.command.notEnoughPermission)
        if(cmd.help.name !== command) return message.channel.send(lang.error.unexpected)
        if(cmd.help.enable === false) return message.channel.send(lang.command.disabled)
        cmd.execute(client, message, args, lang)
    }
})


//Events handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    Events.push(event.help.name)
    client.on(event.help.name, (args) => {
        if(event.help.enable !== true) return
        event.execute(args, client, lang)
    });
}

//Loaded Events, SlashCommand, Commands
console.log(`${lang.bot.loaded}\n${Events.length} - Events \n${SlashCommands.length} - SlashCommands \n${Commands.length} - Commands`)