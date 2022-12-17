import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { readdirSync } from 'node:fs'

export default async (client) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const commandsPath = resolve(__dirname, '../commands/')
  const commandFiles = readdirSync(commandsPath).filter((file) =>
    file.endsWith('.js')
  )

  for (let file of commandFiles) {
    const filePath = join(commandsPath, file)
    const command = await import(filePath)

    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command)
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      )
    }
  }
}
