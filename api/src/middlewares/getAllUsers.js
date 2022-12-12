const { QueryTypes, Sequelize, where } = require("sequelize");
const { User, Sale, Detailsale, Product, Image, conn } = require("../db.js");
const { Op } = require("sequelize");

const OBJUsers = 
{
  id: 1,
  username: "administrador",
  email: "admin@gmail.com",
  password: "1234567891",
  lastname: "admin",
  isAdmin: true
}


const getDBUsers = async () => {
  let users = await User.findAll();
  if (!users.length) {
    await dbCreateUser(OBJUsers);
  }
  return users;
};
const getDBUserByPk = async (id) => {
  const user = await User.findOne({
    where: { id },
  });
  if (!user) {
    throw new Error("user not found");
  }
  return user;
};
const getUserByName = async (name) => {
  const users = await User.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return users;
};
const dbCreateUser = async (info) => {
  await User.create(info)
  await User.bulkCreate(OBJUsers)
  return `user ${info.name} created successfully`
}
const dbUpdateUser = async (info, modelUser) => {
  delete info.id

console.log(modelUser)
  for (const property in info) {
    modelUser[property] = info[property]
  }
  modelUser.save()
  return `user ${info.name} updated successfully`;
}
const dbDeleteUser = async (id) => {
  await User.destroy( {
    where: { id }
  })
  return `user ${id} created successfully`
}
module.exports = {
  getDBUsers,
  getDBUserByPk,
  getUserByName,
  dbCreateUser,
  dbUpdateUser,
  dbDeleteUser
};
