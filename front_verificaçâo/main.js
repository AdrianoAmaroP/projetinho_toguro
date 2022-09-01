let email = document.getElementById ("email");

form.addEventListener('submit', (e) =>{
    if(email.value == "") {
        textform.textcontent("Preencha com um e-mail valído." <br> "Ex.: abc@com");
    }
        else(
            console.log(email.value);
        )

        e.preventDefault()
})

function validatorEmail(email){
    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
    return emailPattern.test(email);
}