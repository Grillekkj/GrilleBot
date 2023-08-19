const schedule = require('node-schedule');

function agendarMensagens(client, channel, hour, minute, message) {
    schedule.scheduleJob({ hour, minute, tz: 'America/Sao_Paulo' }, () => {
        client.say(channel, message);
    });
}

module.exports = agendarMensagens;