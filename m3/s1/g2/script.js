"use strict";
class Account {
    constructor(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    oneDeposit(Cifra) {
        this.balanceInit += Cifra;
        console.log('hai depositato ' + Cifra + ' $ ');
    }
    OneWithdraw(Cifra) {
        this.balanceInit -= Cifra;
        console.log('hai prelevato' + Cifra + ' $ ');
    }
    showBalance(Cifra) {
        console.log("Il tuo conto ammonta a " + Cifra + " $ ");
    }
}
class motherAccount extends Account {
    addInterest() {
        this.balanceInit = this.balanceInit * 1.1;
    }
}
let sonAccount = new Account(40);
let MotherAccount = new motherAccount(80);
sonAccount.oneDeposit(20);
console.log(sonAccount);
