// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const users = await tables.user.readAll();

    // Respond with the offers in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const user = req.body;

    // Créer un nouvel utilisateur
    const insertUserId = await tables.user.create(user);
    // const insertCandiateId = await tables.candidate.create(user, insertUserId);

    res.status(201).json(insertUserId); // Répondre avec l'utilisateur créé
  } catch (err) {
    next(err);
  }
};

// const findIfConnectedUser = async (req, res, next) => {
//   try {
//     const { sub } = req.auth;
//     // Fetch a specific user from the database based on the provided ID
//     const user = await tables.user.findConnectedUser(sub);

//     // If the user is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the user in JSON format
//     if (user == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(user).sendStatus(200);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

module.exports = {
  browse,
  add,
  read,
};
