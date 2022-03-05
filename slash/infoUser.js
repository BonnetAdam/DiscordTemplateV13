const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async(interaction, lang) => {
        const member = interaction.guild.members.cache.get(interaction.targetId)
        const embed = new MessageEmbed()
            .setTitle('Information')
            .setColor('PURPLE')
            .addFields(
                {name: `User`, value: `<@${member.user.id}>`},
                {name: `Id`, value: `${member.user.id}`},
                )
		await interaction.reply({embeds: [embed], ephemeral: true});
};

//              User Context Menu
module.exports.help = {
    name: "infoUser", //Name of the command
    type: 2, //Type of the command. 2 is equal to user context menu
    permission: "ADMINISTRATOR", //Required permission to use the command
    enable: true //If the command is under maintenance mode
};
