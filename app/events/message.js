const { MessageEmbed } = require('discord.js')
const { prefix, channelsID, guildID } = require('../config.json')
const currentDate = require('../utils/currentDate')

module.exports = async (bot, webhook, message) => {
  if (message.author.bot) return // Ignore all bots
  if (message.author.id === bot.user.id) return // Ignore bot itself
  if (message.channel.type === 'dm') return // Ignore private messages

  // -------------------- Message with prefix --------------------

  if (message.content.startsWith(prefix)) {
    // Our standard argument/command name definition.
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    // Grab the command data from the client Collection
    const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command))

    if (!cmd) return // If that command doesn't exist, silently exit and do nothing

    // -------------------- Logger --------------------
    const embed = new MessageEmbed()
      .setAuthor('- New command', bot.user.avatarURL({ dynamic: true }))
      .setDescription(
        `**Author**: ${message.author.tag}
        **Channel**: #${message.channel.name}
        **Content**: ${message.content}`
      )
      .setFooter(currentDate())

    const guild = bot.guilds.cache.find((g) => g.id == guildID)
    const logChannel = guild.channels.cache.find((c) => c.id == channelsID.logs)

    logChannel.send(embed)
    webhook.send(embed)

    // -------------------- Command execution --------------------

    message.delete()
    if (!message.member.hasPermission(cmd.config.permissionNeeded)) {
      message.reply('Only your server administrator can do this!').then((m) => {
        setTimeout(() => {
          m.delete()
        }, 5000)
      })
      return
    }
    cmd.run(bot, message, args) // Run the command
  }
}
