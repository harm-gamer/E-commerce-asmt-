import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User exists" });

  const user = await User.create({ name, email, password });
  
  res.status(200).json({
    _id: user._id,
    name: user.name,
    role: user.role,
    token: generateToken(user._id, user.role),
  });

};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({
   user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    token: generateToken(user._id, user.role),
  });
};
