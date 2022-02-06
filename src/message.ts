module.exports = {
    name: 'message',
    execute(client: any, trigerText: string, replyText: string) {
        client.on('message', async (message: any) => {
            console.log('message', message);

            if (message.channel.type === 'dm' &&
                message.content.toLowerCase() === 'trigerText'.toLowerCase()) {
                message.author.send('replyText');
            }
        });
    },
};

export { };