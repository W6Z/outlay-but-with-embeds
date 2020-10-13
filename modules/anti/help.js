const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {
  
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setThumbnail("https://cdn.discordapp.com/attachments/761736878277525514/763211877823021096/61.png")
  .setTitle(`${client.user.username}'s Antiwizz Commands`)
  .addField("__👻 Prefix__", "Any Letter/Symbol **twice**", true)
  .addField("__👻 TrustSystem__", "Sets a Whitelist Type Command", true)
  .addField("__👻 Trust__", "Trusts users to bypass the anti-nuke", true)
  .addField("🌹 Backup", "Backsup The Server", true)
  .addField("🌹 Invite", "Returns The **Bot**s invite", true)
  .addField("🌹 savage", "savage bavage", true)

    msg.channel.send(embed)

    
}