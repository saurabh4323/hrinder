import mongoose from "mongoose";

const HrinderUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const HrinderUser = mongoose.model("HrinderUser", HrinderUserSchema);
// module.exports = HrinderUser;
export default HrinderUser;
