const cpfEValido = require('../../utils/cpfValidor.js');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    // Associando tabelas, gerando as FKs
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });

      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      });

      // adicionando nova associação que retorna todos os usuários;
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasMatriculas'
      });
    }
  }

  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: [3],
          msg: 'O atributo nome deve possuir no mínimo 3 caracteres!'
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato de e-mail inválido!'
        },
      },
      unique: true
    },
    cpf:  {
      type: DataTypes.STRING,
      validate: {
        cpfValido: (cpf) => {
          if (!cpfEValido(cpf)) throw new Error('CPF Inválido!');
        }
      },
      unique: true
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true,
    defaultScope: {
      where: {
        role:  true
      }
    },
    scopes: {
      todasAsPessoas: {
        where: {}
      }
    }
  });
  return Pessoa;
};