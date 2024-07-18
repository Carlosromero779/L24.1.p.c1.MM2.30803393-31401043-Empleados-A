/*EMPLEADOS-A
*En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
*determinar cuál es alguno de los nombres del personal que gana menos (si no se repite, sólo
*reportar 1, si se repite, reportar cualquiera) y también el monto promedio pagado sólo los
*administrativos.
*Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
*el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
*$50, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
*gana $150:
*Uno de los que gana menos: Mary
*Monto promedio pagado a administrativos: $175
*/ 
import Cl_personal from "./Cl_personal.js";
import Cl_empresa from "./Cl_empresa.js";
let personal1 = new Cl_personal("Juan", "obrero", 100);
let personal2 = new Cl_personal("Ana", "obrero", 50);
let personal3 = new Cl_personal("Lin", "administrativo", 200);
let personal4 = new Cl_personal("Mary", "obrero", 50);
let personal5 = new Cl_personal("Carlos", "administrativo", 150);
let empresa = new Cl_empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2); 
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML= `<br> Uno de los que gana menos: ${empresa.menorSueldo()}`
salida.innerHTML+= `<br> Monto promedio pagado a administrativos: $${empresa.promedioAdmi()}`