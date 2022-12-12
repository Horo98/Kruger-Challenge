const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [2, 50],
            msg: "The name must only contain at least two letters",
          },
        },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true,
        // validate: {
        //   len: {
        //     args: [10, 10],
        //     msg: "La cedula tiene que tener 10 numeros",
        //   },
        // },
      },


      telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   is: {
        //     args: /^((\+|)[0-9]{1,3}(-|\s)[0-9]{2,4}(-|\s)[0-9]{6,8})$/,
        //     msg: "Enter a valid phone",
        //   },
        // },
      },
      birth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      domicilio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vacunacion:{
        type: DataTypes.STRING,
        allowNull:true,

      },
      tipoVacuna:{
        type: DataTypes.STRING,
        allowNull:true,

      },
      fechavacuna:{
        type: DataTypes.STRING,
        allowNull:true,

      },
      numerodosis:{
        type: DataTypes.INTEGER,
        allowNull:true,

      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

    },
    {
      timestamp: false,
      createdAt: false,
      updatedAt: false,
    }
  );
};
