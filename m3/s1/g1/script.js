function gioco(giocatore1, giocatore2) {
  var num = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(num);
  var diffG1 = Math.abs(giocatore1 - num);
  var diffG2 = Math.abs(giocatore2 - num);
  if (giocatore1 === num) {
    console.log("giocatore 1 ha indovinato il numero");
  } else if (giocatore2 === num) {
    console.log("giocatore 2 ha indovinato il numero");
  } else {
    if (diffG1 < diffG2) {
      console.log("il giocatore 1 si é avvicinato al numero");
    } else if (diffG1 > diffG2) {
      console.log("il giocatore 2 si é avvicinato al numero");
    } else {
      console.log("entrambi i giocatori sono alla stessa distanza dal numero");
    }
  }
}
gioco(30, 70);
