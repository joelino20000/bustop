const moongose = require("mongoose")


const connection = async() => {

    try{

        await moongose.connect("mongodb://localhost:27017/bustop",{})

        console.log("Conectado correctamente a bd: bustop")

    }catch(error){
        console.log(error);
        throw new Error ("No se ha podido conectar a la base de datos ")
    }
}


module.exports = connection