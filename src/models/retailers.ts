import { Schema, model } from "mongoose"

const retailerSchema = new Schema({
  name: { type: String, required: true },
  shopName: { type: String, required: true },
  shopAddress: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
})

const Retailer = model("retailer", retailerSchema, "retailer")
export default Retailer
