
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv             = require('./config/yargs.js')       ;




console.clear();

// const [,, arg3 = 'base=1'] = process.argv;
// const[, base = 1 ] =  arg3.split('=');


crearArchivo( argv.b, argv.l, argv.h )
     .then ( nombreArchivo => console.log( nombreArchivo ))
     .catch( err           => console.log( err )          );
