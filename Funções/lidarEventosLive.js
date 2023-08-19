function mensagemResub(client, mensagemAgradecimento) {
    client.on('resub', (channel, username, streakMonths, message, userstate, methods) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username)
            .replace('{meses}', streakMonths)
            .replace('{mensagem}', message);
        client.say(channel, mensagemFinal);
    });
}

function mensagemSub(client, mensagemAgradecimento) {
    client.on('subscription', (channel, username, methods, message, userstate) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username)
            .replace('{mensagem}', message);
        client.say(channel, mensagemFinal);
    });
}

function mensagemSubGift(client, mensagemAgradecimento) {
    client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username)
            .replace('{recebedor}', recipient)
            .replace('{meses}', streakMonths);
        client.say(channel, mensagemFinal);
    });
}

function mensagemAnonSubGift(client, mensagemAgradecimento) {
    client.on('anonsubgift', (channel, streakMonths, recipient, methods, userstate) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{recebedor}', recipient)
            .replace('{meses}', streakMonths);
        client.say(channel, mensagemFinal);
    });
}

function mensagemSubMysteryGift(client, mensagemAgradecimento) {
    client.on('submysterygift', (channel, username, giftSubCount, methods, userstate) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username)
            .replace('{quantidade}', giftSubCount);
        client.say(channel, mensagemFinal);
    });
}

function mensagemPrimePaidUpgrade(client, mensagemAgradecimento) {
    client.on('primepaidupgrade', (channel, username, methods, userstate) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username);
        client.say(channel, mensagemFinal);
    });
}

function mensagemGiftPaidUpgrade(client, mensagemAgradecimento) {
    client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username)
            .replace('{quemEnviou}', sender);
        client.say(channel, mensagemFinal);
    });
}

function mensagemAnonGiftPaidUpgrade(client, mensagemAgradecimento) {
    client.on('anongiftpaidupgrade', (channel, username, userstate) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username);
        client.say(channel, mensagemFinal);
    });
}

function mensagemRaid(client, mensagemAgradecimento) {
    client.on('raided', (channel, username, viewers) => {
        let mensagemFinal = mensagemAgradecimento
            .replace('{user}', username)
            .replace('{viewers}', viewers);
        client.say(channel, mensagemFinal);
    });
}

module.exports = {
    mensagemResub,
    mensagemSub,
    mensagemSubGift,
    mensagemAnonSubGift,
    mensagemSubMysteryGift,
    mensagemPrimePaidUpgrade,
    mensagemGiftPaidUpgrade,
    mensagemAnonGiftPaidUpgrade,
    mensagemRaid
};
