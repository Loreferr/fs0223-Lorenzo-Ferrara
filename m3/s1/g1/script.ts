



function gioco(giocatore1:number,giocatore2:number){
  let num:number = Math.floor(Math.random() * (100 - 1) + 1);
  let diffG1:number = Math.abs(giocatore1 - num)
  let diffG2:number = Math.abs( giocatore2 - num)

  if (giocatore1 === num) {
    console.log("giocatore 1 ha indovinato il numero");
  } else if(giocatore2 === num){
    console.log('giocatore 2 ha indovinato il numero');
  } else{
    if (diffG1 < diffG2) {
        console.log('il giocatore 1 si é avvicinato al numero');
        
        
        
    } else if(diffG1 > diffG2){
        console.log('il giocatore 2 si é avvicinato al numero');
        
    }
  }

}

gioco(45,79)

