export default class CL_profesor{

constructor(nombre, bono){
    this._nombre = nombre;
    this._bono = bono;   
}

set bono(b){
    this._bono = +b;
}

get bono(){
    return this._bono;
}

set nombre(n){
    this._nombre = n;
}
get nombre(){
    return this._nombre;
}



}