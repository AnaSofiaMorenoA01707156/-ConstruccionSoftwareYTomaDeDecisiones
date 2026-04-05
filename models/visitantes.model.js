const db = require('../util/database');
const bcrypt = require('bcrypt');

module.exports = class Visitante {

    //Constructor de la clase. Sirve para crear un nuevo objeto, 
    // y en él se definen las propiedades del modelo
    constructor(username, nombre, color, password, imagen) {
        this.username = username;
        this.nombre = nombre;
        this.color = color;
        this.password = password;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute('INSERT INTO visitas(username, nombre, color, password, imagen) VALUES(?,?,?,?,?)', 
                [this.username, this.nombre, this.color, password_cifrado, this.imagen]);
        }).catch((error) => {
            console.log(error);
            next(error);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM visitas');
    }
    static fetchOne(username) {
        return db.execute('SELECT * FROM visitas WHERE username = ?', [username]);
    }
    static fetch(username) {
        if (username) {
            return this.fetchOne(username);
        } else {
            return this.fetchAll();
        }
    }
    static fetchName(username){
        return db.execute('SELECT nombre FROM visitas WHERE username = ?', [username]);
    }
    static fetchColor(username){
        return db.execute('SELECT color FROM visitas WHERE username = ?', [username]);
    }
    //Modificar o editar un valor en un registro
    static editColor(newColor, username) {
        return db.execute('UPDATE visitas SET color = ? WHERE username = ?',
            [newColor, username]);
    }
}