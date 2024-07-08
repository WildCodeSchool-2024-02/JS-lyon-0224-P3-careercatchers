const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;

    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);
    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
    req.body.hashedPassword = hashedPassword;
    // console.log(hashedPassword);

    // Suppression du mot de passe non haché de la requête par mesure de sécurité
    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

const verifyCookie = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(403);
    }
    req.auth = jwt.verify(token, process.env.APP_SECRET);

    return next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
module.exports = {
  hashPassword,
  verifyCookie,
};
