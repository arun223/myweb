function nameValid() {
    var name = document.getElementById("inputName").value
    console.log(name)
    var namestatus = document.getElementById("namestatus");
    var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
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

function placevalid() {
    var place = document.getElementById("inputPlace").value
    console.log(place);
    var placestatus = document.getElementById("placestatus");
    var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    if (place == "") {
        placestatus.innerHTML = "Field is required"
        return false;
    }
    else if (place.match(letters)) {
        placestatus.innerHTML = "";
        return true;
    }
    else {
        placestatus.innerHTML = "use only characters";
        return false;
    }
}

function PhoneValid() {
    var phone = document.getElementById("inputNumber").value
    var phonestatus = document.getElementById("phonestatus");
    let letters = /^\d+$/;
    if (phone == "") {
        phonestatus.innerHTML = "Filed is required"
        return false;
    }
    
    else if (phone.match(letters) && phone.length==10) {
        phonestatus.innerHTML = "";
        return true;
    }
    
   
    else if(phone.length<10)
    {
        if(phone.match(letters))
        {
            phonestatus.innerHTML = "enter exact 10 numbers"
            return false;
        }

        else
        {
            phonestatus.innerHTML = "only numbers are allowed"
            return false;
        }
    }
    else if(phone.length>10)
    {
        if(phone.match(letters))
        {
            phonestatus.innerHTML = "enter exact 10 numbers"
            return false;
        }

        else
        {
            phonestatus.innerHTML = "only numbers are allowed"
            return false;
        }
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

