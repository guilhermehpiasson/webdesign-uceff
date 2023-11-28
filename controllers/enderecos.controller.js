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
