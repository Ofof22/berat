const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const WestraEmbed = new Discord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
//  WestraEmbed.setAuthor(`BK-BOTU davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`💎 BK-BOTU davet etmek için [buraya](https://discord.com/oauth2/authorize?client_id=845001548424544297&scope=bot&permissions=8) tıkla!`)
  message.channel.send(WestraEmbed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "davet",
usage: ""
}