import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { readdirSync } from 'node:fs'

export default async (client) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const eventsPath = resolve(__dirname, '../events/')
  const eventFiles = readdirSync(eventsPath).filter((file) =>
    file.endsWith('.js')
  )

  for (let file of eventFiles) {
    const filePath = join(eventsPath, file)
    const event = await import(filePath)

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args))
    } else {
      client.on(event.name, (...args) => event.execute(...args))
    }
  }
}
