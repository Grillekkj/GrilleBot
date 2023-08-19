function MonitorDeComandoComCitacao(client, canal, comando, resposta) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        const user = tags.username;
        if (channel === canal && message.startsWith(comando)) {
            client.say(channel, `${user}, ${resposta}`);
        }
    });
}

function MonitorDeComandoSemCitacao(client, canal, comando, resposta) {
    client.on('message', (channel, message, self) => {
        if (self) return;
        if (channel === canal && message.startsWith(comando)) {
            client.say(channel, `${resposta}`);
        }
    });
}

function MonitorDeComandoParaModsEStreamerComCitacao(client, canal, comando, resposta) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const user = tags.username;
        const isStreamer = user.toLowerCase() === canal.toLowerCase();
        const isMod = tags.mod === true;

        if (channel === canal && (isStreamer || isMod) && message.startsWith(comando)) {
            client.say(channel, `${user}, ${resposta}`);
        }
    });
}

function MonitorDeComandoParaModsEStreamerSemCitacao(client, canal, comando, resposta) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const user = tags.username;
        const isStreamer = user.toLowerCase() === canal.toLowerCase();
        const isMod = tags.mod === true;

        if (channel === canal && (isStreamer || isMod) && message.startsWith(comando)) {
            client.say(channel, `${resposta}`);
        }
    });
}

module.exports = {
    MonitorDeComandoComCitacao,
    MonitorDeComandoSemCitacao,
    MonitorDeComandoParaModsEStreamerComCitacao,
    MonitorDeComandoParaModsEStreamerSemCitacao
};
