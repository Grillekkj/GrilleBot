let filaMensagens = [];
let intervaloProcessamento = null;

function intervaloAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

function enviarMensagem(client, canal, mensagem) {
    client.say(canal, mensagem);
}

function processarFilaMensagens(client, canal) {
    if (filaMensagens.length === 0) {
        return;
    }

    const intervalo = intervaloAleatorio(1800000, 3600000);

    intervaloProcessamento = setTimeout(() => {
        const mensagem = filaMensagens.shift();
        enviarMensagem(client, canal, mensagem);
        filaMensagens.push(mensagem);
        processarFilaMensagens(client, canal);
    }, intervalo);
}

function avisosAleatorios(mensagem, canal, client) {
    filaMensagens.push(mensagem);

    if (filaMensagens.length === 1) {
        processarFilaMensagens(client, canal);
    }
}

module.exports = avisosAleatorios;
