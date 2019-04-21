const rotaCliente = require('express').Router();
const Cliente = require('../Modelos/Cliente');
var cors = require('cors');
rotaCliente.use(cors());

rotaCliente.get('/clientes', function (req, res) {
    //console.log(JSON.stringify(req.body));
    Cliente.find({}).exec(function (err, clientes) {
        if (err){
            res.json( err );
        }else{
        //console.log(JSON.stringify(result))
        res.json( clientes);
        
    }
    });
});

rotaCliente.get('/cliente', function (req, res) {
    console.log(JSON.stringify(req.body));
    var busca = req.body.cpf;
    Cliente.find({ "cpf": busca }).lean().exec(function (err, cliente) {
        res.json({ cliente });
    });
});

rotaCliente.route('/novocliente').post(function (req, res) {
    console.log(JSON.stringify(req.body));
    Cliente.find({ "cpf": req.body.cpf }).lean().exec(function (err, cliente) {
        console.log(cliente);
        if (cliente.length > 0) {
            res.status(409).json("Cliente já existente");
        } else if (err) {
            console.log("find" + err)
            res.status(500).json({ erro: err })
        } else {
            var cliente = new Cliente();
            cliente.nome = req.body.nome;
            cliente.sobrenome = req.body.sobrenome;
            cliente.nascimento = req.body.nascimento;
            cliente.cpf = req.body.cpf;
            cliente.telefone = req.body.telefone;

            cliente.save(function (err) {
                if (err) {
                    console.log("save"+ err);
                    res.send(err);
                } else {
                    console.log("sucesso");
                    res.json({ message: 'Cliente criado!' });
                }
            });
        }

    });

});

rotaCliente.delete('/deletarcliente', function (req, res) {
    console.log(JSON.stringify(req.body));
    var busca = req.body.cpf;

    Cliente.deleteOne({ "cpf": busca }).exec(function (err, cliente) {
        
        if (err) {
            res.status(500).json({ err });
        } else if (cliente.n > 0) {
            res.json("Cliente  deletado");
        } else {
            res.json("Cliente  Inexistente");
        }
        
    });
});

rotaCliente.post('/atualizacliente', function (req, res) {
    console.log(JSON.stringify(req.body));
    var id = req.body._id;
    Cliente.findByIdAndUpdate(id, {
        $set: {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            nascimento: req.body.nascimento,
            cpf: req.body.cpf,
            telefone: req.body.telefone
        }
    }, { new: true }, function (err, cliente) {
        if (err) return err;
        res.send("cliente atualizado");
    });

});

module.exports = rotaCliente;