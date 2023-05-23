class Account{
    balanceInit:number
    constructor(_balanceInit:number){
        this.balanceInit = _balanceInit
    }
    oneDeposit(Cifra:number):void{
        this.balanceInit += Cifra
        
        
        console.log('hai depositato ' + Cifra + ' $ ');
        

    }
    OneWithdraw(Cifra:number):void{
        this.balanceInit -= Cifra
        console.log('hai prelevato' + Cifra + ' $ ');
        
    }

    showBalance(Cifra:number):void{
        console.log("Il tuo conto ammonta a " + Cifra + " $ ");
        
    }

    }




class motherAccount extends Account{
    addInterest():void{
        this.balanceInit = this.balanceInit * 1.1
    }
}

let sonAccount = new Account(40)
let MotherAccount = new motherAccount(80)

sonAccount.oneDeposit(20)
console.log(sonAccount);
