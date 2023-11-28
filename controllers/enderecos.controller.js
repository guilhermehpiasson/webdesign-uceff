const {ENDERECOS} = require('../models/index')


exports.consultaCEP = async (req, res, next) => {
    try {
      const enderecos = await ENDERECOS.findAll({
        raw: true,
         attributes: ['ID', 'CIDADE'],
        order: [['CIDADE', 'ASC']]
      });
  
      return res.status(200).json(enderecos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.consultaCidades = async (req, res, next) => {
  try {
    const enderecos = await ENDERECOS.findAll({
      raw: true,
      attributes: ['ID', 'CIDADE'],
      order: [['CIDADE', 'ASC']]
    });

    return res.status(200).json(enderecos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

exports.consultaCEP = async (req, res, next) => {
    try {
        const cep = req.params.cep;
        soap.createClient(url, (err, client) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao conectar ao serviço dos Correios' });
            }
            client.consultaCEP({ cep: cep }, async (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Erro ao consultar o CEP' });
                }

                const endereco = {
                    CEP: cep,
                    ENDERECO: result.return.end,
                    BAIRRO: result.return.bairro,
                    CIDADE: result.return.cidade,
                    UF: result.return.uf
                };

                // Salvar no banco de dados
                await ENDERECOS.create(endereco);

                return res.status(200).json(endereco);
            });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};