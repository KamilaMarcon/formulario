
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const cpfInput = document.querySelector("#cpf");
const emailInput = document.querySelector("#email");
const passworldInput = document.querySelector("#passworld");
const jobSelect = document.querySelector("#job");
const messagetextarea = document.querySelector("message");

//console.log(form,nameInput,cpfInput);

form.addEventListener('submit',(event)=>{

    //name

    if(nameInput.value===""){
    alert('por favor preencha seu nome');
   return;
}


//cpf input

if(cpfInput.value===""){
    alert('por favor preencha seu cpf');
   return;
}

//email

if(emailInput.value===""){
    alert('por favor preencha seu email');
   return;
}

//senha
if( passworldInput.value===""){
    alert('por favor preencha sua senha');
   return;
}

//job 

if(jobSelect.value===""){
    alert('por favor selecione uma opção');
   return;
}

})
