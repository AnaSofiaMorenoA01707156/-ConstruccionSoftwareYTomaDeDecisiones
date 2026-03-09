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
        return db.execute('INSERT INTO visitas(nombre, color) VALUES(?, ?)', 
            [this.nombre, this.color]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM visitas');
    }
    static fetchOne(id) {
        return db.execute('SELECT * FROM visitas WHERE id = ?', [id]);
    }
    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    //Modificar o editar un valor en un registro
    static editColor(newColor, nombre) {
        return db.execute('UPDATE visitas SET color = ? WHERE nombre = ?',
            [newColor, nombre]);
    }
}