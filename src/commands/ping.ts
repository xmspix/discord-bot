import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction: any) {
        const timeTaken = Date.now() - interaction.createdTimestamp;
        await interaction.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    },
};