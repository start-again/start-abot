const { MessageEmbed } = require('discord.js')

const { prefix, channelsID, colors, guildID } = require('../config.json')
const currentDate = require('../utils/currentDate')

module.exports = async (bot) => {
  const guild = bot.guilds.cache.find((g) => g.id == guildID)
  const logChannel = guild.channels.cache.find((c) => c.id == channelsID.logs)

  // -------------------- Logger --------------------
  console.log(`I'm online sir!`)
  const embed = new MessageEmbed()
    .setColor(colors.info)
    .setAuthor('- Back online!', bot.user.avatarURL({ dynamic: true }))
    .setFooter(currentDate())

  logChannel.send(embed)

  // -------------------- Bot status --------------------

  bot.user.setActivity(`${prefix}help`, { type: 'WATCHING' })
}
