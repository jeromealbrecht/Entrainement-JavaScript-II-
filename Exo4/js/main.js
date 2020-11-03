//Ici je crée une variable x et je demande à l'utilisateur une valeur décimale //
let x = prompt('Donnez moi une note?');

//Ici je donne une condition


switch (true) {
  case x >= 0 && x <= 3:
    alert("nul")
    break;
  case x >= 4 && x <= 6:
    alert("moyen")
    break
  case x >= 6 && x <= 8:
    alert("Assez bien")
    break
  case x >= 8 && x <= 9:
    alert("bien");
    break
  case x === 10:
    alert("excellent")
    break;
  default:
    alert("Debug")
}