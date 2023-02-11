const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "stop",
    aliases: ["dc","stop","bye"],
    category: "Music",
    description: "Leave voice channel",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
       
        const player = message.client.manager.get(message.guild.id);

        const emojiLeave = message.client.emoji.leave;

        player.destroy();
        message.react(`👋`)
        
        // let thing = new MessageEmbed()
        //     .setColor(message.client.embedColor)
        //     .setDescription(`${emojiLeave} **Leave the voice channel**\nThank you for using ${message.client.user.username}!`)
        //   return message.reply({embeds: [thing]});
	
    }
};