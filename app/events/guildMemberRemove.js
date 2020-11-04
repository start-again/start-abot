const { MessageEmbed } = require('discord.js')

const { channelsID, colors, guildID } = require('../config.json')
const currentDate = require('../utils/currentDate')

module.exports = async (bot, webhook, member) => {
  const guild = bot.guilds.cache.find((g) => g.id == guildID)
  const logChannel = guild.channels.cache.find((c) => c.id == channelsID.logs)

  // -------------------- Logger --------------------
  console.log(`${member.user.tag} just leaved the server`)
  const embed = new MessageEmbed()
    .setColor(colors.error)
    .setAuthor('- User leaved', member.user.avatarURL({ dynamic: true }))
    .setDescription(member.user.tag)
    .setFooter(currentDate())

  logChannel.send(embed)
  webhook.send(embed)
}
