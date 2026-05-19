export class Alumno {

    constructor(
        private _id: number,
        private _nombre: string,
        private _apellidos: string,
        private _ipasen: string
    ){};

    get id(): number { return this._id; }
    set id(value: number) { this._id = value; }
    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }
    get apellidos(): string { return this._apellidos; }
    set apellidos(value: string) { this._apellidos = value; }
    get ipasen(): string { return this._ipasen; }
    set ipasen(value: string) { this._ipasen = value; }
    
}
