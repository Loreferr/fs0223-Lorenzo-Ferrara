fetch("https://api.pexels.com/v1/search?query=Nature&per_page=9", {
  method: "GET",
  headers: {
    Authorization: "GWTg7SyUVWCyXaQ3sLL2y3pA9zg5dufwU6H8PLxjdr6I6YHMwFtgn6dU",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("kitemmuort");
    }
  })
  .then((photos) => {
    console.log(photos);
    let loadImage = document.getElementById("load1");
    let card = document.getElementsByClassName("card");
    photos.photos.forEach((element, i) => {
      loadImage.addEventListener("click", () => {
        card[i].firstElementChild.remove();
        let image = document.createElement("img");
        image.classList.add("img-fluid");
        image.height = "225";
        image.src = element.src.landscape;
        card[i].prepend(image);
      });
    });
  });

fetch("https://api.pexels.com/v1/search?query=AI&per_page=9", {
  method: "GET",
  headers: {
    Authorization: "GWTg7SyUVWCyXaQ3sLL2y3pA9zg5dufwU6H8PLxjdr6I6YHMwFtgn6dU",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("kitemmuort");
    }
  })
  .then((photos) => {
    console.log(photos);
    let id = document.querySelectorAll(".d-flex .text-muted");
    let loadImage = document.getElementById("load2");
    let card = document.getElementsByClassName("card");
    photos.photos.forEach((element, i) => {
      loadImage.addEventListener("click", () => {
        card[i].firstElementChild.remove();
        let image = document.createElement("img");
        image.classList.add("img-fluid");
        image.height = "225";
        image.src = element.src.landscape;
        card[i].prepend(image);
        id.forEach((element, i) => {
          element.textContent = element.photos.id;
        });
      });
    });
  });

let btnGroup = document.querySelectorAll(".btn-group button:last-child");
let card = document.getElementsByClassName("card");

console.log(btnGroup);

btnGroup.forEach((element) => {
  element.textContent = "hide";
  element.addEventListener("click", () => {
    element.closest(".col-md-4").remove();
  });
});
