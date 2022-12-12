const { Router } = require("express");

const {
  getDBUsers,
  getDBUserByPk,
  getUserByName,
  dbCreateUser,
  dbUpdateUser,
  dbDeleteUser

} = require("../middlewares/getAllUsers.js");
const { Op } = require("sequelize");
//<-------------

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const userByName = await getUserByName(name);
      res.status(200).send(userByName)
      return
    }
    const users = await getDBUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await getDBUserByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    await User.bulkCreate({
      username: "administrador",
      email: "admin@gmail.com",
      password: "1234567891",
      lastname: "admin",
      isAdmin: true
    })
    const userCreated = await dbCreateUser(req.body);
    res.send(userCreated);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    
    const user = await getDBUserByPk(req.params.id);
    const updatedUser = await dbUpdateUser(req.body, user);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
  
    const updatedUser = await dbDeleteUser(req.params.id);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
});




module.exports = router;
