const fs = require('fs');
const path = require('path');

import { client } from '../index';

// const { Client, Collection, Intents } = require('discord.js');
// // Create a new client instance
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// client.commands = new Collection();
const commandFiles = fs.readdirSync(path.resolve(__dirname, '../commands')).filter((file: any) => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.resolve(__dirname, `../commands/${file}`));
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

module.exports = {
    name: 'interactionCreate',
    async execute(interaction: any) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};