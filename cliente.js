const tmi = require('tmi.js');
const config = require('./configs.json');

const client = new tmi.Client(config);

module.exports = client;
