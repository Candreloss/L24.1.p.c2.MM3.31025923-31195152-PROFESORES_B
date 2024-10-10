import CL_profesor from "./CL_profesor.js";

export default class CL_pfijo extends CL_profesor {

constructor(nombre, bono, sueldo) {
    super(nombre, bono);
    this._sueldo = sueldo;
}


set sueldo(s){
    this._sueldo = +s;}

get sueldo(){
    return this._sueldo;}

total(){
    return this._sueldo + this._bono;
}    





}





