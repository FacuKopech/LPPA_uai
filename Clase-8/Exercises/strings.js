// 1.
var stringUpper = "este es un string para convertir en mayuscula";
console.log(stringUpper.toUpperCase());

// 2.
var stringSub = "De este string voy a robar los primeros 5 caracteres";
var substring = stringSub.replace(/\s/g, "").substring(0, 5);
console.log(substring);

// 3.
var stringSub = "De este string voy a robar los ultimos 3 caracteres";
var substring = stringSub.substring(stringSub.length - 3, stringSub.length);
console.log(substring);

// 4.
var stringSub = "de este string voy a dejar la primera en mayuscula y las demas en minuscula";
var substring = stringSub.substring(0, 1).toUpperCase() + stringSub.substring(1, stringSub.length);
console.log(substring);

// 5.
var stringSub = "De este string busco algun espacio en blanco";
var substring = stringSub.indexOf(" ");
console.log(substring);

// 6.
var stringSub = "increiblemente insoportable";
var substring = stringSub.substring(0,1).toUpperCase() + stringSub.substring(1, stringSub.length - stringSub.indexOf(" ")+2) + stringSub.substring(stringSub.indexOf(" ")+1, stringSub.indexOf(" ")+2).toUpperCase() + 
stringSub.substring(stringSub.indexOf(" ")+2, stringSub.length); 
console.log(substring);


