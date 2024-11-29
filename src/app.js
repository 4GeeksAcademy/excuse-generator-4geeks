/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El Oso", "Mi vecino", "Un nudista", "El Narcotraficante"];

  let action = ["comió", "cagó", "reventó", "destrozó"];

  let what = ["mi código", "mi teléfono", "el coche"];

  let when = [
    "antes de clases",
    "cuando estaba durmiendo",
    "mientras estaba duchándome",
    "durante mi cena",
    "mientras veia el Barca"
  ];
  let random_number_who = Math.floor(Math.random() * who.length);
  let random_number_action = Math.floor(Math.random() * action.length);
  let random_number_what = Math.floor(Math.random() * what.length);
  let random_number_when = Math.floor(Math.random() * when.length);
  document.getElementById("excuse").innerHTML =
    who[random_number_who] +
    " " +
    action[random_number_action] +
    " " +
    what[random_number_what] +
    " " +
    when[random_number_when];
};
