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

/**
* Exercice 2
*/

var ul=document.createElement('ul');
for (var i = 1; i <= 10; i++) {
  var li = document.createElement('li')
  li.textContent= i + ' x 5 = ' + (i*5);
  ul.appendChild(li)
}
document.body.appendChild(ul);


/**
* Exercice 3
*/

var plop = 0;
while (true) {
      plop ++
      console.log(5*plop)
      if (plop == 10) {
        break
      } 
}
