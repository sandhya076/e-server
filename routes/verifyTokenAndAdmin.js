import verifyToken from "./verifyToken.js";

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(404).json("you are not allowed to do that !");
    }
  });
};

export default verifyTokenAndAdmin;
