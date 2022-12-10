import jwt from "jsonwebtoken";
import verifyToken from "./verifyToken.js";

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(404).json("you are not allowed to do that !");
    }
  });
};

export default verifyTokenAndAuthorization;
