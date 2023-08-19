const { removerAcentos, tudoMinusculo } = require('./utils.js');
const previsoesPorSigno = require('../Bancos/frasesSigno.json');

function comandoSigno(client) {
    client.on('message', (channel, tags, message, self) => {
        if(self) return;

        const user = tags.username;
        const match = message.match(/^!signo (\w+)/i);
        if(match && match[1]) {
            const signoProcessado = tudoMinusculo(removerAcentos(match[1]));
            if(previsoesPorSigno[signoProcessado]) {
                const previsaoAleatoria = previsoesPorSigno[signoProcessado][Math.floor(Math.random() * previsoesPorSigno[signoProcessado].length)];
                client.say(channel, `${user}, ${previsaoAleatoria}`);
            } else {
                client.say(channel, "Escreva um signo existente.");
            }
        }
    });
}

module.exports = comandoSigno;
