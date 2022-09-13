function login() {
    // email address in sign-in-form
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");

    var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(input2.value);
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(input3.value);

    if (emailRegex === true && passwordRegex === false) {
        swal("Soory! Please Valid Password");
        var main = document.querySelector(".main");
        main.style.display = "block";

        var loader = document.getElementById("loader");
        loader.style.display = "none";

        var quizApp = document.querySelector(".quiz-app");
        quizApp.style.display = "none";
    }

    else if (emailRegex === false && passwordRegex === true) {
        swal("Soory! Please Valid Email Id");
        var main = document.querySelector(".main");
        main.style.display = "block";

        var loader = document.getElementById("loader");
        loader.style.display = "none";

        var quizApp = document.querySelector(".quiz-app");
        quizApp.style.display = "none";
    }
    var email1 = localStorage.getItem("email");
    var password1 = localStorage.getItem("password");

    if (input2.value === email1 && input3.value === password1) {
        var main = document.querySelector(".main");
        main.style.display = "none";

        var loader = document.getElementById("loader");
        loader.style.display = "block";

        setTimeout(function () {
            loader.style.display = "none"
        }, 3000)

        var quizApp = document.querySelector(".quiz-app");
        setTimeout(function () {
            quizApp.style.display = "block"
        }, 3000)

    }
    else if (input2.value !== email1 && input3.value === password1) {
        swal("Your Email Id Is Incorrect")
    }
    else if (input2.value === email1 && input3.value !== password1) {
        swal("Your Password Is Incorrect")
    }

    input2.value = " ";

    input3.value = " ";

}

function icon2() {
    // icon-2 in sign-in form
    var input3 = document.getElementById("input3");
    input3.setAttribute("type", "text");

    // icon-1 in sign in form display none
    var icon2 = document.getElementById("icon2");
    icon2.style.display = "none";

    // icon-2 in sign in form display block
    var icon1 = document.getElementById("icon1");
    icon1.style.display = "block";

    // button in sign in form
    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-70px"

    // hedaing in sign-in form
    var heading = document.getElementById("heading");
    heading.style.marginTop = "-27px"
}

function icon1() {
    // icon-1 in sign-in form
    var input3 = document.getElementById("input3");
    input3.setAttribute("type", "password");

    // icon-1 in sign in form display none
    var icon2 = document.getElementById("icon2");
    icon2.style.display = "block";
    icon2.style.marginLeft = "320px"
    icon2.style.marginTop = "-30px"

    // icon-2 in sign in form display block
    var icon1 = document.getElementById("icon1");
    icon1.style.display = "none";

    // button in sign in form
    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-10px"


    // hedaing in sign-in form
    var heading = document.getElementById("heading");
    heading.style.marginTop = "0px";
}

//signup-form
function icon4() {
    var input7 = document.getElementById("input7");
    input7.setAttribute("type", "text");

    var icon2 = document.getElementById("icon2");
    icon2.style.display = "none";

    var icon1 = document.getElementById("icon1");
    icon1.style.display = "block";

    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-70px";

    var heading = document.getElementById("heading");
    heading.style.marginTop = "-27px"
}

function icon3() {
    var input7 = document.getElementById("input7");
    input7.setAttribute("type", "password");

    var icon2 = document.getElementById("icon2");
    icon2.style.display = "block";
    icon2.style.marginLeft = "320px"
    icon2.style.marginTop = "-30px"

    var icon1 = document.getElementById("icon1");
    icon1.style.display = "none";
    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-10px"

    var heading = document.getElementById("heading");
    heading.style.marginTop = "0px"
}

function signUp() {
    var input4 = document.getElementById("input4");
    var input5 = document.getElementById("input5");
    var input6 = document.getElementById("input6");
    var input7 = document.getElementById("input7");


    var Obj = {
        firstName: input4.value,
        lastName: input5.value,
        email: input6.value,
        password: input7.value,
    }

    // var localObj_serialized = JSON.stringify(localObj);
    // localStorage.setItem("obj", localObj_serialized);

    for (var key in Obj) {
        localStorage.setItem(key, Obj[key]);
    }


    // localStorage.setItem("firstName",input4.value);
    // localStorage.setItem("lastName",input5.value);
    // localStorage.setItem("Email",input6.value);
    // localStorage.setItem("Password",input7.value);


    // var desirled = JSON.parse(localStorage.getItem("localObj"));




    var firstNameregex = /^\s*$/.test(input4.value);
    var lastNameregex = /^\s*$/.test(input5.value);
    var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(input6.value);
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(input7.value);

    if (firstNameregex === true) {
        swal("Please Fill The FirstName Input")
    }
    else if (lastNameregex === true) {
        swal("Please Fill The LastName Input")
    }
    else if (emailRegex === true && passwordRegex === false) {
        swal("Soory! Please Valid Password");
    }
    else if (emailRegex === false && passwordRegex === true) {
        swal("Soory! Please Valid Email Id");
    }
    else if (firstNameregex === false && lastNameregex === false && emailRegex === true && passwordRegex === true) {
        window.location.href = "./index.html";
    }



    input4.value = " ";
    input5.value = " ";
    input6.value = " ";
    input7.value = " ";
}
