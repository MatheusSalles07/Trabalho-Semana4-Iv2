//ELEMENTOS DA DOM
const email = document.getElementById("email");
const nome = document.querySelector("#name");
const phone = document.querySelector("#phone");
const cep = document.querySelector('#cep');
const street = document.querySelector('#street');
const btn = document.querySelector('#btn-submit');

const arr = [{}]

//BOTÃO => ENVIAR O FORM
btn.addEventListener('click', function (e) {
    e.preventDefault()


    if (email.value === "" && nome.value === "" && phone.value === "" && cep.value === "" && street.value === "") {
        alert("Todos os campos estão vazios")
        return
    } else if (email.value === "" || nome.value === "" || phone.value === "" || cep.value === "" || street.value === "") {

        if (email.value === "") {
            console.log("Email vazio")
        }
        if (nome.value === "") {
            console.log("Nome vazio")
        }
        if (phone.value === "") {
            console.log("Telefone vazio")
        }
        if (cep.value === "") {
            console.log("Cep vazio")
        }
        if (street.value === "")
            console.log("Endereço vazio")

        return
    } else {
        arr.push({
            nome: nome.value,
            taemail: email.value,
            phone: phone.value
        })
        console.log()
    }




})
