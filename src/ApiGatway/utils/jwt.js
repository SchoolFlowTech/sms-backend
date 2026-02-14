import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; 

export const createToken = (userId) => {
  console.log("userid is here nigga",userId)
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
  console.log("tokenuser",token);
  return token
};

export const verifyToken = (token) => {
  console.log("verufy",token)
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null; 
  }
};
