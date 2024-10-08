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

// eslint-disable-next-line consistent-return
const getProfile = async (req, res, next) => {
  try {
    const { sub } = req.auth;
    const user = await tables.user.read(sub);

    if (user === null) {
      return res.sendStatus(404);
    }

    if (user.role === "candidate") {
      const candidate = await tables.candidate.getCandidateInfo(sub);
      delete user.hashed_password;

      return res.json({
        id: user.id,
        email: user.email,
        role: user.role,
        lastname: candidate.lastname,
        firstname: candidate.firstname,
      });
    }

    if (user.role === "company") {
      const company = await tables.company.getCompanyInfo(sub);

      return res.json({
        id: user.id,
        email: user.email,
        role: user.role,
        name: company.name,
      });
    }

    return res.json(user);
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroyUser = async (req, res, next) => {
  // Extract the item id from the request body
  const { id } = req.body;
  try {
    // Delete the news from the database
    const deletedUser = await tables.user.delete(id);
    // Respond with HTTP 200 (OK) and the response data
    res.status(200).json({ deletedUser });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  add,
  read,
  getProfile,
  destroyUser,
};
