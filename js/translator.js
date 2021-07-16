/** @format */

var language = "pt";

let translation_map = {
    pt: {
        placeholder: {
            name_input: "Nome",
            email_input: "Email",
            function_input: "Função",
            personal_number_input: "Número Pessoal",
            unity_input: "Unidade",
            message_input: "Digite Aqui",
        },
        select: {
            country_select: [
                "País",
                "América do Norte",
                "Argentina",
                "Brasil",
                "Colômbia",
                "México",
                "Peru",
                "República Dominicana",
                "Uruguai",
                "Venezuela",
            ],
        },
        text: {
            first_p:
                "Neste ano em que celebramos nossa história de crescimento, queremos entender como pensa quem é parte essencial desta história: você.",
            second_p:
                "Preencha o formulário ao lado e participe de mais uma ação de celebração e colaboração em equipe da Gerdau.",
            third_p: "O futuro se molda.",
            spacer_text:
                "Como você enxerga a Gerdau para os próximos 120 anos?",
        },
    },
    es: {
        placeholder: {
            name_input: "Nomber",
            email_input: "Email",
            function_input: "Posición",
            personal_number_input: "Número Personal",
            unity_input: "Sitio",
            message_input: "Escriba Aqui",
        },
        select: {
            country_select: [
                "País",
                "América del Norte",
                "Argentina",
                "Brasil",
                "Colombia",
                "México",
                "Perú",
                "República Dominicana",
                "Uruguay",
                "Venezuela",
            ],
        },
        text: {
            first_p:
                "En este año en que el que celebramos nuestra historia de crecimiento, queremos comprender cómo piensan los que son parte esencial de esta historia: tú.",
            second_p:
                "Rellena el formulario al lado y participa en otro acto de celebración y colaboración como equipo Gerdau.",
            third_p: "El futuro se moldea.",
            spacer_text: "¿Como ves Gerdau en los próximos 120 años?",
        },
    },
    en: {
        placeholder: {
            name_input: "Name",
            email_input: "Email",
            function_input: "Position",
            personal_number_input: "Personal Number",
            unity_input: "Business Unity",
            message_input: "Type Here",
        },
        select: {
            country_select: [
                "Country",
                "North America",
                "Argentina",
                "Brazil",
                "Colombia",
                "Mexico",
                "Peru",
                "Dominican Republic",
                "Uruguay",
                "Venezuela",
            ],
        },
        text: {
            first_p:
                "In the year we celebrate our history of growth, we want to understand what the essential part of this history thinks: you.",
            second_p:
                "Fill in the form alongside and be part of another Gerdau team celebration and collaboration act.",
            third_p: "Shape the future.",
            spacer_text: "How do you see Gerdau over the next 120 years?",
        },
    },
};

/** */
document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector(".language-selector").click();

    document.querySelectorAll(".language-selector").forEach((item) => {
        item.addEventListener("click", (ev) => {
            if (!ev.target.classList.contains("active")) {
                if (document.querySelector(".language-selector.active")) {
                    document
                        .querySelector(".language-selector.active")
                        .classList.remove("active");
                }

                ev.target.classList.add("active");
                language = ev.target.id;
                translate(ev.target.id);
            }
        });
    });
});

/** */
function translate(language) {
    Object.keys(translation_map[language]).forEach((type) => {
        Object.keys(translation_map[language][type]).forEach((id) => {
            switch (type) {
                case "placeholder":
                    document.querySelector(`#${id}`).placeholder =
                        translation_map[language][type][id] + ":";
                    break;
                case "select":
                    document
                        .querySelectorAll(`#${id} option`)
                        .forEach((option, index) => {
                            option.innerText =
                                translation_map[language][type][id][index];
                        });

                    break;
                case "text":
                    document.querySelector(`#${id}`).innerText =
                        translation_map[language][type][id];
                    break;
            }
        });
    });
}
