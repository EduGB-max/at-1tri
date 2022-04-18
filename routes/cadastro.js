


module.exports = (app) =>{

    //importar a config do database
    var conexao = require('../config/database')

    //executar o modelo cadastro
    conexao()

    //importar o modelo cadastro
    var cadastro = require('../models/cadastro')

    //abrir forms
    app.get('/cadastro',async(req,res)=>{
        var resultado = await cadastro.find()
        res.render('cadastro.ejs',{dados:resultado})
        console.log(resultado)
    })

    //gravar as infos do forms no banco de dados
    app.post('/cadastro',(req,res)=>{
        var documento = new cadastro({
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/cadastro')})
        .catch(()=>{res.sen('Não foi possivel gravar')})
    })


}