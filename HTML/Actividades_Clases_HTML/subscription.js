
// NOMBRE COMPLETO
const fullName = document.querySelector('input[id="fname"]');
const fullNameError = document.querySelector('span[id="nameError"]'); 
const welcome = document.querySelector('label[id="welcome"]'); 
fullName.addEventListener("blur", (event) => {      
    if(event.target.value.length <= 6){                
        fullNameError.textContent = "El nombre debe contener mas de 6 caracteres";
        fullNameError.style.display = "flex";
        fullNameError.style.color  = "red";        
    }else{
        if(!event.target.value.includes(" ")){
            fullNameError.textContent = "El nombre debe contener un espacio entre medio";
            fullNameError.style.display = "flex";
            fullNameError.style.color  = "red";            
        }else{
            fullNameError.textContent = "";
        }        
    }
  });

  fullName.addEventListener("focus", (event) => { 
    fullNameError.textContent = "";    
  });

  fullName.addEventListener("input", (event) =>{
    welcome.textContent = event.target.value;
  });

// EMAIL
const email = document.querySelector('input[id="email"]');
const fullemailError = document.querySelector('span[id="emailError"]');   
email.addEventListener("blur", (event) => {     
    if(!event.target.value.includes("@") || !event.target.value.includes(".com") || event.target.value.includes(" ")){                
        fullemailError.textContent = "El email debe tener un formato valido";
        fullemailError.style.display = "flex";
        fullemailError.style.color  = "red";        
    }else{
        fullemailError.textContent = "";        
    }
  });

  email.addEventListener("focus", (event) => { 
    fullemailError.textContent = "";    
  });

  // EDAD
const edad = document.querySelector('input[id="edad"]');
const fulledadError = document.querySelector('span[id="edadError"]');   
edad.addEventListener("blur", (event) => {     
    if(event.target.value >= 18){                
        fulledadError.textContent = "";        
    }else{
        fulledadError.textContent = "Debe ser mayor a 18 y ser un numero entero";
        fulledadError.style.display = "flex";
        fulledadError.style.color  = "red";    
    }
  });

  edad.addEventListener("focus", (event) => { 
    fulledadError.textContent = "";    
  });

    // TELEFONO
const tel = document.querySelector('input[id="tel"]');
const fulltelError = document.querySelector('span[id="telError"]');   
tel.addEventListener("blur", (event) => {     
    if(event.target.value.length < 7 || event.target.value.includes(" ") || event.target.value.includes("-") || event.target.value.includes("()")){                
        fulltelError.textContent = "El numero de telefono debe tener al menos 7 digitos, y no contener espacios, '-' ni '()'";
        fulltelError.style.display = "flex";
        fulltelError.style.color  = "red";            
    }else{
        fulltelError.textContent = "";                
    }
  });

  tel.addEventListener("focus", (event) => { 
    fulltelError.textContent = "";    
  });

      // DIRECCION
const dire = document.querySelector('input[id="dire"]');
const fulldireError = document.querySelector('span[id="direError"]');   
dire.addEventListener("blur", (event) => {     
    if(event.target.value.length < 5 || !/\d/.test(event.target.value) || !event.target.value.includes(" ") || !/[a-zA-Z]/.test(event.target.value)){                
        fulldireError.textContent = "La direccion debe tener al menos 5 caracteres, con letras, numeros y un espacio";
        fulldireError.style.display = "flex";
        fulldireError.style.color  = "red";            
    }else{
        fulldireError.textContent = "";                
    }
  });

  dire.addEventListener("focus", (event) => { 
    fulldireError.textContent = "";    
  });

        // CIUDAD
const ciudad = document.querySelector('input[id="ciudad"]');
const fullciudadError = document.querySelector('span[id="ciudadError"]');   
ciudad.addEventListener("blur", (event) => {     
    if(event.target.value.length < 3){                
        fullciudadError.textContent = "La ciudad debe contener al menos 3 caracteres";
        fullciudadError.style.display = "flex";
        fullciudadError.style.color  = "red";            
    }else{
        fullciudadError.textContent = "";                
    }
  });

  ciudad.addEventListener("focus", (event) => { 
    fullciudadError.textContent = "";    
  });

          // CP
const CP = document.querySelector('input[id="CP"]');
const fullCPError = document.querySelector('span[id="CPError"]');   
CP.addEventListener("blur", (event) => {     
    if(event.target.value.length < 3){                
        fullCPError.textContent = "El Codigo Postal (CP) debe contener al menos 3 caracteres";
        fullCPError.style.display = "flex";
        fullCPError.style.color  = "red";            
    }else{
        fullCPError.textContent = "";                
    }
  });

  CP.addEventListener("focus", (event) => { 
    fullCPError.textContent = "";    
  });

            // DNI
const DNI = document.querySelector('input[id="DNI"]');
const fullDNIError = document.querySelector('span[id="DNIError"]');   
DNI.addEventListener("blur", (event) => {     
    if(String(event.target.value).length < 7 || String(event.target.value).length > 8){                
        fullDNIError.textContent = "El DNI debe contener entre 7 u 8 digitos";
        fullDNIError.style.display = "flex";
        fullDNIError.style.color  = "red";            
    }else{
        fullDNIError.textContent = "";                
    }
  });

  DNI.addEventListener("focus", (event) => { 
    fullDNIError.textContent = "";    
  });

              // CLAVE
const password = document.querySelector('input[id="password"]');
const fullpasswordError = document.querySelector('span[id="claveError"]');   
password.addEventListener("blur", (event) => {     
    if(String(event.target.value).length < 8 || !/\d/.test(String(event.target.value)) || !/[a-zA-Z]/.test(String(event.target.value))){                
        fullpasswordError.textContent = "La clave debe contener al menos 8 caracteres y ser alfanumerica";
        fullpasswordError.style.display = "flex";
        fullpasswordError.style.color  = "red";            
    }else{
        fullpasswordError.textContent = "";                
    }
  });

  password.addEventListener("focus", (event) => { 
    fullpasswordError.textContent = "";    
  });

                // REPETIR CLAVE
const REpassword = document.querySelector('input[id="re-password"]');
const fullREpasswordError = document.querySelector('span[id="reClaveError"]');   
REpassword.addEventListener("blur", (event) => {     
    if(String(event.target.value) !== password.value){                
        fullREpasswordError.textContent = "Las claves no coinciden";
        fullREpasswordError.style.display = "flex";
        fullREpasswordError.style.color  = "red";            
    }else{
        fullREpasswordError.textContent = "";                
    }
  });

  REpassword.addEventListener("focus", (event) => { 
    fullpasswordError.textContent = "";    
  });


var form = document.querySelector('form[id="myForm"]');
var popupContainer = document.querySelector('div[id="popupContainer"]');
var popupContent = "";  

form.addEventListener("submit", event => {
  event.preventDefault(); 
  var formInputs = form.querySelectorAll("input, span");      
  popupContent = "<h2>Datos Ingresados:</h2>";
for (var i = 0; i < formInputs.length; i++) {
    var input = formInputs[i];
    var inputName = input.name;
    var inputValue = input.value;    
    if(input.type === "password" || input.type === "submit"){
        inputValue = "";
    }
    else{
        if(input.tagName === "SPAN" && input.value !== ""){
            inputValue = input.textContent;        
            elementName = input.getAttribute("data-name");
            inputName = elementName;            
        }
    }    
    if (inputValue) {
      popupContent += `<p style="font-weight: bold;">` + inputName + ": " + inputValue + "</p>";
    }
  }
  popupContent += `<div class="divButtons"><button class="btnPopup" onclick="acceptAction()"> Aceptar </button> <button class="btnPopup" onclick="cancelAction()">Cancelar</button></div>`;  
  popupContainer.innerHTML = popupContent;   
  
  popupContainer.style.display = "flex";    
});
function acceptAction(){
    if(!popupContent.includes("Error")){
        var form = document.querySelector('form[id="myForm"]');
        form.submit();          
    }
    popupContainer.style.display = "none";  
    popupContent = "";  
  }

  function cancelAction(){
    popupContainer.style.display = "none";          
  }
