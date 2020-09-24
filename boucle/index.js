'use strict'

/**
* Exercice 1
*/
var array = [1,2,3,5,8];

var result = '\n';

for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < 11; j++) {
        result += (array[i]*j) + ' ';
    }
    result += '\n'
}