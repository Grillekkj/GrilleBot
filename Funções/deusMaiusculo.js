function monitorarMensagensDeus(client) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        const user = tags.username;
        if (message.includes('deus')) {
            client.say(channel, `${user}, irmão, Deus é com D maiúsculo. Minúsculo é você perto dele.`);
        }
    });
}

module.exports = monitorarMensagensDeus;
