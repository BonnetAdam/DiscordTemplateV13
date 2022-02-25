//Variable Declaration
require('dotenv').config('./.env')

const fs = require('fs');

const { Client, Intents, Collection, Permissions, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { ignoreRoot } = require('nodemon/lib/config/defaults');

const allIntent = ['GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING']

const client = new Client({ intents: allIntent });

//Connection to your Discord Bot
client.login(process.env.TOKEN);

//Thread Joinning System
client.on("threadCreate", (thread) => thread.join());

//Handler info
const SlashCommands = [];
const Events = [];
const Commands = [];

//Slash Command Handler
const commandFiles = fs.readdirSync("./slash").filter(fl => fl.endsWith(".js"));
client.commands = new Collection();

commandFiles.forEach(file => {
    const command = require(`./slash/${file}`)
    SlashCommands.push(command.data.toJSON())
    client.commands.set(command.data.name, command)
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {

        const embed = new MessageEmbed()
            .setTitle('Error')
            .setDescription('An unexpected error has occured')
            .addFields({name: 'Error', value: '```' + error + '```'})
        
		await interaction.reply({ embeds: [embed], ephemeral: true });
	}
});

//Commands handler
fs.readdir("./commands/", (err, files) => {
    if (err) console.error(error)
    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if (jsfiles.length <= 0) {
        return console.log("No commands to log in ./commands/")
    } else console.log(`${jsfiles.length} commands in ./commands/`)
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        client.commands.set(f, props)
    })
})

client.on('messageCreate', async(message) => {
    if (message.author.bot) return;
    const authorPerms = message.channel.permissionsFor(message.author)
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let cmd = client.commands.get(command + ".js")
    if (cmd) {
        message.delete();
        if(!authorPerms.has(cmd.help.permission)) return message.channel.send('You don\'t have enough permission to do such an action!')
        if(cmd.help.name !== command) return message.channel.send('An unexpected error has occured')
        if(cmd.help.enable === false) return message.channel.send('This commands is currently disabled')
        cmd.run(client, message, args)
    }
})


//Events handler
client.on("threadCreate", (thread) => thread.join());
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    Events.push(event.name)
    client.on(event.name, (args) => event.execute(args, config));
}