let nameInput = document.getElementById("name");
let descriptionInput = document.getElementById("description");
let brandInput = document.getElementById("brand");
let priceInput = document.getElementById("price");
let imageInput = document.getElementById("img");
let rowReference = document.getElementById("product-container");

let saveButton = document.getElementById("save-button");
let deleteButton = document.getElementById("delete-button");
let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";

function Product(
  name = nameInput.value,
  description = descriptionInput.value,
  brand = brandInput.value,
  price = priceInput.value,
  image = imageInput.value
) {
  this.name = name;
  this.description = description;
  this.brand = brand;
  this.price = price;
  this.imageUrl = image;
}

let getProduct = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTRjNzg4Zjc0MDAwMTQyODc0MzQiLCJpYXQiOjE2ODM4NzUwMTUsImV4cCI6MTY4NTA4NDYxNX0.UhZMEpCcZJmZtlPfSyEdcq34wjasu6-Wo05gDtHuyTA",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("error");
      }
    })
    .then((data) => {
      data.forEach((event) => {
        let colTemplate = `
              <div class="col-12 col-md-3">
                <div class="card shadow-lg border-0">
                <img class="w-100" style="height:300px" src="${event.imageUrl}" alt="">
                  <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    
                    <p class="card-text">
                      ${event.brand}
                    </p>
                    <p>${event.description}</p>
                    <p>${event.price}€</p>
                    <a href="backoffice.html?eventId=${event._id}" class="btn btn-primary ms-1">MODIFICA</a>
                    <a href="details.html?eventId=${event._id}" class="btn btn-primary" data-toggle="modal" data-target="#examp">SCOPRI DI PIU</a>
                  </div>
                </div>
              </div>
              
              `;

        rowReference.innerHTML += colTemplate;
      });
    });
};

window.onload = () => {
  getProduct();
};

fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTRjNzg4Zjc0MDAwMTQyODc0MzQiLCJpYXQiOjE2ODM4NzUwMTUsImV4cCI6MTY4NTA4NDYxNX0.UhZMEpCcZJmZtlPfSyEdcq34wjasu6-Wo05gDtHuyTA",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("kitemmuort");
    }
  })
  .then((product) => {})
  .catch((error) => {
    console.log(error);
  });

saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(
    eventId
      ? "https://striveschool-api.herokuapp.com/api/product/" + eventId
      : "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: eventId ? "PUT" : "POST",
      body: JSON.stringify(new Product()),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTRjNzg4Zjc0MDAwMTQyODc0MzQiLCJpYXQiOjE2ODM4NzUwMTUsImV4cCI6MTY4NTA4NDYxNX0.UhZMEpCcZJmZtlPfSyEdcq34wjasu6-Wo05gDtHuyTA",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      location.assign("homepage.html");
      console.log(res);
    })

    .catch((error) => {
      console.log(error);
    });
});

let addressBarContent = new URLSearchParams(window.location.search);

let eventId = addressBarContent.get("eventId");

deleteButton.addEventListener("click", () => {
  fetch(
    eventId
      ? "https://striveschool-api.herokuapp.com/api/product/" + eventId
      : "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTRjNzg4Zjc0MDAwMTQyODc0MzQiLCJpYXQiOjE2ODM4NzUwMTUsImV4cCI6MTY4NTA4NDYxNX0.UhZMEpCcZJmZtlPfSyEdcq34wjasu6-Wo05gDtHuyTA",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        alert("eliminazione completata con successo");
        location.assign("homepage.html");
      } else {
        throw new Error("Problema nell'eliminazione dell'evento");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

/* fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(new Product()),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTRjNzg4Zjc0MDAwMTQyODc0MzQiLCJpYXQiOjE2ODM4NzUwMTUsImV4cCI6MTY4NTA4NDYxNX0.UhZMEpCcZJmZtlPfSyEdcq34wjasu6-Wo05gDtHuyTA",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .then((product) => {
      console.log(product);
    })
    .catch((error) => {
      console.log(error);
    });
});*/
