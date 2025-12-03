import jwt from "jsonwebtoken";

const context =  ({ req }) => {
  console.log("Headers:", req.headers);
  const authHeader = req.headers.authorization || '';
  console.log("Authorization header:", authHeader);
  const token = authHeader.replace('Bearer ', '').trim();
  console.log("Token extracted:", token);
  if (!token) return {};
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    return { userId: decoded.userId };
  } catch (err) {
    console.log("JWT error:", err);
    return {};
  }
}


export default context;