const {Schema, model} =require("mongoose")

const userSchema = Schema({
    name:{
        type: String,
        required :true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required : true
    },
    namecompany: {
        type : String,
        required :true
    },
    marcabus: {
        type: String,
        require:true
    },
    placa:{
        type: String,
        require:true
    }

})

module.exports =model("User", userSchema, "users")