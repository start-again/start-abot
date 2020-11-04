const { MessageEmbed } = require('discord.js')

const { prefix, colors } = require('../config.json')
const currentDate = require('../utils/currentDate')

module.exports = async (bot, webhook) => {
  // -------------------- Logger --------------------
  console.log(`I'm online sir!`)
  const embed = new MessageEmbed()
    .setColor(colors.info)
    .setAuthor('- Back online!', bot.user.avatarURL({ dynamic: true }))
    .setFooter(currentDate())

  webhook.send(embed)

  // -------------------- Bot status --------------------

  bot.user.setActivity(`${prefix}help`, { type: 'WATCHING' })
}
