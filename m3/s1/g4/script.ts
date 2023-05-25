let InventarioArray:any[] =[]



fetch ('abbigliamento.json')
.then(response => {
    return response.json();
  }).then(data => {
    data.forEach((element:abbigliamento) => {
        InventarioArray.push(new abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantitá, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo));
    });
    InventarioArray[3].mostraPrezzo()
    console.log(InventarioArray[0].mostraPrezzo());
    console.log(InventarioArray[1].mostraPrezzo());
    console.log(InventarioArray[2].mostraPrezzo());
    console.log(InventarioArray[3].mostraPrezzo());
    console.log(InventarioArray[4].mostraPrezzo());
    
    console.log(data);
  }).catch(err => {
    
  });
  console.log(InventarioArray);
  


  class abbigliamento {
    id: number;
    codprod:number
    collezione: string;
    capo:string;
    modello:number
    quantitá:number;
    colore:string;
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor(_id:number, _codprod:number, _collezione:string,_capo:string, _modello:number, _quantitá:number, _colore:string,_prezzoivaesclusa:number,_prezzoivainclusa:number,_disponibile:string,_saldo:number) {
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

    mostraPrezzo():string {
      return  this.prezzoivainclusa + '$'

    }
  }