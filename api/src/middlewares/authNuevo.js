const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { compareSync } = require("bcryptjs");
const { User } = require("../db");

const { use } = require("chai");

exports.register = async (req, res) => {
  const { username, password, email, lastname } = req.body;
  if (!username || !password || !email || !lastname) {
    return res.status(404).send({
      success: false,
      error: "Must complete all fields",
    });
  } else {
    let existe = await User.findAll({ where: { email } });
    // console.log(existe);
    // console.log("existe==", existe.length);
    // console.log("existe numb", Number(existe));
    if (existe.length === 1) {
      // console.log("existe2", existe);

      return res.status(404).json({
        success: false,
        error: "Usuario ya registrado",
      });
    } else if (existe.length === 0) {
      
      const user = User.create({
        username: username,
        password: password,
        email: email,
        lastname: lastname,
        id: Math.random() * password.length,
      })
        .then((user) => {
          res.send({
            success: true,
            message: "Thanks for register <3, now sign in!",
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
              lastname: user.lastname
            },
          });
        })
        .catch((err) => {
          res.send({
            success: false,
            message: "Something went wrong",
            error: err,
          });
        });
    }
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    // NOT FINDED USER
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Could not found user",
      });
    }
    //INCORRET PASSWORD


    

    const payload = {
      username: user.username,
      id: user.id,
      email: user.email,
      lastname: user.lastname,
      isAdmin: user.isAdmin,
    };
    const token = jwt.sign(payload, "secretKey", { expiresIn: "1d" });
    const cookiesOptions = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    // console.log("Holi soy token", token);
    res.cookie("jwt", token, cookiesOptions);

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      token: token,
      name: user.username,
      lastname: user.lastname,
      isAdmin: user.isAdmin,
    });
  });
};

exports.protectedRoute = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      user: {
        id: req.user.id,
        user: req.user.username,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  console.log("success logout");
  return res.redirect("/");
};


