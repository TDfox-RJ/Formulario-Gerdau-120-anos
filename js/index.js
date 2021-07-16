/** @format */

// import { validate } from "./validator";

document.addEventListener("DOMContentLoaded", function (event) {
    document
        .querySelector("#btn_enviar")
        .addEventListener("click", function (ev) {
            if (validate()) {
                console.log("submit");
                // document.querySelector("form").submit();
            }
        });
});
