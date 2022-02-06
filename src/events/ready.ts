module.exports = {
    name: 'ready',
    // once: true,
    execute(client: any) {
        // client.user.setUsername('Stocks Bot');
        console.log(`Ready! Logged in as ${client.user.tag}`);

        const pm = require('../pm');
        pm(client, 'hi', 'Hello!');
    },
};

export { };