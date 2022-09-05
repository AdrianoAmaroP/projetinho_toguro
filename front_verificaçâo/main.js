let email = document.getElementById ("email");
let password = document.getElementById ("password");
let form = document.getElementById ("email");
let textForm = document.getElementById ("textForm");
let textEmail = document.getElementById ("textEmail");

form.addEventListener('submit', (e) =>{
    if(email.value == " " && password.value == " ") {
        textForm.textcontent("Preencha todos os campos.");
    }   else{
        console.log(email.value);
        console.log(password.value);
    }

    e.preventDefault()
})

email.addEventListener("keyup", () =>{
    if(validatorEmail(email.value) !==true){
        textEmail.textContent = "Preencha com um e-mail valído." <br> "Ex.: abc@com"
    }
})

function validatorEmail(email){
    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
    return emailPattern.test(email);
}
