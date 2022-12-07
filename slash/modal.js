require('dotenv').config(`${process.cwd()}/.env`);
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder } = require('discord.js');

module.exports.execute = async (interaction, client, lang) => {

    const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal');

    const favoriteColorInput = new TextInputBuilder()
		.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your favorite color?")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

    const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);

    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);
}

//              Slash Commands
module.exports.help = {
    name: "modal", //Name of the command
    description: "test command", //Description of the command
    type: 1, //Type of the command. Read the readme.md file for more information
    permission: "ADMINISTRATOR", //Required permission to use the command
    enable: true, //If the command is under maintenance mode
    show: true //If the command is show on the help menu
};

//              User Context Menu
// module.exports.help = {
//     name: "test", //Name of the command
//     type: 2, //Type of the command. Read the readme.md file for more information
//     permission: "ADMINISTRATOR", //Required permission to use the command
//     enable: true, //If the command is under maintenance mode
//     show: true //If the command is show on the help menu
// };

//              Message Context Menu
// module.exports.help = {
//     name: "test", //Name of the command
//     type: 3, //Type of the command. Read the readme.md file for more information
//     permission: "ADMINISTRATOR", //Required permission to use the command
//     enable: true, //If the command is under maintenance mode
//     show: true //If the command is show on the help menu
// };