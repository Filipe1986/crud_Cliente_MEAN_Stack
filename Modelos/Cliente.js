const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
//var ObjectId = mongoose.Types.ObjectId;

var ClienteSchema = new mongoose.Schema(
    {
        ObjectId:  ObjectIdSchema,
        nome :{ type: String, required: true },
        sobrenome: { type: String, required: false},
        dataDeNascimento: {type: String, required: true },
        cpf :{type: String, required :true ,   unique: true },
        telefone: {type: String, default: true }
        
    }, {timestamps: true}
);
module.exports = mongoose.model('Cliente', ClienteSchema);
