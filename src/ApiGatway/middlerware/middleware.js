import { verifyToken } from "../utils/jwt.js";

const context =  ({ req }) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '').trim();
  if (!token) return {};
  const decoded = verifyToken(token);
  if (!decoded) return {};
  return { userId: decoded.userId };
}


export default context;