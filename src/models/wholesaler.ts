import { Schema, model } from "mongoose"

const wholesalerSchema = new Schema({
  name: { type: String, required: true },
  shopName: { type: String, required: true },
  shopAddress: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
})

const Wholesaler = model("wholesaler", wholesalerSchema, "wholesaler")
export default Wholesaler
