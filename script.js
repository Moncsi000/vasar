const ide = document.getElementById("ide");
const gomb = document.getElementById("gomb");
const db = document.getElementById("db");


function szamol() {
  if (diak.checked) {
    ide.innerHTML = 2000 * (Number)(db.value )+ " Ft";
  }

  else {
    ide.innerHTML = 4000 * (Number)(db.value) + " Ft";

  }
}

gomb.addEventListener("click", szamol);



