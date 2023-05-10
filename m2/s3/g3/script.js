fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("kitemmuort");
    }
  })
  .then((dati) => {
    let row = document.getElementsByClassName("row")[0];
    dati.forEach((element) => {
      row.innerHTML += `<div class="col">
      <div class="card">
        <img src ="${element.img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">
            ${element.price}
          </p>
          <button class="pulsante">Scarta</button>
        </div>
      </div>
    </div>`;

      let card = document.getElementsByClassName("card");
      console.log(card);
      let pulsante = document.getElementsByClassName("pulsante");
      for (const iterator of pulsante) {
        iterator.addEventListener("click", () =>
          iterator.parentElement.parentElement.parentElement.remove()
        );
      }
    });
  });
