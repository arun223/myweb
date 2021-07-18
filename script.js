function nameValid() {
    var name = document.getElementById("inputName").value
    var namestatus = document.getElementById("namestatus");
    var letters = /^[a-zA-Z\s]*$/;
    if (name == "") {
        namestatus.innerHTML = "Field is required"
        return false;
    }
    else if (name.match(letters)) {
        namestatus.innerHTML = "";
        return true;
    }
    else {
        namestatus.innerHTML = "use only characters";
        return false;
    }
}
function PhoneValid() {
    var phone = document.getElementById("inputNumber").value
    var phonestatus = document.getElementById("phonestatus");
    const letters = /^\d{10,11}$/;
    if (phone == "") {
        phonestatus.innerHTML = "Filed is required"
        return false;
    }
    else if (phone.match(letters)) {
        phonestatus.innerHTML = "";
        return true;
    }
    else {
        phonestatus.innerHTML = "invalid number";
        return false;
    }

}
function emailValid() {
    var name = document.getElementById("inputEmail4").value
    var emailSpan = document.getElementById("emailstatus");
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (name == "") {
        emailSpan.innerHTML = "Filed is required"
        return false;
    }
    else if (name.match(letters)) {
        emailSpan.innerHTML = "";
        return true;
    }
    else {
        emailSpan.innerHTML = "invalid email";
        return false;
    }

}
function MessageValid() {
    var name = document.getElementById("inputMessage").value
    var messageSpan = document.getElementById("messagestatus");

    if (name == "") {
        messageSpan.innerHTML = "Filed is required"
        return false;
    }


    else {
        messageSpan.innerHTML = "";
        return true;
    }

}