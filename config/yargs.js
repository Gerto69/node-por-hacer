const argv = require('yargs')
    .command('crear', 'Crear un elemento por Hacer', { descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea por hacer' } })
    .command('actualizar', 'Actualiza el Estado Completado de una Tarea', { descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea por hacer' }, descripcion: { alias: 'c', desc: 'MArca como completado la Tarea' } })
    .command('borrar', 'Borrar un elemento por Hacer', { descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea por hacer' } })
    .help()
    .argv;

module.exports = {
    argv
}