// Controllo se il browser supporta sessionStorage
if (typeof Storage !== "undefined") {
  // Se la variabile di sessione non esiste, la creo e inizializzo con 0
  if (sessionStorage.contatore) {
    sessionStorage.contatore = Number(sessionStorage.contatore) + 1;
  } else {
    sessionStorage.contatore = 0;
  }
} else {
  console.log("Il tuo browser non supporta sessionStorage");
}

// Funzione che aggiorna il contatore ogni secondo
function startContatore() {
  setInterval(function () {
    // Aggiorno il valore del contatore prendendolo dalla variabile di sessione
    document.getElementById("contatore").innerHTML = sessionStorage.contatore;
    // Incremento la variabile di sessione di 1
    sessionStorage.contatore = Number(sessionStorage.contatore) + 1;
  }, 1000);
}

// Avvio il contatore
startContatore();

let input = document.getElementById("nome");
let saveButton = document.getElementById("save");
let clearButton = document.getElementById("clear");
let anchor = document.getElementById("anchor");
anchor.innerHTML = localStorage.getItem("nome");

saveButton.addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.setItem("NOME", input.value);
  input.value = "";
});

clearButton.addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.removeItem("NOME");
});
