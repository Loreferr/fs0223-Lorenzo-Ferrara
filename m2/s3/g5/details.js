const PIXELS_SINGLE_URL = "https://striveschool-api.herokuapp.com/api/product/";

const fillDetailsPage = function (event) {
  console.log("sono dentro fill detailspage");
  let colContent = `
    
        <div>
        <img src=${event.imageUrl} style="width: 500px"/>
        </div>
        <div class="border rounded-5 p-3">
        <div>
        <h5 class="fs-1">${event.name}</h5>
        <p>${event.brand}</p>

        </div>
        <span class="bg-body-secondary py-1 px-1 border rounded-3">${event.price}€</span>
        <p>${event.description}</p>

        <div>
        <a class="btn btn-outline-secondary" href="homepage.html">INDIETRO</a>
        </div>
        </div>
    `;
  let colToFill = document.getElementById("column");
  colToFill.innerHTML = colContent;
};

const getSingleProduct = function () {
  let eventIdFromAddressBar = new URLSearchParams(window.location.search).get(
    "eventId"
  );
  fetch(PIXELS_SINGLE_URL + eventIdFromAddressBar, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTRjNzg4Zjc0MDAwMTQyODc0MzQiLCJpYXQiOjE2ODM4NzUwMTUsImV4cCI6MTY4NTA4NDYxNX0.UhZMEpCcZJmZtlPfSyEdcq34wjasu6-Wo05gDtHuyTA",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error getting single image details");
      }
    })
    .then((singleProductDetails) => {
      console.log("xdxdxd");
      console.log("SINGLE PRODUCT DETAILS", singleProductDetails);
      fillDetailsPage(singleProductDetails);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = function () {
  getSingleProduct();
};
