export class Profesor {

    constructor(
        private _id: number,
        private _nombre: string,
        private _apellidos: string, 
        private _especialidad: string
    ){};

    get id(): number { return this._id; }
    set id(value: number) { this._id = value; }
    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }
    get apellidos(): string { return this._apellidos; }
    set apellidos(value: string) { this._apellidos = value; }
    get especialidad(): string { return this._especialidad; }
    set especialidad(value: string) { this._especialidad = value; }
    
}
