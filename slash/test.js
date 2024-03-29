require('dotenv').config(`${process.cwd()}/.env`);
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');

module.exports.execute = async (interaction, client, lang) => {
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setCustomId('modal')
        .setLabel('Primary')
        .setStyle(ButtonStyle.Primary),
        );
    
    await interaction.reply({content: lang.command.everythingWork, components: [row], ephemeral: true});
}

//              Slash Commands
module.exports.help = {
    name: "test", //Name of the command
    description: "test command", //Description of the command
    type: 1, //Type of the command. Read the readme.md file for more information
    options: [
        {
            type: 3, //String
            name: "test1", //Option Name
            description: "description for the test1 arguments", //Option description
            required: false //Does the value need to be put in
        },
    ], //Option of the command
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