abstract class redditoAnnuo {
    codredd:number
    redditoAnnuoLordo:number
    tasseInps?:number
    tasseIrpef?:number
    constructor(_codredd:number,
        _redditoAnnuoLordo:number,
        _tasseInps?:number,
        _tasseIrpef?:number) {
            this.codredd = _codredd;
            this.redditoAnnuoLordo = _redditoAnnuoLordo;
            this.tasseInps = _tasseInps;
            this.tasseIrpef = _tasseIrpef;
        
    }
    abstract getUtileTasse():number
    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getRedditoAnnuoNetto():number
}

class redditoLavoratore extends redditoAnnuo {

    getUtileTasse():number{
        if (this.redditoAnnuoLordo < 15000) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo -(this.redditoAnnuoLordo *0.23)
        } else if (this.redditoAnnuoLordo > 15001 && this.redditoAnnuoLordo < 28000) {
     this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.redditoAnnuoLordo *0.25)}
     else if (this.redditoAnnuoLordo > 28001 && this.redditoAnnuoLordo < 50000) {
        this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.redditoAnnuoLordo *0.35)}
        else  {this.redditoAnnuoLordo = this.redditoAnnuoLordo -(this.redditoAnnuoLordo *0.43)}
        return this.redditoAnnuoLordo
     }

     getTasseInps():number{
        this.tasseInps = this.redditoAnnuoLordo * 0.24
        return this.tasseInps
     }

     getTasseIrpef():number{
        if (this.redditoAnnuoLordo < 15000) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo *0.23
          }
          else if (this.redditoAnnuoLordo < 28000 && this.redditoAnnuoLordo > 15001) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo *0.25
          }
          else if (this.redditoAnnuoLordo < 35000 && this.redditoAnnuoLordo > 28001) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo *0.35
          }
          else {this.redditoAnnuoLordo = this.redditoAnnuoLordo* 0.48}
          return this.redditoAnnuoLordo
}

    getRedditoAnnuoNetto():number{
        this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
        return this.redditoAnnuoLordo
    }
}

let Giulio = new redditoLavoratore(2,25000)
console.log(Giulio.getTasseInps());

console.log(Giulio.getRedditoAnnuoNetto());
