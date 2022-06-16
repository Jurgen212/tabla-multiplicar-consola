

const argv = require('yargs')
            .options('b',{
                alias          :'base'                                          ,    
                type           :'number'                                        ,
                demandOption   : true                                           ,
                description    :'Introducir el numero para realizar calculo'    ,
            })
            .check( ( argv, options ) => {
                if( isNaN( argv.b )) throw "La base tiene que ser un número";
                else return true;
            })

            .options('l',{
                alias: 'listar'     ,
                type : 'boolean'    ,
                demandOption: false ,
                default     : false ,
                description:'Imprimir o no las tablas de multiplicar'
            })
            .check( ( argv, options ) =>{
                if( argv.l == true || argv.l == false ){
                    return true;
                }
                else throw "Enviar un valor valido ( true / false )"
            })

            .options('h',{
                alias       : 'hasta'       ,
                type        : 'number'      ,
                demandOption: false         ,
                default     : 10            ,
                description : 'Describe hasta que numero llega la tabla'
            })
            .check( (argv, options ) =>{
                
                if( argv.h <= 0 ) throw "El tope de la tabla debe ser mayor a cero"
                else if( isNaN( argv.h ) ) throw "Por favor ingrese un numero como tope"
                else return true
            })
            .argv;

module.exports = argv;  
