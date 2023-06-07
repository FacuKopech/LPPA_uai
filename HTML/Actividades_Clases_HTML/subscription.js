// NOMBRE COMPLETO
const fullName = document.querySelector('input[id="fname"]');
const fullNameError = document.querySelector('span[id="nameError"]'); 
const welcome = document.querySelector('label[id="welcome"]'); 
fullName.addEventListener("blur", (event) => {      
    if(event.target.value.length <= 6){                
        fullNameError.textContent = "El nombre debe contener mas de 6 caracteres";
        fullNameError.style.display = "flex";
        fullNameError.style.color  = "red";    
        fullName.style.border = "2px solid red";      
    }else{
        if(!event.target.value.includes(" ")){
            fullNameError.textContent = "El nombre debe contener un espacio entre medio";
            fullNameError.style.display = "flex";
            fullNameError.style.color  = "red";    
            fullName.style.border = "2px solid red";          
        }else{
            fullNameError.textContent = "";
            fullName.style.border = "2px solid darkgreen";  
        }        
    }
  });

  fullName.addEventListener("focus", (event) => { 
    fullNameError.textContent = "";  
    fullName.style.border = "none";  
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
        email.style.border = "2px solid red";          
    }else{
        fullemailError.textContent = "";        
        email.style.border = "2px solid darkgreen";  
    }
  });

  email.addEventListener("focus", (event) => { 
    fullemailError.textContent = "";   
    email.style.border = "none";  
  });

  // EDAD
const edad = document.querySelector('input[id="edad"]');
const fulledadError = document.querySelector('span[id="edadError"]');   
edad.addEventListener("blur", (event) => {     
    if(event.target.value >= 18){                
        fulledadError.textContent = "";    
        edad.style.border = "2px solid darkgreen";     
    }else{
        fulledadError.textContent = "Debe ser mayor a 18 y ser un numero entero";
        fulledadError.style.display = "flex";
        fulledadError.style.color  = "red";   
        edad.style.border = "2px solid red";  
    }
  });

  edad.addEventListener("focus", (event) => { 
    fulledadError.textContent = "";    
    edad.style.border = "none"; 
  });

    // TELEFONO
const tel = document.querySelector('input[id="tel"]');
const fulltelError = document.querySelector('span[id="telError"]');   
tel.addEventListener("blur", (event) => {     
    if(event.target.value.length < 7 || event.target.value.includes(" ") || event.target.value.includes("-") || event.target.value.includes("()")){                
        fulltelError.textContent = "El numero de telefono debe tener al menos 7 digitos, y no contener espacios, '-' ni '()'";
        fulltelError.style.display = "flex";
        fulltelError.style.color  = "red"; 
        tel.style.border = "2px solid red";            
    }else{
        fulltelError.textContent = "";  
        tel.style.border = "2px solid darkgreen";               
    }
  });

  tel.addEventListener("focus", (event) => { 
    fulltelError.textContent = "";  
    tel.style.border = "none";   
  });

      // DIRECCION
const dire = document.querySelector('input[id="dire"]');
const fulldireError = document.querySelector('span[id="direError"]');   
dire.addEventListener("blur", (event) => {     
    if(event.target.value.length < 5 || !/\d/.test(event.target.value) || !event.target.value.includes(" ") || !/[a-zA-Z]/.test(event.target.value)){                
        fulldireError.textContent = "La direccion debe tener al menos 5 caracteres, con letras, numeros y un espacio";
        fulldireError.style.display = "flex";
        fulldireError.style.color  = "red";  
        dire.style.border = "2px solid red";          
    }else{
        fulldireError.textContent = "";  
        dire.style.border = "2px solid darkgreen";              
    }
  });

  dire.addEventListener("focus", (event) => { 
    fulldireError.textContent = "";   
    dire.style.border = "none"; 
  });

        // CIUDAD
const ciudad = document.querySelector('input[id="ciudad"]');
const fullciudadError = document.querySelector('span[id="ciudadError"]');   
ciudad.addEventListener("blur", (event) => {     
    if(event.target.value.length < 3){                
        fullciudadError.textContent = "La ciudad debe contener al menos 3 caracteres";
        fullciudadError.style.display = "flex";
        fullciudadError.style.color  = "red";         
        ciudad.style.border = "2px solid red";
    }else{
        fullciudadError.textContent = "";  
        ciudad.style.border = "2px solid darkgreen";              
    }
  });

  ciudad.addEventListener("focus", (event) => { 
    fullciudadError.textContent = ""; 
    ciudad.style.border = "none";   
  });

          // CP
const CP = document.querySelector('input[id="CP"]');
const fullCPError = document.querySelector('span[id="CPError"]');   
CP.addEventListener("blur", (event) => {     
    if(event.target.value.length < 3){                
        fullCPError.textContent = "El Codigo Postal (CP) debe contener al menos 3 caracteres";
        fullCPError.style.display = "flex";
        fullCPError.style.color  = "red";   
        CP.style.border = "2px solid red";          
    }else{
        fullCPError.textContent = "";   
        CP.style.border = "2px solid darkgreen";              
    }
  });

  CP.addEventListener("focus", (event) => { 
    fullCPError.textContent = "";    
    CP.style.border = "none"; 
  });

            // DNI
const DNI = document.querySelector('input[id="DNI"]');
const fullDNIError = document.querySelector('span[id="DNIError"]');   
DNI.addEventListener("blur", (event) => {     
    if(String(event.target.value).length < 7 || String(event.target.value).length > 8){                
        fullDNIError.textContent = "El DNI debe contener entre 7 u 8 digitos";
        fullDNIError.style.display = "flex";
        fullDNIError.style.color  = "red"; 
        DNI.style.border = "2px solid red";            
    }else{
        fullDNIError.textContent = "";    
        DNI.style.border = "2px solid darkgreen";             
    }
  });

  DNI.addEventListener("focus", (event) => { 
    fullDNIError.textContent = "";  
    DNI.style.border = "none";   
  });

              // CLAVE
const password = document.querySelector('input[id="password"]');
const fullpasswordError = document.querySelector('span[id="claveError"]');   
password.addEventListener("blur", (event) => {     
    if(String(event.target.value).length < 8 || !/\d/.test(String(event.target.value)) || !/[a-zA-Z]/.test(String(event.target.value))){                
        fullpasswordError.textContent = "La clave debe contener al menos 8 caracteres y ser alfanumerica";
        fullpasswordError.style.display = "flex";
        fullpasswordError.style.color  = "red"; 
        password.style.border = "2px solid red";           
    }else{
        fullpasswordError.textContent = "";                
        password.style.border = "2px solid darkgreen"; 
                        
    }
  });

  password.addEventListener("focus", (event) => { 
    fullpasswordError.textContent = "";    
    password.style.border = "none";
  });

                // REPETIR CLAVE
const REpassword = document.querySelector('input[id="re-password"]');
const fullREpasswordError = document.querySelector('span[id="reClaveError"]');   
REpassword.addEventListener("blur", (event) => {     
    if(String(event.target.value) !== password.value){                
        fullREpasswordError.textContent = "Las claves no coinciden";
        fullREpasswordError.style.display = "flex";
        fullREpasswordError.style.color  = "red";
        REpassword.style.border = "2px solid red";             
    }else{
      if(String(event.target.value) == ""){
        fullREpasswordError.textContent = "Este campo es requerido";
        fullREpasswordError.style.display = "flex";
        fullREpasswordError.style.color  = "red";
        REpassword.style.border = "2px solid red";
      }else{
        fullREpasswordError.textContent = "";                
        REpassword.style.border = "2px solid darkgreen"; 
      }        
    }
  });

  REpassword.addEventListener("focus", (event) => { 
    fullREpasswordError.textContent = "";   
    REpassword.style.border = "none";    
  });


var form = document.querySelector('form[id="myForm"]');
var popupContainer = document.querySelector('div[id="popupContainer"]');
var popupContent = "";  

form.addEventListener("submit", event => {    
  event.preventDefault(); 
  var formInputs = form.querySelectorAll("input, span");      
  popupContent = "<h2>Datos Ingresados:</h2>";
  let counter = 0;
  let elementCount = 0;
  for(var i = 0; i < formInputs.length; i++){
    if(formInputs[i].type === "password" || formInputs[i].type === "email" || formInputs[i].type === "text" || formInputs[i].type === "number"){
      elementCount = elementCount + 1;
      if(formInputs[i].value == ""){
        counter = counter + 1;
      }
    }
    
  }
  if(counter !== 0){
    popupContainer.style.display = "none"; 
    fullName.style.border = "2px solid red";
    email.style.border = "2px solid red";
    edad.style.border = "2px solid red";
    tel.style.border = "2px solid red";
    dire.style.border = "2px solid red";
    ciudad.style.border = "2px solid red";
    CP.style.border = "2px solid red";
    DNI.style.border = "2px solid red";
    password.style.border = "2px solid red";
    REpassword.style.border = "2px solid red";

    fullNameError.textContent = "Nombre requerido";
    fullNameError.style.display = "flex";
    fullNameError.style.color  = "red";

    fullemailError.textContent = "Email requerido";
    fullemailError.style.display = "flex";
    fullemailError.style.color  = "red";

    fulledadError.textContent = "Edad requerida";
    fulledadError.style.display = "flex";
    fulledadError.style.color  = "red";

    fulltelError.textContent = "Telefono requerido";
    fulltelError.style.display = "flex";
    fulltelError.style.color  = "red";

    fulldireError.textContent = "Direccion requerida";
    fulldireError.style.display = "flex";
    fulldireError.style.color  = "red";

    fullciudadError.textContent = "Ciudad requerida";
    fullciudadError.style.display = "flex";
    fullciudadError.style.color  = "red";

    fullCPError.textContent = "CP requerido";
    fullCPError.style.display = "flex";
    fullCPError.style.color  = "red";

    fullDNIError.textContent = "DNI requerido";
    fullDNIError.style.display = "flex";
    fullDNIError.style.color  = "red";

    fullpasswordError.textContent = "Clave requerida";
    fullpasswordError.style.display = "flex";
    fullpasswordError.style.color  = "red";

    fullREpasswordError.textContent = "Confirmacion clave requerida";
    fullREpasswordError.style.display = "flex";
    fullREpasswordError.style.color  = "red";
  }else{    
    for (var i = 0; i < formInputs.length; i++) {
      var input = formInputs[i];
      var inputName = input.name;
      var inputValue = input.value;    
      if(input.type === "password" || input.type === "submit"){
          inputValue = "";
      }
      else{
          if(input.tagName === "SPAN" && inputValue !== ""){
              inputValue = input.textContent;        
              elementName = input.getAttribute("data-name");
              inputName = elementName;      
          }
      }    
      if (inputValue) {
        popupContent += `<p style="font-weight: bold; color: white;">` + inputName + ": " + inputValue + "</p>";
      }
    }
    popupContent += `<div class="divButtons"><button class="btnPopup" onclick="acceptAction()"> Aceptar </button> <button class="btnPopup" onclick="cancelAction()">Cancelar</button></div>`;  
    popupContainer.innerHTML = popupContent;       
    popupContainer.style.display = "flex"; 
  }
 
});


function acceptAction(){
    if(!popupContent.includes("Error")){                 
        var popupResponse = document.querySelector('div[id="popupResponse"]');        

        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify({
            id:1,
            name: fullName.value,
            email: email.value,
            edad: edad.value,
            telefono: tel.value,
            direccion: dire.value,
            ciudad: ciudad.value,
            codPostal: CP.value,
            DNI: DNI.value,
            clave: password.value,
            reClave: REpassword.value                                        
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => {
          var popupResponseContent = `<h2 class="h2Successfull">Response Successfull!</h2>`;  
          popupResponseContent += 
          `<div class="divSuccessfullResponse">
            <p>Name: ${json.name}</p>
            <p>Email: ${json.email}</p>
            <p>Edad: ${json.edad}</p>
            <p>Telefono: ${json.telefono}</p>
            <p>Direccion: ${json.direccion}</p>
            <p>Ciudad: ${json.ciudad}</p>
            <p>CP: ${json.codPostal}</p>
            <p>DNI: ${json.DNI}</p>      
            <p>DNI: ${json.clave}</p>      
            <p>DNI: ${json.reClave}</p>               
          </div>`;
          popupResponseContent += `<div class="divButtonsResponse"><button class="btnPopup" onclick="confirmAction()"> Ok </button></div>`;  
          popupResponse.innerHTML = popupResponseContent;  
          popupResponse.style.border = "2px solid darkgreen";
          popupResponse.style.display = "flex";  
          
          localStorage.setItem('response', JSON.stringify(json));        
        })
        .catch((error) => {
          var popupResponseContent = `<h2 class="h2Unsuccessfull">Response Unsuccessfull!</h2>`;  
          popupResponseContent += `<div><p>${error}</p></div>`;
          popupResponse.innerHTML = popupResponseContent; 
          popupResponse.style.border = "2px solid red"; 
          popupResponse.style.display = "flex";   
          console.error('An error ocurred:', error);
        });                        
    }    
    popupContainer.style.display = "none";  
    popupContent = "";  
  }

  function cancelAction(){
    popupContainer.style.display = "none";          
  }
  function confirmAction(){    
    var form = document.querySelector('form[id="myForm"]');      
    form.submit();             
  }
  window.onbeforeunload = function(event){
    if(!formSubmitted){
      console.log("LALALA NACION")
    }
  }
  window.addEventListener('load', function() {    
    if(this.performance.navigation.type == this.performance.navigation.TYPE_RELOAD){
      var savedData = JSON.parse(localStorage.getItem('response'));
  
      if (savedData) {
        fullName.value = savedData.name;
        email.value = savedData.email;
        edad.value = savedData.edad;
        tel.value = savedData.telefono;
        dire.value = savedData.direccion;
        ciudad.value = savedData.ciudad;
        CP.value = savedData.codPostal;
        DNI.value = savedData.DNI;
        password.value = savedData.clave;
        REpassword.value = savedData.reClave;
      }
    }        
  });
 