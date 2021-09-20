//ELEMENTOS DA DOM
const email = document.getElementById("email");
const nome = document.querySelector("#name");
const phone = document.querySelector("#phone");
const cep = document.querySelector('#cep');
const street = document.querySelector('#street');
const number = document.querySelector('#number');
const complement = document.querySelector('#complement');
const city = document.querySelector('#city');
const district = document.querySelector('#district');
const state = document.querySelector('#state');
const btn = document.querySelector('#btn-submit');
const checkbox = document.querySelector('#agreement');

const errEmail = document.querySelector("#errorEmail")
const errName = document.querySelector("#errorName")
const errPhone = document.querySelector("#errorPhone")
const errCep = document.querySelector("#errorCEP")
const errStreet = document.querySelector("#errorStreet")
const errNumber = document.querySelector("#errorNumber")
const errCity = document.querySelector("#errorCity")
const errDistrict = document.querySelector("#errorDistrict")
const errState = document.querySelector("#errorState")

const arr = [{}]



//BOTÃO => ENVIAR O FORM
btn.addEventListener('click', function (e) {
    e.preventDefault()
    if(checkbox !== null){
        console.log("Verificado")
      }else{
        console.log("Não verificado")
      }

    if (email.value === "" && nome.value === "" && phone.value === "" && cep.value === "" && street.value === "" && number.value === "" && city.value === "" && district.value === "" && state.value === "") {
        errEmail.innerHTML = "Preencher o campo Email"
        email.style.border = "2px solid red"
        errName.innerHTML = "Preencher o campo Nome"
        nome.style.border = "2px solid red"
        errPhone.innerHTML = "Preencher o campo Celular"
        phone.style.border = "2px solid red"
        errCep.innerHTML = "Preencher o campo CEP"
        cep.style.border = "2px solid red"
        errStreet.innerHTML = "Preencher o campo Endereço da Rua"
        street.style.border = "2px solid red"
        errNumber.innerHTML = "Preencher o campo Número da Casa"
        number.style.border = "2px solid red"
        errCity.innerHTML = "Preencher o campo Cidade"
        city.style.border = "2px solid red"
        errDistrict.innerHTML = "Preencher o campo Bairro"
        district.style.border = "2px solid red"
        errState.innerHTML = "Preencher o campo Estado"
        state.style.border = "2px solid red"
        
        return
    } else if (email.value === "" || nome.value === "" || phone.value === "" || cep.value === "" || street.value === "" || number.value === "" || city.value === "" || district.value === "" || state.value === "") {

        if (email.value === "") {
            errEmail.innerHTML = "Preencher o campo Email"
            email.style.border = "2px solid red"
        } else {
            errEmail.innerHTML = ""
            email.style.border = "1px solid rgb(196, 194, 194)"
        }
        if (nome.value === "") {
            errName.innerHTML = "Preencher o campo Nome"
            nome.style.border = "2px solid red"
        } else {
            errEmail.innerHTML = ""
            nome.style.border = "1px solid rgb(196, 194, 194)"
        }
        if (phone.value === "") {
            errPhone.innerHTML = "Preencher o campo Celular"
            phone.style.border = "2px solid red"
        } else {
            errPhone.innerHTML = ""
            phone.style.border = "1px solid rgb(196, 194, 194)"
        }
        if (cep.value === "") {
            errCep.innerHTML = "Preencher o campo CEP"
            cep.style.border = "2px solid red"
        } else {
            errCep.innerHTML = ""
            cep.style.border = "1px solid rgb(196, 194, 194)"
        }
        if (street.value === "") {
            errStreet.innerHTML = "Preencher o campo Endereço"
            street.style.border = "2px solid red"
        } else {
            errStreet.innerHTML = ""
            street.style.border = "1px solid rgb(196, 194, 194)"
        }
        if (number.value === "") {
            errNumber.innerHTML = "Preencher o campo Número da casa"
            number.style.border = "2px solid red"
        } else {
            errNumber.innerHTML = ""
            number.style.border = "1px solid rgb(196, 194, 194)"
        } 
        if (city.value === "") {
            errCity.innerHTML = "Preencher o campo Cidade"
            city.style.border = "2px solid red"
        } else {
            errCity.innerHTML = ""
            city.style.border = "1px solid rgb(196, 194, 194)"
        }
        if (district.value === "") {
            errDistrict.innerHTML = "Preencher o campo Bairro"
            district.style.border = "2px solid red"
        } else {
            errDistrict.innerHTML = ""
            district.style.border = "1px solid rgb(196, 194, 194)"
        }
        if (state.value === "") {
            errState.innerHTML = "Preencher o campo Estado"
            state.style.border = "2px solid red"
        } else {
            errState.innerHTML = ""
            state.style.border = "1px solid rgb(196, 194, 194)"
        }

        return
    } else {
        if(complement.value === ""){
            complement.value = "Sem complemento"
        }
        arr.push({
            nome: nome.value,
            email: email.value,
            phone: phone.value,
            cep: cep.value,
            street: street.value,
            number: number.value,
            complement: complement.value,
            city: city.value,
            district: district.value,
            state: state.value
        })
        
        email.value = ""
        nome.value = ""
        phone.value = ""
        cep.value = ""
        street.value = ""
        number.value = ""
        complement.value = ""
        city.value = ""
        district.value = ""
        state.value = ""


    }




})
