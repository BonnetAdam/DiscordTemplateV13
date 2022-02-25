const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Test Command'),

	async execute(interaction, lang) {
        t
		await interaction.reply({content: 'Everything work!', ephemeral: true});
	},
};

module.exports.help = {
    name: "test",
    description: "test command",
    permission: "ADMINISTRATOR",
    enable: true
};