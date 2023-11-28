module.exports = app => {
    
    const enderecosController = require("../controllers/enderecos.controller");
    const router = require("express").Router();

    router.get('/enderecos', enderecosController.consultaEnderecos)
    router.post('/enderecos/consulta-cep', enderecosController.consultaCEP)

    app.use('/api', router);
}