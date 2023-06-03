// 1.
var array = [];
array.push("hola", "messieur", "cafe", "chinwewecha", "loz");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);    
}

// 2.
for (let i = 0; i < array.length; i++) {        
    console.log(array[i].substring(0,1).toUpperCase() + array[i].substring(1, array[i].length));
    console.log(`La letra ${array[i].substring(0,1)} de la palabra ${array[i]} fue cambiada a mayuscula`);
}

// 3.
var sentence = "";
for (let i = 0; i < array.length; i++) {        
    sentence = sentence + array[i];
}
console.log(sentence);

// 4.
var arrayVacio = [];
for (let i = 0; i < 10; i++) {        
    arrayVacio.push(i);
}
console.log(arrayVacio);
