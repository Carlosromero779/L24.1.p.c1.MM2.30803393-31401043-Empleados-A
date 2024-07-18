export default class Cl_empresa{
    constructor(){
        this.menor = Infinity;
        this.nombreMenor = "";
        this.contAdmi = 0;
        this.acumsueldoAdmi = 0;
        
    }
    procesarPersonal(personal){
        if(personal.sueldo < this.menor){
            this.menor = personal.sueldo;
            this.nombreMenor = personal.nombre;
        }
        if(personal.tipo == "administrativo"){
            this.contAdmi++;
            this.acumsueldoAdmi += personal.sueldo;
        }
       }
       menorSueldo(){
        return this.nombreMenor;
    }
    promedioAdmi(){
        return this.acumsueldoAdmi / this.contAdmi;
    }
}