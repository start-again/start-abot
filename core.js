import * as dotenv from 'dotenv'
dotenv.config()

import { Client, Collection, GatewayIntentBits } from 'discord.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// -------------------- Commands/Events handling --------------------

client.commands = new Collection()
const handlers = ['events', 'commands']

handlers.forEach(async (h) => {
  const module = await import(`./handlers/${h}.js`)
  module.default(client)
})

// -------------------- Login --------------------

client.login(process.env.TOKEN)
