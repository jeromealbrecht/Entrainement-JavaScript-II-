//Ici je crée une variable x et je demande à l'utilisateur une valeur décimale //
var x = prompt('Donnez moi une note ?');

//Ici je donne une condition


if (x >= 0 && note <= 3) {
  alert("nul");
} else if (note > 3 && note <= 6) {
  alert("moyen");
} else if (note > 6 && note <= 8) {
  alert("Assez bien");
} else if (note > 8 && note < 10) {
  alert("bien");
} else if (note == 10) {
  alert("excellent");
} else alert("erreur");