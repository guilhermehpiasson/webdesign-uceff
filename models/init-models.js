var DataTypes = require("sequelize").DataTypes;
var _ENDERECOS = require("./ENDERECOS");

function initModels(sequelize) {
  var ENDERECOS = _ENDERECOS(sequelize, DataTypes);

  return {
    ENDERECOS,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
