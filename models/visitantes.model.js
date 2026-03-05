const db = require('../util/database');

module.exports = class Visitante {

    //Constructor de la clase. Sirve para crear un nuevo objeto, 
    // y en él se definen las propiedades del modelo
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO visitantes(nombre, color) VALUES(?, ?)', 
            [this.nombre, this.color]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM visitas');
    }

}