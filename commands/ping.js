import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with pong!')

export async function execute(interaction) {
  interaction.reply('Pong! :ping_pong:')
}
