require('dotenv').config('./.env');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const DiscordModal = require('discord-modal')

module.exports.execute = async (interaction, client, lang) => {

    DiscordModal(client)

    const textinput = new DiscordModal.TextInput()
     .setCustomId("modal_example")
     .setTitle("Modal Example")
     .addComponents(
       new DiscordModal.TextInputField()
       .setLabel("What your name ?")
       .setStyle("short")
       .setPlaceholder("Enter your real name here")
       .setCustomId("ask_1")
       .setRequired(true),//Its default value is false,
       new DiscordModal.TextInputField()
       .setLabel("With what language do you code ?")
       .setStyle("short")
       .setDefaultValue('Javascript')
       .setRequired(true)
       .setCustomId("ask_2"),
       new DiscordModal.TextInputField()
       .setLabel("Do you have an story ?")
       .setStyle("paragraph")
       .setCustomId("ask_3")
       .setRequired(true)
       .setPlaceholder("write here")
       )
       client.TextInputs.open(interaction, textinput).then(() => {
        client.on("interactionTextInput",async(interaction)=>{
            if(interaction.customId == 'modal_example'){
              await interaction.deferReply()
              let embed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle('Submit a support rank')
                .addField('Your name', '\`\`\`' + interaction.fields[0].value + '\`\`\`')
                .addField('Your coding language', '\`\`\`' + interaction.fields[1].value + '\`\`\`')
                .addField('Story of your life', '\`\`\`' + interaction.fields[2].value+ '\`\`\`')
                await interaction.editReply({embeds:[embed]})
            }
           })
       })
}

//              Slash Commands
module.exports.help = {
    name: "modal", //Name of the command
    description: "Test the modal system", //Description of the command
    type: 1, //Type of the command. Read the readme.md file for more information
    permission: "SEND_MESSAGES", //Required permission to use the command
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