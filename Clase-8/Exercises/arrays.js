// 1.
var array = [];
array.push("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
console.log(array[4], array[10]);

// 2.
console.log(array.sort());

// 3.
array.unshift("Start");
array.push("End");
console.log(array);

// 4.
array.shift();
array.pop();
console.log(array);

// 5.
console.log(array.reverse());

// 6.
console.log(array.join("-"));

// 7.
var array = [];
array.push("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var newArray = array.slice(4, 11);
console.log(newArray);