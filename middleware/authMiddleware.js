const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "No token provided!" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

exports.blacklistToken = (token, expiresIn) => {};

exports.hasRole = (requiredRole) => (req, res, next) => {
  const rolesHierarchy = {
    user: 1,
    general: 2,
    admin: 3,
  };

  if (rolesHierarchy[req.userRole] < rolesHierarchy[requiredRole]) {
    return res
      .status(403)
      .json({ message: "Access denied. Insufficient permissions." });
  }
  next();
};
