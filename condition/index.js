'use strict'

/**
* Exercice 1
*/

var txt;
var age = prompt('Merci de rentrer un age');

if(age == null || age == ""){
  txt = 'Merci de rentrer un age dans le prompt';


}else if (age >=18 && age <=42){
    txt = 'Vous pouvez entrer vous êtes majeur vous avez ' + age;

    
}else if(age >= 42){
    txt = 'vous êtes le patron de la boite'

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