module.exports = app => {
    
    const enderecosController = require("../controllers/enderecos.controller");
    const router = require("express").Router();

    router.get('/enderecos', enderecosController.consultaEnderecos)
    router.get('/enderecos/cidades', enderecosController.consultaCidades)
    router.get('/enderecos/consulta-cep/:cep', enderecosController.consultaCEP)
    router.post('/enderecos/consulta-cep', enderecosController.consultaCEP)

    app.use('/api', router)
}