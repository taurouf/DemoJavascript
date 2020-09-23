'use strict';

/**
* Exercice 1
*/

//My Digital School Forever

'use strict';

/**
* Exercice 1
*/

//My Digital School Forever

/**
* Exercice 2
*/

/**
*My Digital School 
*forever every day
*/

/**
* Exercice 3
*/

var string = "42";
var number = 42;
var float = 42.00;
var boolean = true;
var array = [42];
var date = new Date(4241,12,24,42,42);
var objet = {
    '42' : 42
};
var und;
var empty = null;

console.log(string, number, float, boolean,array,date,objet,und,empty)

/**
* Exercice 4
*/

var my42Count = 'quarante-deux';
var taille = my42Count.length
var my42Count = 'quarante-deux'.length;

console.log(taille);


/**
* Exercice 5
*/

var value;
var check = value || 42
console.log(check);


/**
* Exercice 6
*/

var myArray42 = ['q','u','a','r','a','n','t','e','-','d','e','u','x'];

/**
* Exercice 7
*/



var myArray42Len = myArray42.length;

console.log(myArray42Len);


/**
* Exercice 8
*/

var mot = myArray42.join('') + ' La grande réponse sur la vie, l’univers et le reste !'

console.log(mot);

/**
* Exercice 9
*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} 

var rand = getRandomArbitrary(1, 42);
console.log(rand)

var rand1 = Math.floor((Math.random() * (42)) +1);
console.log(rand1 === 42);

/**
* Exercice 10
*/

var my42Type = [typeof string, typeof number];
console.log(my42Type);



/**
* Exercice 11
*/

var compute42 = 2 * 21;
var toString = compute42.toString();
console.log(toString);


/**
* Exercice 12
*/

var myVar = '42424242';
var plop = myVar.replace(/42/gi,'quarante-deux');
console.log(plop);


/**
* Exercice 13
*/

var a = 24;
var b = 42;
var c = a;
a = c;
b = c;

