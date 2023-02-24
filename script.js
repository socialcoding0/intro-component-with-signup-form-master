const submit = document.querySelector("#submit");
const inputText = document.querySelectorAll(".input-text");


console.log(inputText);
submit.addEventListener("click", function (e) {
    e.preventDefault();
    inputText.forEach(div => {
        let input = div.children[0];
        if (input.value != "") {
            if (input.id == "email") {
                console.log(input);
                ValidateEmail(input);
            }
        }
        else {

            let error = input.nextElementSibling;
            let placeholder = input.getAttribute("placeholder");
            error.classList.add("active");
            input.setAttribute("placeholder", `${placeholder}  cannot be empty`);
            input.classList.add("active-input");

            setTimeout(() => {
                error.classList.remove("active");
                input.setAttribute("placeholder", `${placeholder}`);
                input.classList.remove("active-input");
            }, 1000);


        }
    });
});



function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        return (true)
    }

    else {
        console.log(mail);
        let error = mail.nextElementSibling;
        mail.value = "";
        mail.setAttribute("placeholder", "Looks like this is not an email");
        error.classList.add("active");
        mail.classList.add("active-input")
        setTimeout(() => {
            error.classList.remove("active");
            mail.setAttribute("placeholder", "Email Adress")
            mail.classList.remove("active-input")
        }, 1000);
    }

    return (false)

}




