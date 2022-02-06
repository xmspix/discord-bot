import fs from 'fs';
import path from 'path';
import { token } from './config';

const { Client, Collection, Intents } = require('discord.js');

// Create a new client instance
export const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync(path.resolve(__dirname, './commands')).filter((file: any) => file.endsWith('.ts'));

for (const file of commandFiles) {
    const command = require(path.resolve(__dirname, `./commands/${file}`));
    client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync(path.resolve(__dirname, './events')).filter((file: any) => file.endsWith('.ts'));

for (const file of eventFiles) {
    const event = require(path.resolve(__dirname, `./events/${file}`));
    if (event.once) {
        client.once(event.name, (...args: any) => event.execute(...args));
    } else {
        client.on(event.name, (...args: any) => event.execute(...args));
    }
}

// Login to Discord with your client's token
client.login(token);