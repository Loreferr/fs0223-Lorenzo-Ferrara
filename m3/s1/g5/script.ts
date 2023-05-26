interface ISmartphone {
    carica:number 
    numeroChiamate:number
    costoMinuto:number
    

    ricarica($:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void
    mostraRegistroChiamate():void
    filtraChiamatePerDataOra():void
}

class registroChiamate {
    id:number
    durata:number
    dataEOra:Date
    constructor(id:number, durata:number, dataEOra:Date) {
        this.id = id;
        this.durata = durata;
        this.dataEOra = dataEOra;
}
}
class Smartphone implements ISmartphone{
    carica:number
    numeroChiamate:number
    costoMinuto:number
    registroChiamate:registroChiamate[]

    constructor(carica:number, numeroChiamate:number, costoMinuto:number,){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate =[];
    }




    ricarica($:number):void{
        this.carica = $ + this.carica;

    }
    numero404():string{
       return `il tuo credito ammonta a ` + this.carica;

    }
    getNumeroChiamate():number{
        return  this.numeroChiamate;

    }
    chiamata(min:number):void{
        this.carica = this.carica - min*this.costoMinuto;
        this.registroChiamate.push(new registroChiamate(this.registroChiamate.length,min,new Date()))
        ;
        

    }
    azzeraChiamate():void{
        this.numeroChiamate = 0

    }

    mostraRegistroChiamate():void{
        console.log(this.registroChiamate);
    }
    filtraChiamatePerDataOra():void{
        
    }

}

let firstUser = new Smartphone(5, 5, 0.20);
let secondUser = new Smartphone(10,10,0.20)
let thirdUser = new Smartphone(15,15,0.20)

console.log(firstUser.ricarica(5));
console.log(firstUser.numero404());
console.log(firstUser.getNumeroChiamate());
console.log(firstUser.chiamata(15));
console.log(firstUser.numero404());

console.log(secondUser.ricarica(10));
console.log(secondUser.numero404());
console.log(secondUser.getNumeroChiamate());
console.log(secondUser.chiamata(7));
console.log(secondUser.numero404())

console.log(thirdUser.ricarica(10));
console.log(thirdUser.numero404());
console.log(thirdUser.getNumeroChiamate());
console.log(thirdUser.chiamata(7));
console.log(thirdUser.numero404());
console.log(thirdUser.mostraRegistroChiamate());













