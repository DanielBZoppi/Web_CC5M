const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  // Se não tiver
  if (!authorization) {
    return res.status(401).json({
      error: "Login required",
    });
  }

  const [, token] = authorization.split(" ");
  

  try {
    const data = jwt.verify(token, "daniel123");
    const { id, email } = data;

    // Busca no banco
    const user = await User.findOne({
      email:email,
    });

    if (!user) {
      return res.status(401).json({
        error: "Usuário inválido",
      });
    }

    req.userId = id;
    req.userUsername = user.firstName;

    return next();
  } catch (e) {
    return res.status(401).json({
      error: "Token expirado ou inválido.",
    });
  }
};