const visitantes= [{nombre: "Ana Sofía", color: "morado"}];

module.exports = class Visitante {

    //Constructor de la clase. Sirve para crear un nuevo objeto, 
    // y en él se definen las propiedades del modelo
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        visitantes.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return visitantes;
    }

}