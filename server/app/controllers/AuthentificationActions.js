const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    let user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified === true) {
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.hashed_password;
      let roleId = null;

      if (user.role === "candidate") {
        const candidate = await tables.candidate.read(user.id);
        roleId = candidate.id;
        user = {
          role: user.role,
          firstname: candidate.firstname,
          lastname: candidate.lastname,
          roleId,
        };
      }

      if (user.role === "company") {
        const company = await tables.company.read(user.id);
        roleId = company.id;
        user = {
          role: user.role,
          name: company.name,
          roleId,
        };
      }

      const token = await jwt.sign(
        { sub: user.id, role: user.role, roleId },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "Lax",
          secure: process.env.NODE_ENV === "production",
          maxAge: 3600000,
        })
        .json({ user });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};
const logout = (req, res) => {
  res.clearCookie("access_token").sendStatus(200);
};

module.exports = {
  login,
  logout,
};
