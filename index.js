//Variable Declaration
require('dotenv').config('./.env')

const fs = require('fs');

const { Client, Intents, Collection, Permissions, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS] });

//Connection to your Discord Bot
client.login(process.env.TOKEN);

//Thread Joinning System
client.on("threadCreate", (thread) => thread.join());

//Slash Command Handler
const commandFiles = fs.readdirSync("./slash").filter(fl => fl.endsWith(".js"));
const commands = [];
client.commands = new Collection();

commandFiles.forEach(file => {
    const command = require(`./slash/${file}`)
    commands.push(command.data.toJSON())
    client.commands.set(command.data.name, command)
})