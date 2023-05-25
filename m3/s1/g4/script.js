var InventarioArray = [];
fetch('abbigliamento.json')
    .then(function (response) {
    return response.json();
}).then(function (data) {
    data.forEach(function (element) {
        InventarioArray.push(new abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantitá, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo));
    });
    InventarioArray[3].mostraPrezzo();
    console.log(InventarioArray[0].mostraPrezzo());
    console.log(InventarioArray[1].mostraPrezzo());
    console.log(InventarioArray[2].mostraPrezzo());
    console.log(InventarioArray[3].mostraPrezzo());
    console.log(InventarioArray[4].mostraPrezzo());
    console.log(data);
}).catch(function (err) {
});
console.log(InventarioArray);
var abbigliamento = /** @class */ (function () {
    function abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantitá, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantitá = _quantitá;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    abbigliamento.prototype.mostraPrezzo = function () {
        return this.prezzoivainclusa + '$';
    };
    return abbigliamento;
}());
