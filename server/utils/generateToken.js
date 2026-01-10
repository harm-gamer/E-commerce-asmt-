import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  console.log("Generating token for ID:", id, "with role:", role);
  console.log("JWT Secret:", process.env.JWT_SECRET);
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export default generateToken;
