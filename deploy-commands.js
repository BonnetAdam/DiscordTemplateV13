require('dotenv').config('./.env')
const { REST, Routes } = require('discord.js');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./slash').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./slash/${file}`);
	commands.push(command.help);
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// rest.put(Routes.applicationCommands(process.env.CLIENTID), { body: [] })
// 	.then(() => console.log('Successfully deleted all application commands.'))
// 	.catch(console.error);

// 	rest.put(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), { body: [] })
// 	.then(() => console.log('Successfully deleted all guild commands.'))
// 	.catch(console.error);
// (async () => {
// 	try {
// 		console.log('Started refreshing application (/) commands.');

// 		console.log(commands)
// 		client.application.commands.set(commands);
		
// 		console.log('Successfully reloaded application (/) commands.');
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();


//Deleting older Guild Commands
/*rest.get(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        console.log('Delete GUILD application (/) commands.')
        return Promise.all(promises);
});

//Deleting older Client Commands
rest.get(Routes.applicationCommands(process.env.CLIENTID))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationCommands(process.env.CLIENTID)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        console.log('Delete CLIENT application (/) commands.')
        return Promise.all(promises);
});*/

//Client Deploy
/*
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(process.env.CLIENTID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();*/

//Guild Deploy
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
