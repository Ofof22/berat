const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4MTE5NDEwODg4NTkyNTk0OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwOTE0MjMzfQ.P_HOXh4kUfqf-bITfJkts3ttdqwgjidz6U1pzgVA7Mk', client); //Dbl Tokeninizi Yazınız.
  
dbl.hasVoted(message.author.id).then(voted => { 
  
if (!voted) {
  
const embed = new Discord.MessageEmbed()
                     
.setTitle("UYARI")
.setColor("RED")

.setThumbnail(client.user.avatarURL())

.setDescription("Bu Komutu Kaldırdık by The Arabic")

.addField("Oy Vermek için :", `[Komut Geçersiz bro ]()`) //Dbl Oy Linkini Yazınız.

.setFooter(client.user.username)

return message.channel.send(embed)
} 
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["vote", "oy"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "oyver",
usage: ""
}