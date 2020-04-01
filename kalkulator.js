var math = require('mathjs');
// Korisimo mathjs modul unutar kalkulator modula
exports.saberi = (br1, br2) => {
    return br1 + br2;
}
exports.koren = broj => {
    return math.sqrt(broj);
}
exports.pow = (broj, stepen) => {
    return math.pow(broj, stepen);
}
exports.abs = broj => {
    return math.abs(broj);
}
exports.log10 = broj => {
    return math.log10(broj);
}