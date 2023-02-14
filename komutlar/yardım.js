const codework = require('discord.js')

exports.run = (client, message,args) => {
 const codework1 = new codework.MessageEmbed()
 .setAuthor("BK-BOT", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("**BK-BOT**") //BURAYA BOTUNUZUN ADINI YAZIN 
 .setURL(`https://bk-bot-web.glitch.me/`) //BURAYA BOTUNUZUN DAVET LİNKİNİ KOYUN
  .setDescription(`                 
 **b!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`b!çantam\`
Botu davet etmek için: \`b!davet\`
`)
                  
  .addField("💸 Para komutları", `
Kolay para kazanma komutları;
\`çalış\` \`çal\` \`market\` \`satın-al\` \`sat\` \`bitcoin\` \`soygun\` \`blackmarket\`
`)

   .addField("📜 Başlangıç", `
Bot komutları;
\`çantam\` \`param\` \`cüzdan\` \`transfer\` \`hesap-oluştur\` \`bilgiler\` \`banka\`
`)
 
  .addField("🟩  Minecraft komutları", `
Kasarak para kazanma komutları;
\`zindan\` \`maden\` \`orman\` \`zindan-sat\` \`odun-sat\` \`maden-sat\` 
`)
 
    .addField("🎡 Casino komutları", `
Kasino para kazanma komutları;
\`slots\` \`balık-tut\`
`)
 
   .addField("🛠️ Ayarlar", `
Ayarlama yapmanız gereken komutları;
\`soygun-log\` 
`)
 
   .addField("🤖 Bot komutları", `
Bot komutları;
\`davet\` \`istatistik\` \`ping\` \`bildir bug/öneri\`
`)
 
   .addField("🕘 Süreli komutlar", `
Süreli para komutları;
\`kredi\` \`günlük-para\`
`) 

  .setFooter(`BK-BOT © | Tüm hakları Saklıdır`)
  
 
 
 message.channel.send(codework1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "CodeWork V12 MC-AT yardım ", 
  usage: "yardım" 
}

