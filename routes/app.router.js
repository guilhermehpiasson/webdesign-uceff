module.exports = app => {
    
    const enderecosController = require("../controllers/enderecos.controller");
    const router = require("express").Router();

    router.get('/enderecos/cidades', enderecosController.consultaCidades)
    router.post('/enderecos/consulta-cep', enderecosController.consultaCEP)

    router.get('/consulta-cep/:cep', enderecosController.consultaCEP);

    app.use('/api', router);
}