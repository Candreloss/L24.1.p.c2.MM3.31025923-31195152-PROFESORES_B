import CL_profesor from "./CL_profesor.js";
import CL_pfijo from "./CL_pfijo.js";
import CL_pcont from "./CL_pcont.js";

let pc1 = new CL_pcont("Rafael", 30, 15);
let pc2 = new CL_pcont("Felicia", 30, 20);

let salida = document.getElementById("salida");

salida.innerHTML = `Nombre del profesor contratado: ${pc1.nombre} <br>`
salida.innerHTML += `Monto del bono: $${pc1.bono} <br>`
salida.innerHTML += `Cantidad de horas: ${pc1.horas} <br>`
salida.innerHTML += `Total: $${pc1.total()} <br> <br>` 

salida.innerHTML += `Nombre del profesor contratado: ${pc2.nombre} <br>`
salida.innerHTML += `Monto del bono: $${pc2.bono} <br>`
salida.innerHTML += `Cantidad de horas: ${pc2.horas} <br>`
salida.innerHTML += `Total: $${pc2.total()} <br>`



