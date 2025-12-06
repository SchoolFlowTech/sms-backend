import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; 

export const createToken = (userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
  return token
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null; 
  }
};
