const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async(interaction, lang) => {
    await interaction.reply({content: lang.command.everythingWork, ephemeral: true});
}

//              Slash Commands
module.exports.help = {
    name: "test", //Name of the command
    description: "test command", //Description of the command
    type: 1,
    options: [
        {
            type: 3,
            name: "test1",
            description: "description for the test1 arguments",
        },
    ], //Option of the command
    permission: "ADMINISTRATOR", //Required permission to use the command
    enable: true, //If the command is under maintenance mode
    show: true //If the command is show on the help menu
};

//              User Context Menu
// module.exports.help = {
//     name: "test", //Name of the command
//     type: 2,
//     permission: "ADMINISTRATOR", //Required permission to use the command
//     enable: true, //If the command is under maintenance mode
//     show: true //If the command is show on the help menu
// };

//              Message Context Menu
// module.exports.help = {
//     name: "test", //Name of the command
//     type: 3,
//     permission: "ADMINISTRATOR", //Required permission to use the command
//     enable: true, //If the command is under maintenance mode
//     show: true //If the command is show on the help menu
// };