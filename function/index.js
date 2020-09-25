'use strict'

/**
* Exercice 1
*/

/**
 * myPutStr
 * @param {number || string} str
 * @return {String} toString
 */
function myPutStr(str) {
    if (typeof str !== "string") {
        return "Et pourquoi pas 42 ?";
    }
    return str;
}
console.log(myPutStr('15'));
console.log(myPutStr(15));

/**
* Exercice 2
*/

/**
     * Create a compute Surface M2.
     * @param {number} length - The height value.
     * @param {number} width - The width value.
     * @return {number} totalM2
     */

function computeSurfaceM2(length, height){
  if ((typeof length !== "number") || (height !== "number")) {
    return new Error('merci de mettre un chiffre');


  }

  return length * width;


};
computeSurfaceM2(rectange)

/**
* Exercice 3
*/

/**
     * Create a createMyButton.
     */

function createMyButton() {
  var btn = document.createElement('button');
  btn.textContent = 'Appuyer sur ok'
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

function matrixGenerator(array){
    var matrix = document.createElement("table");
    for (var i=0;i<array.length;i++){
        var tr = document.createElement("tr");
        for(var j=0;j<array[i].length;j++){
          var td = document.createElement("td");
          td.insertAdjacentHTML("beforeend","<span>"+array[i][j]+"</span>");
          tr.appendChild(td);
        }
        matrix.appendChild(tr);
    }
    document.querySelector("body").appendChild(matrix);
}
matrixGenerator(
[[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]
);



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

var arrayFibonacci = [1];
var newArrayFibonacci = [];
var i = 0;
function computeFibonacci(arrayFibonacci) {
    i++;
    if (arrayFibonacci.length == 1) {
        arrayFibonacci[i] = 1;
        computeFibonacci(arrayFibonacci);
    }
    if (i < 10) {
       arrayFibonacci[i] = arrayFibonacci[i-1]+arrayFibonacci[i-2];
       computeFibonacci(arrayFibonacci);
    }
}
function saveFibonacci() {
    newArrayFibonacci = arrayFibonacci;
}
function sortFibonacci(newArrayFibonacci) {
    for (var i = 0; i < newArrayFibonacci.length; i++){
        for (var j = 0, stop = newArrayFibonacci.length-i; j < stop; j++){
            if (newArrayFibonacci[j] > newArrayFibonacci[j+1]){
                var temp = newArrayFibonacci[j];
                newArrayFibonacci[j] = items[j+1];
                newArrayFibonacci[j+1] = temp;
            }
        }
    }
    return newArrayFibonacci;
}
function totalFibonacci(arrayFibonacci) {
    var total = 0;
    for (i = 0; i < arrayFibonacci.length; i++) {
        total += arrayFibonacci[i];
    }
    return total;
}
computeFibonacci(arrayFibonacci);
console.log(arrayFibonacci);
saveFibonacci(arrayFibonacci,newArrayFibonacci);
sortFibonacci(newArrayFibonacci);
console.log(totalFibonacci(arrayFibonacci));



