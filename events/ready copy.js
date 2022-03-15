const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')

const DiscordModal = require('discord-modal')

module.exports.execute = async (interaction, client, lang) => {
    if(interaction.customId !== "test") return
    DiscordModal(client)

    const textinput = new DiscordModal.TextInput()
     .setCustomId("submit_a_support_rank")
     .setTitle("Maxime, sa marche nan ?")
     .addComponents(
       new DiscordModal.TextInputField()
       .setLabel("Je suis pas sur")
       .setStyle("short")
       .setPlaceholder("Enter your real name here")
       .setCustomId("ask_1")
       .setRequired(true),//Its default value is false,
       new DiscordModal.TextInputField()
       .setLabel("Tu en pense quoi ?")
       .setStyle("short")
       .setDefaultValue("JavaScript")
       .setMin(10)
       .setMax(55)
       .setCustomId("ask_2"),
       new DiscordModal.TextInputField()
       .setLabel("Write a story from your life")
       .setStyle("paragraph")
       .setCustomId("ask_3")
       .setPlaceholder("write here")
       )
       client.TextInputs.open(interaction, textinput) 
}

module.exports.help = {
    name: 'interactionCreate',
    enable: true
}