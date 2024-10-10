import  CL_profesor from "./CL_profesor.js";

export default class CL_pcont extends CL_profesor {

    constructor(nombre, bono, horas){
        super(nombre, bono);
        this._horas = +horas;
    }

set horas(h){
    this._horas = +h;
}

get horas(){
    return this._horas;
}

total(){
    return (this._horas * 10) + this._bono;
}







}