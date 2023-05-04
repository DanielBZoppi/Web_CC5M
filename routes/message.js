var express = require('express');
var router = express.Router();

var Message = require("../models/message"); // pegando o Schema Message do Banco
const User = require("../models/user");
const ensureAuthenticated = require("../auth/isAuthenticated");

router.get("/pegar", async function (req, res) {
  try {
    const messages = await Message.find();
    const messagesComplete = await Promise.all(
      messages.map(async (message) => {
        const user = await User.findById(message.user, "-password");
        message.user = user;
        return message;
      })
    );

    return res.status(200).json({
      myMsgSucess: "Mensagem recuperada com sucesso.",
      objSMessageSRecuperadoS: messagesComplete,
    });
  } catch (e) {
    return res.status(500).json({
      myErroTitle: "Um erro aconteceu na hora de buscar a mensagem",
      myError: e,
    });
  }
});

router.post("/add", ensureAuthenticated, async function (req, res, next) {
  console.log(req.body)
  try {
    var message = new Message({
      content: req.body.content,
      user: req.userId,
    });
    const messageSaved = await message.save();

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $addToSet: { messages: messageSaved.id },
      },
      { projection: "-password", new: true }
    );

    messageSaved.user = user;
    res.status(201).json({
      myMsgSucess: "Mensagem salva com sucesso.",
      messageSaved,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      myErrorTitle: "Um erro aconteceu na hora de salvar.",
      myError: e,
    });
  }
});

module.exports = router; 