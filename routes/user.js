var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");

var User = require("../models/user");
var messaRoutes = require("../models/message");

router.post("/signup", async function (req, res) {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday,
      genre: req.body.genre,
    });
  
    try {
      const userSaved = await user.save();
      res.status(201).json({
        msgSuccess: "Usuário salvo com sucesso.",
        objSaved: userSaved,
      });
    } catch (e) {
      return res.status(500).json({
        myErrorTitle: "Um erro aconteceu na hora de salvar.",
        myError: e,
      });
    }
});

router.post("/login", async function (req, res) {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(401).json({
        error: "Credenciais inválidas",
      });
    }
  
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(401).json({
        error: "Usuário não existe",
      });
    }
  
    if (user.password != password) {
      return res.status(401).json({
        error: "Senha inválida",
      });
    }
  
    const { id, firstName } = user;
    const token = jwt.sign({ id, email:user.email }, "daniel123", {
      expiresIn: 1200,
    });
  
    return res.json({ token, email, firstName });
});

module.exports = router; 