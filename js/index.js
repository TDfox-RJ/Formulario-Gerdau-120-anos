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
  var country = document.getElementById("country_select");
  var unit = document.getElementById("unity_select");
  var unitsByCountry = {
    Brazil: [
      "Açonorte",
      "Cearense",
      "Cosigua",
      "Divinópolis",
      "Guaíra",
      "Riograndense",
      "São Paulo",
      "Contagem",
      "Sete Lagoas",
      "Ouro Branco",
      "Silat",
      "Miguel Burnier",
      "Várzea do Lopes",
      "Florestal",
      "Pindamonhangaba",
      "Mogi das Cruzes",
      "Comercial Gerdau - Aracaju",
      "Comercial Gerdau - Araçatuba",
      "Comercial Gerdau - Araraquara",
      "Comercial Gerdau - Barreiras",
      "Comercial Gerdau - Bauru",
      "Comercial Gerdau - Belém",
      "Comercial Gerdau - Belo Horizonte",
      "Comercial Gerdau - Blumenau",
      "Comercial Gerdau - Brasília",
      "Comercial Gerdau - Campina Grande",
      "Comercial Gerdau - Campo Grande",
      "Comercial Gerdau - Campinas",
      "Comercial Gerdau - Caruaru",
      "Comercial Gerdau - Cascavel",
      "Comercial Gerdau - Caxias do Sul",
      "Comercial Gerdau - Chapecó",
      "Comercial Gerdau - Criciúma",
      "Comercial Gerdau - Cuiabá",
      "Comercial Gerdau - Curitiba",
      "Comercial Gerdau - Divinópolis",
      "Comercial Gerdau - Dourados",
      "Comercial Gerdau - Feira de Santana",
      "Comercial Gerdau - Florianópolis",
      "Comercial Gerdau - Fortaleza",
      "Comercial Gerdau - Goiânia",
      "Comercial Gerdau - Governador Valadares",
      "Comercial Gerdau - Guarapuava",
      "Comercial Gerdau - Imperatriz",
      "Comercial Gerdau - João Pessoa",
      "Comercial Gerdau - Joinville",
      "Comercial Gerdau - Juazeiro",
      "Comercial Gerdau - Juazeiro do Norte",
      "Comercial Gerdau - Juiz de Fora",
      "Comercial Gerdau - Jundiaí",
      "Comercial Gerdau - Lages",
      "Comercial Gerdau - Limeira",
      "Comercial Gerdau - Londrina",
      "Comercial Gerdau - Maceió",
      "Comercial Gerdau - Manaus",
      "Comercial Gerdau - Marília",
      "Comercial Gerdau - Maringá",
      "Comercial Gerdau - Montes Claros",
      "Comercial Gerdau - Mossoró",
      "Comercial Gerdau - Natal",
      "Comercial Gerdau - Novo Hamburgo",
      "Comercial Gerdau - Palmas",
      "Comercial Gerdau - Panambi",
      "Comercial Gerdau - Passo Fundo",
      "Comercial Gerdau - Pato Branco",
      "Comercial Gerdau - Pelotas",
      "Comercial Gerdau - Ponta Grossa",
      "Comercial Gerdau - Porto Alegre",
      "Comercial Gerdau - Porto Velho",
      "Comercial Gerdau - Presidente Prudente",
      "Comercial Gerdau - Recife",
      "Comercial Gerdau - Ribeirão Preto",
      "Comercial Gerdau - Rio de Janeiro",
      "Comercial Gerdau - Rio do Sul",
      "Comercial Gerdau - Rio Verde",
      "Comercial Gerdau - Salvador Unidade 2  Cassange SS2",
      "Comercial Gerdau - Santa Maria",
      "Comercial Gerdau - São Caetano do Sul",
      "Comercial Gerdau - São Gonçalo",
      "Comercial Gerdau - São José do Rio Preto",
      "Comercial Gerdau - São José dos Campos",
      "Comercial Gerdau - São Luís",
      "Comercial Gerdau - Sinop",
      "Comercial Gerdau - Sorocaba",
      "Comercial Gerdau - Teresina",
      "Comercial Gerdau - Uberlândia",
      "Comercial Gerdau - Umuarama",
      "Comercial Gerdau - Varginha",
      "Comercial Gerdau - Vitória",
      "Comercial Gerdau - Vitória da Conquista",
      "Comercial Gerdau - Volta Redonda",
      "CS SÃO LEOPOLDO",
    ],
    Mexico: ["México"],
    Canada: ["Cambridge", "Manitoba - MRM", "Whitby"],
    USA: [
      "Cartersville",
      "Charlotte",
      "Jackson",
      "St. Paul",
      "Wilton",
      "Midlothian",
      "Petersburg",
      "Fort Smith",
      "Jackson MI",
      "Monroe",
    ],
    Uruguay: ["Uruguai"],
    Argentina: ["Argentina"],
    Peru: ["Peru"],
    Venezuela: ["Venezuela"],
    Colombia: ["Colômbia"],
    DominicanRepublic: ["República Dominicana"],
  };

  country.addEventListener("change", function () {
    var selectedOption = unitsByCountry[this.value];
    while (unit.options.length > 0) {
      unit.options.remove(0);
    }
    Array.from(selectedOption).forEach(function (el) {
      let option = new Option(el, el);
      unit.appendChild(option);
    });
  });
});
