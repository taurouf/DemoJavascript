'use strict'

/**
* Exercice 1
*/

var txt;
var age = parseInt(prompt('Merci de rentrer un age'));

if(age == null || age == ""){
  txt = 'Merci de rentrer un age dans le prompt';


}else if (age >=18 && age <=42){
    txt = 'Vous pouvez entrer vous êtes majeur vous avez ' + age;

    
}else if(age >= 42){
    txt = 'vous êtes le patron de la boite' + age

}else if(age <= 18){
    txt = 'Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez' + age;
}


/**
* Exercice 2
*/

var txt;
var rand =  Math.floor(Math.random() * (30 - 0)) + 0;
console.log(rand);

if (rand >= 0 && rand <=10) {
    txt = 'Cool'
}else if(rand >= 11 && rand <= 20){
    txt='Tepid'
}else if(rand >= 21 && rand <= 30){
    txt= 'warm'
}else{
    txt = 'c/est pas possible'
}

/**
* Exercice 3
*/

switch (new Date().getDay()) {
  case 0:
    day = "Nous somme Dimanche";
    break;
  case 1:
    day = "Nous somme Lundi";
    break;
  case 2:
     day = "Nous somme Mardi";
    break;
  case 3:
    day = "Nous somme Mercredi";
    break;
  case 4:
    day = "Nous somme Jeudi";
    break;
  case 5:
    day = "Nous somme Vendredi";
    break;
  case 6:
    day = "Nous somme Samedi";
}

console.log('nous sommes' + switch)

/**
* Exercice 4
*/

var txt= prompt('Merci de saisir un chiffre entre 1 et 3')

if (age == null || age == "") {
    txt = alert('Merci de saisir un chiffre entre 1 et 3');
    
} else if (txt == 1) {
    txt = alert('C/est la fin de l/histoire 1');
    
}else if (txt == 2) {
    txt = alert('C/est la fin de l/histoire 2');
}else if(txt == 3){
  txt = alert('La grande réponse sur la vie, l’univers et le reste !');
}


/**
* Exercice 5
*/

// ce n'est pas possible car le return n'est possible seulement dans une fonction

/**
* Exercice 6
*/

existed ? alert(42):alert('cette variable n\'existe pas');

/**
* Exercice 7
*/


var familyNumber = (Number(prompt("Entrez un nombre :"))).toString().split('')

switch (familyNumber.length) {
  case 1:
    alert(`${familyNumber.join("")} appartient à la famille des 0`)
    break;
  case 2:
    switch (Number(familyNumber[0])) {
      case 1:
        alert(`${familyNumber.join('')} appartient à la famille des 10`)
        break;
      case 2:
        alert(`${familyNumber.join('')} appartient à la famille des 20`)
        break;
      case 3:
        alert(`${familyNumber.join('')} appartient à la famille des 30`)
        break;
      case 4:
        alert(`${familyNumber.join('')} appartient à la famille des 40`)
        break;
      default:
        alert("Ce nombre contient bien 2 chiffres mais est supérieur à 50 !")
        break;
    }
    break;
  default:
    alert("Ceci n'est pas un nombre ou un nombre au dessus de 100")
    break;
}







