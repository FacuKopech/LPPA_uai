// 1.
function Suma(number1, number2){
    return (number1 + number2);
}

console.log(Suma(20, 10));

// 2.
function Suma(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        return ("NaN");
    }else{
        return (number1 + number2);
    }
}

console.log(Suma(20, "hola"));

// 3.
function ValidateInteger(number){
    if(Number.isInteger(number)){
        return true;
    }else{
        return false;
    }
}
console.log(ValidateInteger(24.5));

// 4.
function Suma(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        return ("NaN");
    }else{
        if(Number.isInteger(number1) && Number.isInteger(number2)){
            return number1 + number2;
        }else{
            if(number1 !== Math.floor(number1) || number2 !== Math.floor(number2)){
                return `ALERTA: Numero con decimales. Redondeando numeros: ${Math.round(number1)}; ${Math.round(number2)}`;
            }
        }  
    }
}

console.log(Suma(4,2.89));

// 5.
function Suma(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        return ("NaN");
    }else{
        if(!ValidateIntegers(number1, number2)){
            return `ALERTA: Numero con decimales. Redondeando numeros: ${Math.round(number1)}; ${Math.round(number2)}`;
        }else{
            return (number1 + number2);
        }        
    }
}

function ValidateIntegers(number1, number2){
    if(Number.isInteger(number1) && Number.isInteger(number2)){
        return true;
    }else{
        if(number1 !== Math.floor(number1) || number2 !== Math.floor(number2)){
            return false;
        }
    }
}

console.log(Suma(1.5,2.89));