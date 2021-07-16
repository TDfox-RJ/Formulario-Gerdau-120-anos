/** @format */

let email_domains = [];

function validate() {
    let form = document.querySelector("form");
    let form_data = new FormData(form);

    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    if (validateEmail(form_data.get("email"))) {
        form.reportValidity();
        return false;
    }

    return true;
}

function validateEmail(email) {
    if (
        email.indexOf("gerdau") === -1 ||
        !email_domains.includes(email.substring(0, email.length - 2))
    ) {
        document
            .querySelector("#email_input")
            .setCustomValidity("O email precisa ser o da Gerdau.");
        return false;
    }

    return true;
}
