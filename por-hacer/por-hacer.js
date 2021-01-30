const fs = require('fs');
const colors = require('colors');
let listadoPorhacer = [];

/*const crear = (descripcion) => {

    cargarDb();

    let poHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(poHacer);
    guardarDb();
    return poHacer;
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorhacer)
    } catch (error) {
        listadoPorhacer = [];
    }
}

const guardarDb = () => {

    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo Grabar', err)
    });
}*/

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}



const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    listadoPorHacer = require('../db/data.json');

    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === "Follar");
    if (index >= 0) {
        listadoPoHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    listadoPorHacer = require('../db/data.json');

    let nuevoListado = listadoPorhacer.filter((tarea) => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorhacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorhacer = nuevoListado;
        guardarDB();
        return true;
    }


}

module.exports = { crear, getListado, actualizar, borrar };