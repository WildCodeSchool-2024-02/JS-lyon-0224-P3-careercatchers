const verifyRole = (requiredRole) => (req, res, next) => {
  try {
    const { user } = req.body;
    if (user === false || user.role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden" });
    }
    return next();
  } catch (err) {
    return res.sendStatus(401);
  }
};

module.exports = verifyRole;
