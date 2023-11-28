const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ENDERECOS', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'UF',
        key: 'ID'
      }
    },
    CEP: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ENDERECO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CIDADE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },  
  }, {
    sequelize,
    tableName: 'ENDERECOS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
