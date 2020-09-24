'use strict'

/**
* Exercice 1
*/

/**
     * Create a myPutStr.
     * @param {number, string} txt - The txt value.
     */

// function myPutStr(txt){
//     if(txt = !isNaN(txt)){
//         return "bravo c'est un chiffre"
//     }
//     return "ta perdu"
//   }

// myPutStr('d')

/**
* Exercice 2
*/

/**
     * Create a computeSurfaceM2.
     * @param {number} height - The height value.
     * @param {number} width - The width value.
     */

// function computeSurfaceM2(width, height){
//   if (typeof value === "string") {
//     return 'merci de mettre un chiffre'


//   }

//   return width*height;


// }
// computeSurfaceM2(rectange)

/**
* Exercice 3
*/

/**
     * Create a createMyButton.
     */

// function createMyButton() {
//   var btn = document.createElement('button');
//   btn.textContent = 'Appyer sur ok'
//   document.body.appendChild(btn)
//   return btn
// }

/**
     * Create a detectMyAgeByNight.
     */


// function detectMyAgeByNight() {

// var age = parseInt(prompt('Merci de rentrer un age'));

// if(age == null || age == ""){
//   return alert('Merci de rentrer un age dans le prompt')


// }if (age >=18 && age <=42){
//     return alert('Vous pouvez entrer vous êtes majeur vous avez ' + age + ' ans')

    
// }if(age >= 42){
//     return alert('vous êtes le patron de la boite vous avez ' + age + ' ans') 

// }if(age <= 18){
//     return alert('Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez ' + age + ' ans') 
// }
// alert("Merci de rentrer un chiffre")
//   return detectMyAgeByNigth()

// }

// var button = createMyButton()
// button.addEventListener('click', () => detectMyAgeByNight())

/**
* Exercice 4
*/

// function matrixGenerator(){

// }

/**
* Exercice 5
*/


/**
     * Create a clock.
     */

window.onload = function clock(){
  var tab_jours = new Array('Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi')
  var tab_mois = new Array('Janvier','Fevrier','Mars', 'Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre')
  var date = new Date();
  document.querySelector('#date').textContent = tab_jours[date.getDay()] + ' ' + date.getDate() + ' ' + tab_mois[date.getMonth()] + ' ' + date.getFullYear();
   setInterval('lire_heure()', 1000);
}

function lire_heure(){

var date = new Date();
document.querySelector('#heure').textContent = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


}

/**
* Exercice 6
*/


/**
     * Create a fibonacci.
     * @param {number} nbr - The nbr value
     */



function fibonacci(nbr) {
  if(nbr < 2){
    return nbr;
  }

  return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}

console.log(fibonacci(8));



