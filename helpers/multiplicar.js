
const fs        = require( 'fs' )   ;
const colors    = require('colors') ;
colors.enable();


const crearArchivo = async ( base, listar , hasta  ) => {

    try{

        console.log( "=====================".rainbow    );
        console.log( `     Tabla del ${ base }`.america );
        console.log( "=====================".rainbow    );


        let salida = '' ;



        for( let i = 1; i <= hasta; i ++ ){
            salida += `${ i } * ${ base } = ${ i * base }\n`;
        }

        if( listar ){
            console.log( salida.trap );
        }
            
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida );  

        return `tabla-${ base }.txt creado con exito`;
        
    } catch( err ){
        throw err;
    }

}    


module.exports = {
    crearArchivo
}