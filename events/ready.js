import { Events } from 'discord.js'

export const name = Events.ClientReady
export const once = true

export function execute(client) {
  console.log(`Ready! Logged as ${client.user.tag}`)
}

// -------------------- Logger --------------------
// -------------------- Bot status --------------------
// bot.user.setActivity(`${prefix}help`, { type: 'WATCHING' })
