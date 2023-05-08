class user {
  constructor(firstName, Lastname, age, location) {
    this.firstName = firstName;
    this.Lastname = Lastname;
    this.age = age;
    this.location = location;
  }
  compareAge(simone) {
    if (this.age > simone.age) {
      return this.firstName + " é piu vecchio di " + simone.firstName;
    } else if (this.age < simone.age) {
      return this.firstName + " é piu giovane di " + simone.firstName;
    } else {
      return this.firstName + " ha la stessa etá " + simone.firstName;
    }
  }
}

let lorenzo = new user("lorenzo", "ferrara", "27", "cava de tirreni");
console.log(lorenzo);
let simone = new user("simone", "carratu", "26", "roma");
console.log(simone);

console.log(lorenzo.compareAge(simone));

// ESERCIZIO 2

const Pet = function (petName, ownerName, species, breed) {
  this.petName = petName || "";
  this.ownerName = ownerName || "";
  this.species = species || "";
  this.breed = breed || "";
};

let pets = [];

let form = document.querySelector("form");

submitButton = form.querySelector("button[type='submit']");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.querySelector("#petName").value;
  let ownerName = document.querySelector("#ownerName").value;
  let species = document.querySelector("#species").value;
  let breed = document.querySelector("#breed").value;

  pets.push(new Pet(name, ownerName, species, breed));

  name = "";
  ownerName = "";
  species = "";
  breed = "";

  console.log(pets);
});
