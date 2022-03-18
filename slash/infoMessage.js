require('dotenv').config('./.env');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async(interaction, client, lang) => {
        const message = interaction.channel.messages.cache.get(interaction.targetId)
        const embed = new MessageEmbed()
            .setTitle('Information')
            .setColor(process.env.DefaultEmbedColor)
            .addFields(
                {name: `Author`, value: `<@${message.author.id}>`},
                {name: `Content`, value: '```'+`${message.content || message.embeds[0].title && message.embeds[0].description}`+'```'},
                {name: `Created At`, value: `<t:${Math.trunc(message.createdTimestamp / 1000)}:R>`},
            )
		await interaction.reply({embeds: [embed], ephemeral: true});
};

//              Message Context Menu
module.exports.help = {
    name: "infoMessage", //Name of the command
    type: 3, //Type of the command. 3 is equal to message context menu
    permission: "ADMINISTRATOR", //Required permission to use the command
    enable: true //If the command is under maintenance mode
};
