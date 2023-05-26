var RegistroChiamate = /** @class */ (function () {
    function RegistroChiamate(id, durata, dataEOra) {
        this.id = id;
        this.durata = durata;
        this.dataEOra = dataEOra;
    }
    return RegistroChiamate;
}());
var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }
    Smartphone.prototype.ricarica = function ($) {
        this.carica = $ + this.carica;
    };
    Smartphone.prototype.numero404 = function () {
        return "il tuo credito ammonta a " + this.carica;
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        this.carica = this.carica - min * this.costoMinuto;
        this.registroChiamate.push(new RegistroChiamate(this.registroChiamate.length + 1, min, new Date()));
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        console.log(this.registroChiamate);
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (date) {
        return this.registroChiamate.filter(function (calls) { return calls.dataEOra.toLocaleDateString('it-IT') == date.toLocaleDateString('it-IT'); });
    };
    return Smartphone;
}());
var firstUser = new Smartphone(5, 5, 0.20);
var secondUser = new Smartphone(10, 10, 0.20);
var thirdUser = new Smartphone(15, 15, 0.20);
console.log(firstUser.ricarica(5));
console.log(firstUser.numero404());
console.log(firstUser.getNumeroChiamate());
console.log(firstUser.chiamata(15));
console.log(firstUser.numero404());
console.log(secondUser.ricarica(10));
console.log(secondUser.numero404());
console.log(secondUser.getNumeroChiamate());
console.log(secondUser.chiamata(7));
console.log(secondUser.numero404());
console.log(thirdUser.ricarica(10));
console.log(thirdUser.numero404());
console.log(thirdUser.getNumeroChiamate());
console.log(thirdUser.chiamata(7));
console.log(thirdUser.chiamata(7));
console.log(thirdUser.chiamata(7));
console.log(thirdUser.numero404());
console.log(thirdUser.mostraRegistroChiamate());
console.log(thirdUser.filtraChiamatePerDataOra(new Date('2023-5-26')));
