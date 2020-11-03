require('dotenv').config()

const { Client, Collection, WebhookClient } = require('discord.js')

const bot = new Client()

// -------------------- Login --------------------

bot.login(process.env.TOKEN)

console.log(process.env.NODE_ENV)
console.log(process.env.TOKEN)
