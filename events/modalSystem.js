const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')

const DiscordModal = require('discord-modal')

module.exports.execute = async (interaction, client, lang) => {
    if(interaction.customId !== "modal") return

    DiscordModal(client)

    const textinput = new DiscordModal.TextInput()
     .setCustomId("modal_example")
     .setTitle("Modal Example")
     .addComponents(
       new TextInputField()
       .setLabel("What your name ?")
       .setStyle("short")
       .setPlaceholder("Enter your real name here")
       .setCustomId("ask_1")
       .setRequired(true),//Its default value is false,
       new DiscordModal.TextInputField()
       .setLabel("With what language do you code ?")
       .setStyle("short")
       .setDefaultValue("JavaScript")
       .setMin(10)
       .setMax(55)
       .setRequired(true)
       .setCustomId("ask_2"),
       new DiscordModalTextInputField()
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

module.exports.help = {
    name: 'interactionCreate',
    enable: true
}