function removerAcentos(input) {
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function tudoMinusculo(input) {
    return input.toLowerCase();
}

module.exports = {
    removerAcentos,
    tudoMinusculo
};