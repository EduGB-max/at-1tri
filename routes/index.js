

module.exports = (app) => {

    var conexao = require('../config/database')

    app.get('/',async(req,res) => {
        conexao()
        var cadastro = require('../models/cadastro')
        var documentos = await cadastro.find().sort({'_id':-1})

            res.render('index.ejs',{dados:documentos})
    })

}