import { verifyToken } from "../utils/jwt.js";

const context = ({ req, res }) => {
  const token = req.cookies?.token;
  console.log("req is here",req.cookies)
  console.log("token1",token)
  if (!token) return { req, res };
  console.log(token);
  const decoded = verifyToken(token);
  console.log("decoded", decoded);
  if (!decoded) return { req, res };

  return {
    req,
    res,
    userId: decoded.userId,
  };
};

export default context;