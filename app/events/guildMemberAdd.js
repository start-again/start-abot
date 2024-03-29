const { MessageEmbed } = require('discord.js')

const { channelsID, colors, guildID } = require('../config.json')
const currentDate = require('../utils/currentDate')

module.exports = async (bot, webhook, member) => {
  const guild = bot.guilds.cache.find((g) => g.id == guildID)
  const logChannel = guild.channels.cache.find((c) => c.id == channelsID.logs)
  const generalChannel = guild.channels.cache.find((c) => c.id == channelsID.general)

  // -------------------- Logger --------------------
  console.log(`${member.user.tag} just joined the server`)
  const logEmbed = new MessageEmbed()
    .setColor(colors.success)
    .setAuthor('- User joined', member.user.avatarURL({ dynamic: true }))
    .setDescription(member.user.tag)
    .setFooter(currentDate())

  logChannel.send(logEmbed)
  webhook.send(logEmbed)

  // -------------------- Welcome message --------------------
  const welcomeEmbed = new MessageEmbed()
    .setColor(colors.success)
    .setAuthor(`Welcome to ${member.user.username} — Help guide`, member.user.avatarURL({ dynamic: true }))
    .setDescription(
      `Welcome to the **${guild.name}** server!
      Read the <#${channelsID.rules}> to understand how the server works.`
    )
    .setFooter(currentDate())

  generalChannel.send(welcomeEmbed).then((m) => {
    setTimeout(() => {
      m.delete()
    }, 60000)
  })
}
