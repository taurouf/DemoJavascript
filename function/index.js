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
     * @param {number} height - The txt value.
     * @param {number} width - The txt value.
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

function createMyButton() {
  var btn = document.createElement('button');
  btn.textContent = 'Appyer sur ok'
  document.body.appendChild(btn)
  return btn
}

/**
     * Create a detectMyAgeByNight.
     */


function detectMyAgeByNight() {

var age = parseInt(prompt('Merci de rentrer un age'));

if(age == null || age == ""){
  return alert('Merci de rentrer un age dans le prompt')


}if (age >=18 && age <=42){
    return alert('Vous pouvez entrer vous êtes majeur vous avez ' + age + ' ans')

    
}if(age >= 42){
    return alert('vous êtes le patron de la boite vous avez ' + age + ' ans') 

}if(age <= 18){
    return alert('Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez ' + age + ' ans') 
}
alert("Merci de rentrer un chiffre")
  return detectMyAgeByNigth()

}

var button = createMyButton()
button.addEventListener('click', () => detectMyAgeByNight())

/**
* Exercice 4
*/



