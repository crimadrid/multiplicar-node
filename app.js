const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.llimite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.llimite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no reconocio');

}