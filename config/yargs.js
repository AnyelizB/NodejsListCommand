const opts = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc:'Descripción de la tarea por hacer'
    },
    completado:{
        alias: 'c',
        default: true,
        desc:'Marca como completado o pendiente la tarea'
    }
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Actualiza el estado completado de una tarea', opts)
    .help()
    .argv;

 
// const descripcion={
//             demand: true,
//             alias: 'd',
//             desc:'Descripción de la tarea por hacer'
// };
// const completado={
//             alias: 'c',
//             default: true,
//             desc:'Marca como completado o pendiente la tarea'
// };

//     const argv = require('yargs')
//         .command('crear', 'Crea un elemento por hacer', descripcion)
//         .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado})
//         .command('borrar', 'Actualiza el estado completado de una tarea', descripcion)
//         .help()
//         .argv;

module.exports={
    argv
}