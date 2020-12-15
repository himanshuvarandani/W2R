import { Schema, model } from "mongoose"

const loginSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, default: false },
})

const Login = model("login", loginSchema, "login")
export default Login
