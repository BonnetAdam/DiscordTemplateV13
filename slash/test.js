const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	async execute(interaction, lang) {
		await interaction.reply({content: lang.command.everythingWork, ephemeral: true});
	},
};


module.exports.help = {
    name: "test",
    description: "test command",
    options: [{
        type: 3,
        name: "string",
        description: "description for the string arguments",
        required: true
    },
    {
        type: 3,
        name: "string2",
        description: "description for the string2 arguments",
        required: true
    }],
    permission: "ADMINISTRATOR",
    enable: true
};