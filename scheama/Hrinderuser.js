import mongoose from "mongoose";

const HrinderUserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
});
const HrinderUser =
  mongoose.models.HrinderUser ||
  mongoose.model("HrinderUser", HrinderUserSchema);

export default HrinderUser;
