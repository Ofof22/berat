const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
const os = require('os');
const client = require("moment-duration-format");

exports.run = async(client, message, args) => {
   let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setAuthor(`  BK-BOT İstatistik`,client.user.avatarURL())
  .addField(" 🔨 Geliştirici", `The Arabic`, true) 
  .addField(" 👮 Discord.JS", `**v${Discord.version}**`, true)
  .addField(" 💥  Ping", `**${client.ws.ping}ms**`, true)
.addField("  💻 Eklendiğim  Sunucu Sayısı", `**\`${client.guilds.cache.size.toLocaleString()}\`**`, true)
.addField("  👦Eklendiğim Sunuculardaki Toplam Kullanıcı Sayısı", `**\`${client.guilds.cache.reduce((a,b)=>a+=b.memberCount,0)}\`**`, true)
.addField("  💡 Eklendiğim Sunuculardaki Toplam Kanal ve Kategori Sayısı", `**\`${client.channels.cache.size.toLocaleString()}\`**`, true)
.addField("  🤝Destek Sunucusu", `[Destek Sunucusu](https://discord.gg/MZH4uDCnYM)`, true)
.addField("  🤖 Kuruluş Tarihi", `**\`${s}\`**`, true)
.addField("  💍 Uptime", `\`${uptime}\``, true)
 .setFooter(client.user.tag,client.user.avatarURL())
 
//${db.all().lenght} (databasedeki veri sayısını göstericekdir isterseniz ekleyin)
  message.channel.send(Embed)
    
    
  
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i", "botbilgi", "bot-bilgi"],
    permLevel: 0,
    katagori: "Ekonomi"}
exports.help = {
name: "istatistik",
usage: ""
}